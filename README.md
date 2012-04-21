#Wafer

Wafer.js is the world's thinnest cross-browser persistent storage solution. Wafer allows you to store simple key-value pairs, as well as complex JSON objects and arrays and even raw JSON strings.

Note: Wafer relies on Douglas Crockford's JSON2 script to help with browsers that do not support native JSON parse and stringify functions
https://github.com/douglascrockford/JSON-js/blob/master/json2.js

##Usage

Wafer works much in the same way as localStorage. However, Wafer improves upon native localStorage by adding JSON support, either in object form or raw JSON string.

###Simple key-value storage

```javascript
wafer.set('key', 'value');
var key = wafer.get('key'); // returns 'value'

wafer.set('test', 'Some value');
var test_value = wafer.get('test'); // returns 'Some value'
```

###Removing values
```javascript
wafer.set('key', 'value');
var key = wafer.get('key', 'value'); // returns 'value'
wafer.remove('key');
var key = wafer.get('key', 'value'); // returns undefined
```
###Storing JSON objects
```javascript
// JSON-style object
wafer.set('myobj', {test: 'hello'});
var mytest = wafer.set('myobj').test; // return 'hello'

// JSON string
wafer.set('myobj', '{"test":"hello"}');
var mytest = wafer.set('myobj').test; // return 'hello'
```
