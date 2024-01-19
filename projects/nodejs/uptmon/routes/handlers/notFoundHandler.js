/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Mohammad Sefatullah
 * Date: 2023/12/31 01:32
 *
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
