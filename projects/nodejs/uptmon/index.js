/*
 * Title: Uptime Monitoring Application
 * Description: A RESTful API to monitor up or down time of user defined links
 * Author: Mohammad Sefatullah
 * Date: 31/12/2023
 *
 */

// dependencies
const server = require('./lib/server');
const workers = require('./lib/workers');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();

    // start the workers
    workers.init();
};

// execute
app.init();

// export the app
module.exports = app;
