/*
 * Title: Server File
 * Description: Create and handle server related stuff
 * Author: Mohammad Sefatullah
 * Date: 2024/01/05 20:15
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('../helpers/handleReqRes');
const environment = require('../helpers/environment');

// server object - module scaffolding
const server = {};

// create server
server.createServer = () => {
    const createServerVar = http.createServer(server.handleReqRes);
    createServerVar.listen(environment.port, () => {
        console.log(`Listening to port ${environment.port}`);
    });
};

// handle request response
server.handleReqRes = handleReqRes;

// start the server
server.init = () => {
    server.createServer();
};

// export module
module.exports = server;
