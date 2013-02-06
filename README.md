# Wafer
Wafer.js is the world's thinnest cross-browser persistent storage solution. Wafer allows you to store simple key-value pairs, as well as complex JSON objects and arrays and even raw JSON strings.

Depending on your level of support for older browser, you may need [JSON2](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) for JSON parsing.

_Version: 2.0_

## Usage
Starting with Version 2, the preferred method for using Wafer is by using the Wafer class. For the Version 1 reference, see [V1.md][V1.md]

### Simple key-value storage
```javascript
Wafer('mykey').set('my value');
```

### Removing values
```javascript
var store = new Wafer('mykey');
store.set('my value');
store.get(); // returns 'my value'
store.remove();
store.get(); // returns undefined
```

### Storing JSON objects
```javascript
// JSON-style object
var store = new Wafer('myobj');
store.set({ my_value: 'my test object value'});
store.get().my_value; // returns 'my test object value'

// JSON string
store.set('{ "my_value": "my test object value"}');
store.get().my_value; // returns 'my test object value'
```

##Building Wafer
If you would like to extend or modify Wafer or sumbit pull requests or bugfixes or if you're otherwise awesome, you may find that you wish to rebuild Wafer on your own.

```bash
npm install grunt -g
grunt
```

To run individual tasks:

```bash
# lint
grunt lint

# tests
grunt qunit

# minify
grunt min
```
