// wafer.js 1.0
// Copyright (c) 2012 Caleb Rash
// Licensed under the MIT License

// this script relies on json2.js for browsers in which native JSON support is lacking
// https://github.com/douglascrockford/JSON-js/blob/master/json2.js

if(typeof localStorage=='undefined'){window._localstorage={setItem:function(key,value,_e){var l=_e===true?-1:30,n=new Date();n.setDate(n.getDate()+l);document.cookie=key+"="+escape(value)+'; expires='+n.toUTCString()},getItem:function(key){if(document.cookie.indexOf(key+'=')!==-1){return unescape(document.cookie.split(key+'=')[1].split(';')[0].replace('=',''))}else{return false}},removeItem:function(key){this.setItem(key,'',true)}}}window.wafer={_s:localStorage||_localstorage,get:function(key){var d=this._s.getItem(key);try{return JSON.parse(d)}catch(e){return d}},set:function(key,value){try{JSON.parse(value)}catch(e){value=JSON.stringify(value)}return this._s.setItem(key,value)},remove:function(key){return this._s.removeItem(key)}};
