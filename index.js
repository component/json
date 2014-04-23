
var json = window.JSON || {};
var stringify = json.stringify;
var parse = json.parse;

module.exports = parse && stringify
  ? JSON
  : require('json-fallback');
