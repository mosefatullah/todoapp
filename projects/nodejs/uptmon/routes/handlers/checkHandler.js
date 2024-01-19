/*
 * Title: Check Handler
 * Description: Handle User Defined Check Route
 * Author: Mohammad Sefatullah
 * Date: 2024/01/05 12:05
 *
 */

// dependencies
const data = require('../../lib/data');
const { parseJSON, createRandomString } = require('../../helpers/utilities');
const { verifyToken } = require('./tokenHandler');
const { maxChecks } = require('../../helpers/environment');

// module scaffolding
const handler = {};

handler.checkHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._check[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._check = {};

handler._check.post = (requestProperties, callback) => {
    // validate inputs
    let { protocol, url, method, successCodes, timeoutSeconds } = requestProperties.body;
    protocol =
        typeof protocol === 'string' && ['http', 'https'].indexOf(protocol) > -1 ? protocol : false;
    url = typeof url === 'string' && url.trim().length > 0 ? url : false;
    method =
        typeof method === 'string' &&
        ['get', 'post', 'put', 'delete'].indexOf(method.toLowerCase()) > -1
            ? method.toLowerCase()
            : false;
    successCodes =
        typeof successCodes === 'object' && successCodes instanceof Array ? successCodes : false;
    timeoutSeconds =
        typeof timeoutSeconds === 'number' &&
        timeoutSeconds % 1 === 0 &&
        timeoutSeconds >= 1 &&
        timeoutSeconds <= 5
            ? timeoutSeconds
            : false;

    if (protocol && url && method && successCodes && timeoutSeconds) {
        // verify token
        const token =
            typeof requestProperties.headersObject.token === 'string'
                ? requestProperties.headersObject.token
                : false;

        // lookup the username by reading the token
        data.read('tokens', token, (err1, tokenData) => {
            if (!err1 && tokenData) {
                const tokenObject = parseJSON(tokenData);
                const { username, email } = tokenObject;

                // lookup the user data
                data.read('users', username, (err2, userData) => {
                    if (!err2 && userData) {
                        verifyToken(token, username, (tokenIsValid) => {
                            if (tokenIsValid) {
                                const userObject = parseJSON(userData);
                                const userChecks =
                                    typeof userObject.checks === 'object' &&
                                    userObject.checks instanceof Array
                                        ? userObject.checks
                                        : [];

                                if (userChecks.length < maxChecks) {
                                    const checkId = createRandomString(20);
                                    const checkObject = {
                                        id: checkId,
                                        username,
                                        email,
                                        protocol,
                                        url,
                                        method,
                                        successCodes,
                                        timeoutSeconds,
                                    };
                                    // save the object
                                    data.create('checks', checkId, checkObject, (err3) => {
                                        if (!err3) {
                                            // add check id to the user's object
                                            userObject.checks = userChecks;
                                            userObject.checks.push(checkId);

                                            // save the new user data
                                            data.update('users', username, userObject, (err4) => {
                                                if (!err4) {
                                                    // return the data about the new check
                                                    callback(200, checkObject);
                                                } else {
                                                    callback(500, {
                                                        error: 'Could not update the user with the new check!',
                                                    });
                                                }
                                            });
                                        } else {
                                            callback(500, {
                                                error: 'Could not create the new check!',
                                            });
                                        }
                                    });
                                } else {
                                    callback(401, {
                                        error: 'User has already reached max check limit!',
                                    });
                                }
                            } else {
                                callback(403, {
                                    error: 'Authentication failure!',
                                });
                            }
                        });
                    } else {
                        callback(403, {
                            error: 'User not found!',
                        });
                    }
                });
            } else {
                callback(403, {
                    error: 'Authentication failure!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'There are some missing or invalid fields!',
        });
    }
};
handler._check.get = (requestProperties, callback) => {
    const { id } = requestProperties.queryStringObject;

    if (id) {
        // lookup the check
        data.read('checks', id, (err, checkData) => {
            if (!err && checkData) {
                const check = parseJSON(checkData);
                const token =
                    typeof requestProperties.headersObject.token === 'string'
                        ? requestProperties.headersObject.token
                        : false;

                verifyToken(token, check.username, (tokenIsValid) => {
                    if (tokenIsValid) {
                        callback(200, check);
                    } else {
                        callback(403, {
                            error: 'Authentication failure!',
                        });
                    }
                });
            } else {
                callback(500, {
                    error: 'Could not find the check!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'ID is missing or invalid!',
        });
    }
};
handler._check.put = (requestProperties, callback) => {
    const { id } = requestProperties.body;

    if (id) {
        // lookup the check
        data.read('checks', id, (err1, checkData) => {
            if (!err1 && checkData) {
                const checkObject = parseJSON(checkData);
                const { protocol, url, method, successCodes, timeoutSeconds } =
                    requestProperties.body;
                checkObject.protocol =
                    typeof protocol === 'string' && ['http', 'https'].indexOf(protocol) > -1
                        ? protocol
                        : checkObject.protocol;
                checkObject.url =
                    typeof url === 'string' && url.trim().length > 0 ? url : checkObject.url;
                checkObject.method =
                    typeof method === 'string' &&
                    ['get', 'post', 'put', 'delete'].indexOf(method.toLowerCase()) > -1
                        ? method.toLowerCase()
                        : checkObject.method;
                checkObject.successCodes =
                    typeof successCodes === 'object' && successCodes instanceof Array
                        ? successCodes
                        : checkObject.successCodes;
                checkObject.timeoutSeconds =
                    typeof timeoutSeconds === 'number' &&
                    timeoutSeconds % 1 === 0 &&
                    timeoutSeconds >= 1 &&
                    timeoutSeconds <= 5
                        ? timeoutSeconds
                        : checkObject.timeoutSeconds;

                if (protocol || url || method || successCodes || timeoutSeconds) {
                    const token =
                        typeof requestProperties.headersObject.token === 'string'
                            ? requestProperties.headersObject.token
                            : false;
                    verifyToken(token, checkObject.username, (tokenIsValid) => {
                        if (tokenIsValid) {
                            // store the new updates
                            data.update('checks', id, checkObject, (err2) => {
                                if (!err2) {
                                    callback(200, {
                                        message: 'Successfully updated the check!',
                                    });
                                } else {
                                    callback(500, {
                                        error: 'Could not update the check!',
                                    });
                                }
                            });
                        } else {
                            callback(403, {
                                error: 'Authentication failure!',
                            });
                        }
                    });
                } else {
                    callback(400, {
                        error: 'At least one field is required to update!',
                    });
                }
            } else {
                callback(500, {
                    error: 'Could not find the check!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'ID is missing or invalid!',
        });
    }
};
handler._check.delete = (requestProperties, callback) => {
    const { id } = requestProperties.body;

    if (id) {
        // lookup the check
        data.read('checks', id, (err1, checkData) => {
            if (!err1 && checkData) {
                const checkObject = parseJSON(checkData);
                const token =
                    typeof requestProperties.headersObject.token === 'string'
                        ? requestProperties.headersObject.token
                        : false;
                verifyToken(token, checkObject.username, (tokenIsValid) => {
                    if (tokenIsValid) {
                        // delete the check data
                        data.delete('checks', id, (err2) => {
                            if (!err2) {
                                data.read('users', checkObject.username, (err3, userData) => {
                                    const userObject = parseJSON(userData);
                                    if (!err3 && userData) {
                                        const userChecks =
                                            typeof userObject.checks === 'object' &&
                                            userObject.checks instanceof Array
                                                ? userObject.checks
                                                : [];

                                        // remove the deleted check id from user's list of checks
                                        const checkPosition = userChecks.indexOf(id);
                                        if (checkPosition > -1) {
                                            userChecks.splice(checkPosition, 1);
                                            // resave the user data
                                            userObject.checks = userChecks;
                                            data.update(
                                                'users',
                                                checkObject.username,
                                                userObject,
                                                (err4) => {
                                                    if (!err4) {
                                                        callback(200, {
                                                            message:
                                                                'Successfully deleted the check!',
                                                        });
                                                    } else {
                                                        callback(500, {
                                                            error: 'Could not update the user!',
                                                        });
                                                    }
                                                }
                                            );
                                        } else {
                                            callback(500, {
                                                error: 'Could not find the check!',
                                            });
                                        }
                                    } else {
                                        callback(500, {
                                            error: 'Could not find the user!',
                                        });
                                    }
                                });
                            } else {
                                callback(500, {
                                    error: 'Could not delete the check!',
                                });
                            }
                        });
                    } else {
                        callback(403, {
                            error: 'Authentication failure!',
                        });
                    }
                });
            } else {
                callback(500, {
                    error: 'Could not find the check!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'ID is missing or invalid!',
        });
    }
};

module.exports = handler;
