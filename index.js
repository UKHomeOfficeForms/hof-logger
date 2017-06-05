'use strict';

const winston = require('winston');

module.exports = config => {

  config = config || {};
  config.loglevel = config.loglevel || 'info';

  const loggingTransports = [];
  const exceptionTransports = [];
  // eslint-disable-next-line no-process-env
  const notProd = process.env.NODE_ENV !== 'production';

  loggingTransports.push(
    new winston.transports.Console({
      silent: config.loglevel === 'silent',
      level: config.loglevel,
      json: !notProd,
      timestamp: true,
      colorize: true,
      stringify: function stringify(obj) {
        return JSON.stringify(obj);
      }
    })
  );

  exceptionTransports.push(
    new winston.transports.Console({
      json: !notProd,
      timestamp: true,
      colorize: true,
      stringify: function stringify(obj) {
        return JSON.stringify(obj);
      }
    })
  );

  const transports = {
    transports: loggingTransports,
    exceptionHandlers: exceptionTransports,
    exitOnError: true
  };

  return new winston.Logger(transports);
};
