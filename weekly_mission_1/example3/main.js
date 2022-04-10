/*
  node main.js
*/

const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

logger1('This is an informational message from logger 1')
logger2.verbose('This is a verbose message from logger 2')