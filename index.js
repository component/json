
try {
  module.exports = require('component-json-polyfill');
} catch (err) {
  module.exports = JSON;
}
