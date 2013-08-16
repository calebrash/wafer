(function(window) {
  var Wafer, cookieStorage, storageEngine;
  if (!window.localStorage) {
    cookieStorage = {
      setItem: function(key, value, remove) {
        var delta, expires;
        if (remove == null) {
          remove = false;
        }
        if (remove) {
          delta = -1;
        } else {
          delta = 30;
        }
        expires = new Date();
        expires.setDate(expires.getDate() + delta);
        return document.cookie = "" + key + "=" + (escape(value)) + "; expires=" + (expires.toUTCString());
      },
      getItem: function(key) {
        if (document.cookie.indexOf(("" + key + "=") !== -1)) {
          return unescape(document.cookie.split("" + key + "=")[1].split(";")[0].replace("=", ""));
        } else {
          return false;
        }
      },
      removeItem: function(key) {
        return this.setItem(key, "", true);
      }
    };
  }
  storageEngine = localStorage || cookieStorage;
  Wafer = (function() {
    function Wafer(key) {
      this.key = key;
      if (this instanceof Wafer) {
        return this;
      } else {
        return new Wafer(this.key);
      }
    }

    Wafer.prototype.key = null;

    Wafer.prototype.get = function() {
      var data, e;
      data = storageEngine.getItem(this.key);
      try {
        return JSON.parse(data);
      } catch (_error) {
        e = _error;
        return data;
      }
    };

    Wafer.prototype.set = function(value) {
      var e;
      try {
        JSON.parse(value);
      } catch (_error) {
        e = _error;
        value = JSON.stringify(value);
      }
      storageEngine.setItem(this.key, value);
      return this;
    };

    Wafer.prototype.remove = function() {
      storageEngine.removeItem(this.key);
      return this;
    };

    return Wafer;

  })();
  return window.Wafer = Wafer;
})(window);
