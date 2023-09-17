import * as moment from 'moment'
import colors from './colors';

const errorLogger = (message: string): void => {
    const { cian, red, base, gray } = colors;
    const actualTime = moment().format('Do MMMM YYYY, h:mm:ss a');
    const prefix = 'Operation fail:'
    const label = 'ERROR';

    const finalMessage = `${cian}[ ${actualTime} ] ${red}${label} ${base}=> ${gray}${prefix} ${base}${message}\n`;
    console.log(finalMessage);
}

export default errorLogger;
