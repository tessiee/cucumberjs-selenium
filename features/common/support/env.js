'use strict';

const { setDefaultTimeout } = require('@cucumber/cucumber');
const timeout = 1000 * 10;

setDefaultTimeout(timeoutFunction, timeout);

function timeoutFunction() {
  console.log('time-out');
}