import * as moment from "moment";
import colors from "./colors";

const testLogger = (message: string): void => {
    const { cian, base, gray, purple } = colors;
    const actualTime = moment().format('Do MMMM YYYY, h:mm:ss a');
    const prefix = 'Operation done in test environment:'
    const label = 'TEST';

    const finalMessage = `${cian}[ ${actualTime} ] ${purple}[${label}] ${base}=> ${gray}${prefix} ${base}${message}\n`;
    console.log(finalMessage);
}

export default testLogger;
