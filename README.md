# Wafer

Wafer.js is a super-simple, lightweight, cross-browser persistent storage solution. Wafer allows you to store simple key-value pairs, as well as complex JSON objects and arrays and even raw JSON strings. _As of 3.0.0, Wafer is now developed in CoffeeScript. Yay!_

Depending on your level of support for older browsers, you may need [JSON2](https://github.com/douglascrockford/JSON-js/blob/master/json2.js) for JSON parsing.

_Version: 3.0.0_


## Usage

### Simple key-value storage

Get and set simple persistent strings.

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

Remove values that are no longer needed.

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

Store an entire object in a single key.

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


### Real-world examples

#### Saving states for front-end actions

```javascript
// javascript:
// a button that hides after being clicked
// and stays hidden after a page refresh
var button_state = new Wafer('my-stateful-button-key'),
	$button = $('.my-button');
if(button_state.get() !== 'hidden') {
    $button.on('click', function () {
        button_state.set('hidden');
        $(this).hide();
    });
} else {
	$button.hide();
}
```

#### User data
```coffeescript
# coffeescript:
# save form input after a refresh
text_store = new Wafer "textarea-content"
$textarea = $ "textarea"

$textarea.val text_store.get() or ""
$textarea.on "keydown", (evt) ->
    evt.preventDefault()
    text_store.set $textarea.val()

$("form").on "submit", (evt) ->
    text_store.set ""

