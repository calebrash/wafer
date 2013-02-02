// wafer.js 1.0
// Copyright (c) 2012 Caleb Rash
// Licensed under the MIT License

// this script relies on json2.js for browsers in which native JSON support is lacking
// https://github.com/douglascrockford/JSON-js/blob/master/json2.js

/*global window: false, document: false, localStorage: false, escape: false, unescape: false */

(function (win) {
    
    "use strict";

    var _ls = null;

    if(typeof localStorage == 'undefined') {
        _ls = {
            setItem: function(key, value, _e) {
                var l = _e === true ? -1 : 30,
                    n = new Date();
                n.setDate(n.getDate() + l);
                document.cookie = key + "=" + escape(value) + '; expires=' + n.toUTCString();
            },
            getItem: function(key) {
                if(document.cookie.indexOf(key + '=') !== -1) {
                    return unescape(document.cookie.split(key + '=')[1].split(';')[0].replace('=', ''));
                } else {
                    return false;
                }
            },
            removeItem: function(key) {
                this.setItem(key, '', true);
            }
        };
    }

    var _w = {
        _s: localStorage || _ls,
        get: function(key) {
            var d = this._s.getItem(key);
            try {
                return JSON.parse(d);
            } catch(e) {
                return d;
            }
        },
        set: function(key, value) {
            try {
                JSON.parse(value);
            } catch(e) {
                value = JSON.stringify(value);
            }
            return this._s.setItem(key, value);
        },
        remove: function(key) {
            return this._s.removeItem(key);
        }
    };

    var W = function (key) {
        this.key = key;
        if(this instanceof W) {
            return this;
        } else {
            return new W();
        }
    };
    W.prototype = {
        get: function () {
            return _w.get(this.key);
        },
        set: function () {
            _w.set(this.key);
            return this;
        },
        remove: function () {
            _w.remove(this.key);
            return this;
        }
    };

    win.wafer =  _w;
    win.Wafer = W;

})(window);
