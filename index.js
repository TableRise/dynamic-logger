const successLogger = require('./src/sucessLogger');
const warnLogger = require('./src/warnLogger');
const errorLogger = require('./src/errorLogger');

function logger(context, message) {
    if (
        context !== 'success'
        && context !== 'warn'
        && context !== 'error'
    ) {
        throw new Error('Error context not accepted (valid values: success, warn, error)')
    }

    const errorTypes = {
        success: successLogger,
        warn: warnLogger,
        error: errorLogger
    }

    errorTypes[context](message);
}

module.exports = logger;
