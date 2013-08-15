# Wafer

Wafer.js is a super-simple, lightweight, cross-browser persistent storage solution. Wafer allows you to store simple key-value pairs, as well as complex JSON objects and arrays and even raw JSON strings.

Depending on your level of support for older browsers, you may need [JSON2](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) for JSON parsing.

_Version: 3.0.0_


## Usage

### Simple key-value storage

```javascript
// javascript
Wafer("mykey").set("my value");
Wafer("mykey").get(); // "my value"
```
```coffeescript
# coffeescript
Wafer("mykey").set "my value"
Wafer("mykey").get() # my value
```


### Removing values

```javascript
// javascript
var store = new Wafer("mykey");
store.set("my value");
store.get(); // returns "my value"
store.remove();
store.get(); // returns undefined
```
```coffeescript
# coffeescript
store = new Wafer "mykey"
store.set "my value"
store.get() # returns "my value"
store.remove()
store.get() # returns undefined
```


### Storing JSON objects

```javascript
// javascript
var store = new Wafer("myobj");
store.set({ my_value: "my test object value"});
store.get().my_value; // "my test object value"

store.set('{ "my_value": "my test object value"}');
store.get().my_value; // "my test object value"
```
```coffeescript
# coffeescript
store = new Wafer "myobj"
store.set { my_value: "my test object value" }
store.get().my_value # my test object value

store.set '{ "my_value": "my test object value"}'
store.get().my_value # my test object value
```

