import infoLogger from './src/infoLogger'
import warnLogger from './src/warnLogger';
import errorLogger from './src/errorLogger';
import * as dotenv from 'dotenv'
import { ErrorTypes } from './src/types/errorTypes';
dotenv.config()

const logger = (context: string, message: string): void => {
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

    const errorTypes: ErrorTypes = {
        info: infoLogger,
        warn: warnLogger,
        error: errorLogger
    }

    errorTypes[context](message);
}

export default logger;