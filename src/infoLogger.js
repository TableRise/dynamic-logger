const moment = require('moment');
const { cian, green, base, gray } = require('./colors');

function infoLogger(message) {
    const actualTime = moment().format('Do MMMM YYYY, h:mm:ss a');
    const prefix = 'Operation done with info:'
    const label = 'INFO';

    const lowerMessage = message.toLowerCase();

    const finalMessage = `${cian}[ ${actualTime} ] ${green}${label} ${base}=> ${gray}${prefix} ${base}${lowerMessage}\n`;
    console.log(finalMessage);
}

module.exports = infoLogger;
