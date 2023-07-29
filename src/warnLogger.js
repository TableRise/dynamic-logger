const moment = require('moment');
const { cian, yellow, base } = require('./colors');

function warnLogger(message) {
    const actualTime = moment().format('Do MMMM YYYY, h:mm:ss a');
    const prefix = 'Operation done with a warn:'
    const label = 'WARN';

    const lowerMessage = message.toLowerCase();

    const finalMessage = `${cian}[ ${actualTime} ] ${bold}${yellow}${label} ${base}=> ${prefix} ${lowerMessage}`;
    console.log(finalMessage);
}

module.exports = warnLogger;
