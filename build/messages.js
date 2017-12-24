var chalk = require('chalk');
var config = require('./config');

/* eslint-disable no-console */
const isStart = process.argv.slice(2) == "start" ? true : false;

isStart ?
    console.info(chalk.greenBright(`Starting web server on ${config.port}`)) :
    console.info(chalk.greenBright(`Stoping web server on ${config.port}`));
