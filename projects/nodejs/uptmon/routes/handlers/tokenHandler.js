/*
 * Title: Token Handler
 * Description: Handle User Token Route
 * Author: Mohammad Sefatullah
 * Date: 2024/01/03 15:21
 *
 */

// dependencies
const data = require('../../lib/data');
const { toHash, parseJSON, createRandomString } = require('../../helpers/utilities');

// module scaffolding
const handler = {};

handler.tokenHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._token[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler.verifyToken = (id, username, callback) => {
    data.read('tokens', id, (err1, tokenData) => {
        if (!err1 && tokenData) {
            if (
                parseJSON(tokenData).username === username &&
                parseJSON(tokenData).expires > Date.now()
            ) {
                callback(true);
            } else {
                callback(false);
            }
        } else {
            callback(false);
        }
    });
};

handler._token = {};

handler._token.post = (requestProperties, callback) => {
    let { username, password } = requestProperties.body;
    username = typeof username === 'string' && username.trim().length > 0 ? username : false;
    password = typeof password === 'string' && password.trim().length > 0 ? password : false;

    if (username && password) {
        data.read('users', username, (err1, userData) => {
            if (!err1) {
                const hashedPassword = toHash(password);
                if (hashedPassword === parseJSON(userData).password) {
                    const tokenId = createRandomString(20);
                    const expires = Date.now() + 60 * 60 * 1000;
                    const tokenObject = {
                        username,
                        id: tokenId,
                        email: parseJSON(userData).email,
                        expires,
                    };
                    data.create('tokens', tokenId, tokenObject, (err2) => {
                        if (!err2) {
                            callback(200, tokenObject);
                        } else {
                            callback(500, {
                                error: 'Could not create new token!',
                            });
                        }
                    });
                } else {
                    callback(400, {
                        error: 'Password is not valid!',
                    });
                }
            } else {
                callback(404, {
                    error: 'User not found!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'Required fields are missing!',
        });
    }
};
handler._token.get = (requestProperties, callback) => {
    // check the id if valid
    const { id } = requestProperties.queryStringObject;
    const tokenId = typeof id === 'string' && id.trim().length > 0 ? id : false;
    if (tokenId) {
        data.read('tokens', tokenId, (err, tokenData) => {
            const token = { ...parseJSON(tokenData) };
            if (!err && token) {
                callback(200, token);
            } else {
                callback(404, {
                    error: 'Token not found!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'Token ID is missing or invalid!',
        });
    }
};
handler._token.put = (requestProperties, callback) => {
    // check the id if valid
    const { id, extend } = requestProperties.body;
    const tokenId = typeof id === 'string' && id.trim().length > 0 ? id : false;
    const extendToken = typeof extend === 'boolean' && extend === true ? extend : false;
    if (tokenId && extendToken) {
        data.read('tokens', tokenId, (err1, tokenData) => {
            const tokenObject = { ...parseJSON(tokenData) };
            if (tokenObject.expires > Date.now()) {
                tokenObject.expires = Date.now() + 60 * 60 * 1000;
                data.update('tokens', tokenId, tokenObject, (err2) => {
                    if (!err2) {
                        callback(200, {
                            message: 'Successfully extended token expiration!',
                        });
                    } else {
                        callback(500, {
                            error: 'Could not update token expiration!',
                        });
                    }
                });
            } else {
                callback(400, {
                    error: 'Token already expired!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'Required fields are missing, invalid or extend is false!',
        });
    }
};
handler._token.delete = (requestProperties, callback) => {
    // check the id if valid
    const { id } = requestProperties.queryStringObject;
    const tokenId = typeof id === 'string' && id.trim().length > 0 ? id : false;
    if (tokenId) {
        data.read('tokens', tokenId, (err1, tokenData) => {
            if (!err1 && tokenData) {
                data.delete('tokens', tokenId, (err2) => {
                    if (!err2) {
                        callback(200, {
                            message: 'Successfully deleted token!',
                        });
                    } else {
                        callback(500, {
                            error: 'Could not delete token!',
                        });
                    }
                });
            } else {
                callback(500, {
                    error: 'Token not found!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'Token ID is missing or invalid!',
        });
    }
};

module.exports = handler;
