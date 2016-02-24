'use strict';

var atpl = require('primer-template');

module.exports = function (source) {
  this.cacheable();

  return atpl(source, this.resourcePath);
};
