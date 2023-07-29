#!/usr/bin/env node

module.exports = core;

const utils = require("@mh-cli/utils")
console.log(utils())
function core() {
  return 'Hello from core';
}
