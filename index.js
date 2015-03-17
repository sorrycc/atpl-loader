'use strict';

var atpl = require('anima-template');

module.exports = function(source) {
  this.cacheable();
  return atpl(source);
};
