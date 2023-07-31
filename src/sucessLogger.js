const moment = require('moment');
const { cian, green, base, gray } = require('./colors');

function successLogger(message) {
    const actualTime = moment().format('Do MMMM YYYY, h:mm:ss a');
    const prefix = 'Operation done with success:'
    const label = 'SUCCESS';

    const lowerMessage = message.toLowerCase();

    const finalMessage = `${cian}[ ${actualTime} ] ${green}${label} ${base}=> ${gray}${prefix} ${base}${lowerMessage}\n`;
    console.log(finalMessage);
}

module.exports = successLogger;
