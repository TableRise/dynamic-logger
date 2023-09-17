import * as moment from "moment";
import colors from "./colors";

const warnLogger = (message: string): void => {
	const { cian, yellow, base, gray} = colors;
	const actualTime = moment().format("Do MMMM YYYY, h:mm:ss a");
	const prefix = "Operation done with a warn:";
	const label = "WARN";

	const finalMessage = `${cian}[ ${actualTime} ] ${yellow}${label} ${base}=> ${gray}${prefix} ${base}${message}\n`;
	console.log(finalMessage);
}

export default warnLogger;
