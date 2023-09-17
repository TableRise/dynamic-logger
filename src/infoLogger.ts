import * as moment from "moment";
import colors from "./colors";

const infoLogger = (message: string): void => {
    const { cian, green, base, gray } = colors;
    const actualTime = moment().format('Do MMMM YYYY, h:mm:ss a');
    const prefix = 'Operation done with info:'
    const label = 'INFO';

    const finalMessage = `${cian}[ ${actualTime} ] ${green}${label} ${base}=> ${gray}${prefix} ${base}${message}\n`;
    console.log(finalMessage);
}

export default infoLogger;
