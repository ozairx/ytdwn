const ora = require('ora');
const chalk = require('chalk');

const logger = {
  info: (message) => {
    console.log(chalk.blue(message));
  },
  success: (message) => {
    console.log(chalk.green(message));
  },
  error: (message) => {
    console.error(chalk.red(message));
  },
  warn: (message) => {
    console.warn(chalk.yellow(message));
  },
  spinner: (message) => {
    return ora(message).start();
  },
};

module.exports = logger;
