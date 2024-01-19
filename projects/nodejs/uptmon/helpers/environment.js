/*
 * Title: Environments
 * Description: Handle all environment related things
 * Author: Mohammad Sefatullah
 * Date: 2023/12/31 12:16
 *
 */

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging',
    secretKey: 'loremipsumdolor',
    maxChecks: 2,
    mail: {
        clientId: '684154258480-12mvvcatrdrnveaq5dsagsk26enmsc2p.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken:
            '1//04z_MQMwHmmD0CgYIARAAGAQSNwF-L9Ir1xd5sKlGPJuitUrios7jOFeBDcIgF0hSiZ8bnkz532LwXLZK5m8Ay_zKJL06pQpWv58',
    },
};

environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'loremipsumdolor',
    maxChecks: 5,
    mail: {
        clientId: '684154258480-12mvvcatrdrnveaq5dsagsk26enmsc2p.apps.googleusercontent.com',
        clientSecret: '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',
        refreshToken:
            '1//04z_MQMwHmmD0CgYIARAAGAQSNwF-L9Ir1xd5sKlGPJuitUrios7jOFeBDcIgF0hSiZ8bnkz532LwXLZK5m8Ay_zKJL06pQpWv58',
    },
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
