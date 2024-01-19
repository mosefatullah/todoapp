/*
 * Title: Workers Library
 * Description: Worker related files
 * Author: Mohammad Sefatullah
 * Date: 2024/01/05 20:15
 *
 */

// dependencies
const url = require('url');
const http = require('http');
const https = require('https');
const fs = require('fs');
const data = require('./data');
const { parseJSON } = require('../helpers/utilities');
const notify = require('../helpers/notify');

// workers object - module scaffolding
const workers = {};

// lookup all checks, get their data, send to a validator
workers.gatherAllChecks = () => {
    // get all the checks
    data.list('checks', (err1, checks) => {
        if (!err1 && checks && checks.length > 0) {
            checks.forEach((check) => {
                // read the check data
                data.read('checks', check, (err2, originalCheckData) => {
                    if (!err2 && originalCheckData) {
                        // pass the data to the check validator
                        workers.validateCheckData(parseJSON(originalCheckData));
                    } else {
                        console.log('Error: Reading one of the check data');
                    }
                });
            });
        } else {
            console.log('Error: Could not find any checks to process');
        }
    });
};

// validate individual check data
workers.validateCheckData = (originalCheckData) => {
    const checkData = originalCheckData;
    if (checkData && checkData.id) {
        checkData.state =
            typeof checkData.state === 'string' && ['up', 'down'].indexOf(checkData.state) > -1
                ? checkData.state
                : 'down';
        checkData.lastChecked =
            typeof checkData.lastChecked === 'number' && checkData.lastChecked > 0
                ? checkData.lastChecked
                : false;

        // pass to the next process
        workers.performCheck(checkData);
    } else {
        console.log('Error: Check was invalid or not properly formatted!');
    }
};

// perform check
workers.performCheck = (originalCheckData) => {
    // prepare the initial check outcome
    const checkOutcome = {
        error: false,
        responseCode: false,
    };

    // mark that the outcome has not been sent yet
    let outcomeSent = false;

    // parse the hostname and full url from original check data
    const parsedUrl = url.parse(`${originalCheckData.protocol}://${originalCheckData.url}`, true);
    const { hostname } = parsedUrl;
    const { path } = parsedUrl;

    // construct the request
    const requestDetails = {
        protocol: `${originalCheckData.protocol}:`,
        hostname,
        method: originalCheckData.method.toUpperCase(),
        path,
        timeout: originalCheckData.timeoutSeconds * 1000,
    };

    // instantiate the request object using either http or https module
    const protocolToUse = originalCheckData.protocol === 'http' ? http : https;
    const req = protocolToUse.request(requestDetails, (res) => {
        // grab the status of the sent request
        const status = res.statusCode;

        // update the checkOutcome and pass the data along
        checkOutcome.responseCode = status;
        if (!outcomeSent) {
            workers.processCheckOutcome(originalCheckData, checkOutcome);
            outcomeSent = true;
        }
    });

    // bind to the error event so it does not get thrown
    req.on('error', (e) => {
        // update the checkOutcome and pass the data along
        checkOutcome.error = {
            error: true,
            value: e,
        };
        if (!outcomeSent) {
            workers.processCheckOutcome(originalCheckData, checkOutcome);
            outcomeSent = true;
        }
    });

    // bind to the timeout event
    req.on('timeout', () => {
        // update the checkOutcome and pass the data along
        checkOutcome.error = {
            error: true,
            value: 'timeout',
        };
        if (!outcomeSent) {
            workers.processCheckOutcome(originalCheckData, checkOutcome);
            outcomeSent = true;
        }
    });

    // end the request
    req.end();
};

// save check outcome to database and send to next process
workers.processCheckOutcome = (originalCheckData, checkOutcome) => {
    // check if check outcome is up or down
    const state =
        !checkOutcome.error &&
        checkOutcome.responseCode &&
        originalCheckData.successCodes.indexOf(checkOutcome.responseCode) > -1
            ? 'up'
            : 'down';

    // decide whether an alert is needed
    const alertNeeded = originalCheckData.lastChecked && originalCheckData.state !== state;

    // log the outcome
    const timeOfCheck = Date.now();
    workers.log(originalCheckData, checkOutcome, state, alertNeeded, timeOfCheck);

    // update the check data
    const newCheckData = originalCheckData;
    newCheckData.state = state;
    newCheckData.lastChecked = timeOfCheck;

    // save the updates
    data.update('checks', newCheckData.id, newCheckData, (err) => {
        if (!err) {
            // send the new check data to next process
            if (alertNeeded) {
                workers.alertUserToStatusChange(newCheckData);
            } else {
                console.log('Alert is not needed as there is no state change!');
            }
        } else {
            console.log('Error: Could not update one of the checks!');
        }
    });
};

// alert the user as to a change in their check status
workers.alertUserToStatusChange = (newCheckData) => {
    const msg = `Alert: Your check for ${newCheckData.method.toUpperCase()} ${
        newCheckData.protocol
    }://${newCheckData.url} is currently ${newCheckData.state}`;
    notify.sendEmail(newCheckData.email, msg, (err) => {
        if (err === true) {
            console.log(
                `Success: User was alerted to a status change in their check, with the message: ${msg}`
            );
        } else {
            console.log(
                'Error: Could not send email alert to user who had a state change in their check!'
            );
        }
    });
};

// save check outcome to database
workers.log = (originalCheckData, checkOutcome, state, alertNeeded, timeOfCheck) => {
    // form the log data
    const logData = {
        check: originalCheckData,
        outcome: checkOutcome,
        state,
        alert: alertNeeded,
        time: timeOfCheck,
    };

    // convert data to string
    const logString = JSON.stringify(logData);

    // determine the name of the log file
    const logFileName = originalCheckData.id;

    // append the log string to the file
    workers.append(logFileName, logString, (err) => {
        if (err) {
            console.log('Logging to file failed for one of the checks!');
        }
    });
};

// append the log string to the file
workers.append = (file, str, callback) => {
    // open the file for appending
    fs.open(`${data.basedir}logs/${file}.log`, 'a', (err1, fileDescriptor) => {
        if (!err1 && fileDescriptor) {
            // append to file and close it
            fs.appendFile(fileDescriptor, `${str}\n`, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing file that was being appended!');
                        }
                    });
                } else {
                    callback('Error appending to file!');
                }
            });
        } else {
            callback('Error: Could not open file for appending!');
        }
    });
};

// timer to execute the worker-process once per minute
workers.loop = () => {
    setInterval(() => {
        workers.gatherAllChecks();
    }, 1000 * 60);
};

// create workers
workers.createWorkers = () => {
    // execute all the checks
    workers.gatherAllChecks();

    // call the loop so that the checks will execute later on
    workers.loop();
};

// start the workers
workers.init = () => {
    workers.createWorkers();
};

// export module
module.exports = workers;
