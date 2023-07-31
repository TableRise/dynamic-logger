const moment = require('moment');
const { cian, red, base, bold } = require('./colors');

function errorLogger(message) {
    const actualTime = moment().format('Do MMMM YYYY, h:mm:ss a');
    const prefix = 'Operation fail:'
    const label = 'ERROR';

    const lowerMessage = message.toLowerCase();

    const finalMessage = `${cian}[ ${actualTime} ] ${bold}${red}${label} ${base}=> ${prefix} ${lowerMessage}`;
    console.log(finalMessage);
}

module.exports = errorLogger;
