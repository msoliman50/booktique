// get current env mode
let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'testing') {
    let config = require('./env.json');

    // get only the configuration of the current mode
    let envConfig = config[env];

    // set env variables in the running process
    for (const key of Object.keys(envConfig)) {
        process.env[key] = envConfig[key];
    }
}

module.exports = env;