(function(window) {
  var Wafer, cookieStorage, storageEngine, wafer;
  if (typeof localStorage === "undefined") {
    cookieStorage = {
      setItem: function(key, value, remove) {
        var delta, expires, _ref;
        delta = (_ref = remove === true) != null ? _ref : -{
          1: 30
        };
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
  wafer = {
    get: function(key) {
      var data, e;
      data = storageEngine.getItem(key);
      try {
        return JSON.parse(data);
      } catch (_error) {
        e = _error;
        return data;
      }
    },
    set: function(key, value) {
      var e;
      try {
        JSON.parse(value);
      } catch (_error) {
        e = _error;
        value = JSON.stringify(value);
      }
      return storageEngine.setItem(key, value);
    },
    remove: function(key) {
      return storageEngine.removeItem(key);
    }
  };
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
      return wafer.get(this.key);
    };

    Wafer.prototype.set = function(value) {
      wafer.set(this.key, value);
      return this;
    };

    Wafer.prototype.remove = function() {
      wafer.remove(this.key);
      return this;
    };

    return Wafer;

  })();
  window.wafer = wafer;
  return window.Wafer = Wafer;
})(window);
