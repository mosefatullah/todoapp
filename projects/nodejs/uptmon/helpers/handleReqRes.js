/*
 * Title: Handle Request Response
 * Description: Handle Request and Response
 * Author: Mohammad Sefatullah
 * Date: 2023/12/31 01:15
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes/routes');
const { notFoundHandler } = require('../routes/handlers/notFoundHandler');
const { parseJSON } = require('./utilities');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const pathOfUrl = parsedUrl.pathname;
    const trimmedPath = pathOfUrl.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        pathOfUrl,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let data = '';

    req.on('data', (buffer) => {
        data += decoder.write(buffer);
    });

    req.on('end', () => {
        data += decoder.end();

        requestProperties.body = parseJSON(data);

        const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
        chosenHandler(requestProperties, (statusCode, payload) => {
            const statusCode0 = typeof statusCode === 'number' ? statusCode : 500;
            const payload0 = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload0);

            // return the final response
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode0);
            res.end(payloadString);
        });
    });
};

module.exports = handler;
