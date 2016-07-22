'use strict';

const prod = process.env !== 'ci' && process.env !== 'development'

module.exports = {
  prod,
  levels: {
    info: 0,
    email: 1,
    warn: 2,
    error: 3
  },
  colours: {
    info: 'green',
    email: 'magenta',
    warn: 'yellow',
    error: 'red'
  },
  transportOptions: {
    json: prod,
    timestamp: true,
    colorize: true,
    stringify: JSON.stringify
  }
};
