
describe('json', function(){
  var assert = require('assert');
  var real = window.JSON;

  beforeEach(function(){
    window.JSON = null;
  })

  afterEach(function(){
    require.modules['json/index.js'].exports = null;
    window.JSON = real;
  })

  it('should expose json-fallback if window.JSON doesnt exist', function(){
    assert(null == window.JSON);
    assert(real != require('json'));
    assert(require('json').stringify);
    assert(require('json').parse);
  })

  it('should not expose window.JSON if it doesnt have .parse() and .stringify()', function(){
    assert(null == window.JSON);
    window.JSON = { encode: Function, decode: Function }; // mootools
    assert(window.JSON != require('json'));
    assert(require('json').stringify);
    assert(require('json').parse);
  })

  it('should expose the real window.JSON if it has .parse() and .stringify()', function(){
    assert(null == window.JSON);
    window.JSON = real;
    assert(real == require('json'));
    assert(require('json').stringify);
    assert(require('json').parse);
  })
})
