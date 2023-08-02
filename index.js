const infoLogger = require('./src/infoLogger');
const warnLogger = require('./src/warnLogger');
const errorLogger = require('./src/errorLogger');
require('dotenv').config();

function logger(context, message) {
    const env = process.env.NODE_ENV;

    if (env === 'prod') {
        if (context !== 'error') return;
        errorLogger(message);
        return;
    }

    if (
        context !== 'info'
        && context !== 'warn'
        && context !== 'error'
    ) {
        throw new Error('Error context not accepted (valid values: info, warn, error)')
    }

    const errorTypes = {
        info: infoLogger,
        warn: warnLogger,
        error: errorLogger
    }

    errorTypes[context](message);
}

module.exports = logger;
