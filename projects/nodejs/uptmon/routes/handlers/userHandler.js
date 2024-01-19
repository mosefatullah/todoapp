/*
 * Title: User Handler
 * Description: Handle User Route
 * Author: Mohammad Sefatullah
 * Date: 2024/1/1 12:50
 *
 */

// dependencies
const data = require('../../lib/data');
const { toHash, parseJSON } = require('../../helpers/utilities');
const { verifyToken } = require('./tokenHandler');

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._users = {};

handler._users.post = (requestProperties, callback) => {
    let { firstName, lastName, username, password, email, tosAgreement } = requestProperties.body;

    firstName = typeof firstName === 'string' && firstName.trim().length > 0 ? firstName : false;
    lastName = typeof lastName === 'string' && lastName.trim().length > 0 ? lastName : false;
    username = typeof username === 'string' && username.trim().length > 0 ? username : false;
    password = typeof password === 'string' && password.trim().length > 0 ? password : false;
    email = typeof email === 'string' && email.trim().length > 0 ? email : false;
    tosAgreement = !!(typeof tosAgreement === 'boolean' && tosAgreement === true);

    if (firstName && lastName && username && password && email && tosAgreement) {
        // make sure that the user doesn't already exist
        data.read('users', username, (err1) => {
            if (err1) {
                const userObject = {
                    firstName,
                    lastName,
                    username,
                    password: toHash(password),
                    email,
                    metadata: {
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    },
                    options: {
                        isVerified: false,
                        tosAgreement,
                    },
                };
                // store the user to db
                data.create('users', username, userObject, (err2) => {
                    if (!err2) {
                        callback(200, {
                            message: 'Successfully created new user!',
                        });
                    } else {
                        callback(500, {
                            error: 'Could not create new user!',
                        });
                    }
                });
            } else {
                callback(500, {
                    error: 'User already exist!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'Required fields or term of service agreement is missing!',
        });
    }
};
handler._users.get = (requestProperties, callback) => {
    // check the username if valid
    const { id } = requestProperties.queryStringObject;
    const username = typeof id === 'string' && id.trim().length > 0 ? id : false;
    if (username) {
        // verify the token
        const token =
            typeof requestProperties.headersObject.token === 'string'
                ? requestProperties.headersObject.token
                : false;

        verifyToken(token, username, (tokenIsValid) => {
            if (tokenIsValid) {
                // lookup the user
                data.read('users', username, (err, u) => {
                    const user = { ...parseJSON(u) };
                    if (!err && user) {
                        delete user.password;
                        callback(200, user);
                    } else {
                        callback(404, {
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
            error: 'ID is missing or invalid!',
        });
    }
};
handler._users.put = (requestProperties, callback) => {
    // check the username if valid
    const { id } = requestProperties.queryStringObject;
    const username = typeof id === 'string' && id.trim().length > 0 ? id : false;
    if (username) {
        // check the optional fields
        const { firstName, lastName, password } = requestProperties.body;
        if (firstName || lastName || password) {
            // verify the token
            const token =
                typeof requestProperties.headersObject.token === 'string'
                    ? requestProperties.headersObject.token
                    : false;

            verifyToken(token, username, (tokenIsValid) => {
                if (tokenIsValid) {
                    // lookup the user
                    data.read('users', username, (err1, uData) => {
                        const userData = { ...parseJSON(uData) };
                        if (!err1 && userData) {
                            if (firstName) {
                                userData.firstName = firstName;
                            }
                            if (lastName) {
                                userData.lastName = lastName;
                            }
                            if (password) {
                                userData.password = toHash(password);
                            }
                            // store to database
                            data.update('users', username, userData, (err2) => {
                                if (!err2) {
                                    callback(200, {
                                        message: 'Successfully updated the user!',
                                    });
                                } else {
                                    callback(500, {
                                        error: 'Could not update the user!',
                                    });
                                }
                            });
                        } else {
                            callback(404, {
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
                error: 'You must provide at least one field to update!',
            });
        }
    } else {
        callback(400, {
            error: 'ID is missing or invalid!',
        });
    }
};
handler._users.delete = (requestProperties, callback) => {
    // check the username if valid
    const { id } = requestProperties.queryStringObject;
    const username = typeof id === 'string' && id.trim().length > 0 ? id : false;
    if (username) {
        // verify the token
        const token =
            typeof requestProperties.headersObject.token === 'string'
                ? requestProperties.headersObject.token
                : false;

        verifyToken(token, username, (tokenIsValid) => {
            if (tokenIsValid) {
                // lookup the user
                data.read('users', username, (err1, uData) => {
                    if (!err1 && uData) {
                        // delete the user
                        data.delete('users', username, (err2) => {
                            if (!err2) {
                                callback(200, {
                                    message: 'Successfully deleted the user!',
                                });
                            } else {
                                callback(500, {
                                    error: 'Could not delete the user!',
                                });
                            }
                        });
                    } else {
                        callback(404, {
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
            error: 'ID is missing or invalid!',
        });
    }
};

module.exports = handler;
