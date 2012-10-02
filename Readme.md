
# json

  JSON parser / stringifier.

## Installation

    $ component install component/json

## Example

```js
var json = require('json');
json.parse('{"foo":"bar"}');
// => { foo: 'bar' }
```

## Polyfill

  If you're working with browsers that do not provide a native `JSON`,
  then you should install [json-polyfill](https://github.com/component/json-polyfill)
  and this module will export that instead.

# License

  MIT


