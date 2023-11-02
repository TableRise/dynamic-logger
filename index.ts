import 'dotenv/config'
import infoLogger from './src/infoLogger'
import warnLogger from './src/warnLogger';
import errorLogger from './src/errorLogger';
import { ErrorTypes } from './src/types/errorTypes';
import { ContextValue } from './src/types/contextTypes';
import testLogger from './src/testLogger';

const logger = (context: ContextValue, message: string, bypassProd: boolean = false): void => {
    const env = process.env.NODE_ENV;

    const errorTypes: ErrorTypes = {
        info: infoLogger,
        warn: warnLogger,
        error: errorLogger,
        test: testLogger
    }

    if (env === 'prod') {
        if (bypassProd) errorTypes[context](message);
        if (context !== 'error') return;
        errorTypes.error(message);
        return;
    }

    if (
        context !== 'info'
        && context !== 'warn'
        && context !== 'error'
        && context !== 'test'
    ) {
        throw new Error('Error context not accepted (valid values: info, warn, error)')
    }

    errorTypes[context](message);
}

export default logger;
