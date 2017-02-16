# hof-logger
A Common logger pattern to be used across HOF projects.

Although this modules doesn't appear to do very much the intention is to ensure we have a common logging approach across Home Office Forms.

## Installation

```bash
$ npm install hof-logger --save
```

## Usage
hof-logger exports a function which you can call to access a winston logger instance.

```js
var logger = require('hof-logger')();

logger.info('A message');
```

## Options
Options can be passed to override defaults:

```js
var createLogger = require('hof-logger');
var logger = createLogger({
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
    json: true,
    timestamp: true,
    colorize: true,
    stringify: JSON.stringify
  }
});
```
