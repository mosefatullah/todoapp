/*
 * Title:
 * Description:
 * Author: Mohammad Sefatullah
 * Date: 2023/12/31 01:22
 *
 */

// dependencies
const { tokenHandler } = require('./handlers/tokenHandler');
const { userHandler } = require('./handlers/userHandler');
const { checkHandler } = require('./handlers/checkHandler');

const routes = {
    token: tokenHandler,
    user: userHandler,
    check: checkHandler,
};

module.exports = routes;
