'use strict';

const winston = require('winston');
const baseConfig = require('./config');

module.exports = config => {
  config = Object.assign({}, baseConfig, config || {});

  const options = {
    levels: config.levels,
    transports: [
      new winston.transports.Console(config.transportOptions)
    ],
    exitOnError: true
  };

  if (config.prod) {
     Object.assign(options, {
      exceptionHandlers: [
        new winston.transports.Console(config.transportOptions)
      ]
    });
  }

  const logger = new winston.Logger(options);

  winston.addColors(config.colours);

  return logger;
}
