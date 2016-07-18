'use strict';

const logger = require('../..');
const winston = require('winston');

describe('hof-logger', () => {
  it('exports a function', () => {
    logger.should.be.a('function')
  });

  it('returns an instance of winston.Logger when called', () => {
    logger().should.be.an.instanceOf(winston.Logger);
  });
});
