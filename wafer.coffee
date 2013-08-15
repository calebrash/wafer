# Wafer 3.0
# Copyright (c) 2013 Caleb Rash
# Licensed under the MIT License


do (window) ->

    # localStorage polyfill:
    # maps localStorage methods to cookies
  
    if typeof localStorage is "undefined"
        cookieStorage =
            setItem: (key, value, remove) ->
                delta = remove is true ? -1 : 30
                expires = new Date()
                expires.setDate expires.getDate() + delta
                document.cookie = "#{key}=#{escape value}; expires=#{expires.toUTCString()}"
            getItem: (key) ->
                if document.cookie.indexOf "#{key}=" isnt -1
                    return unescape document.cookie.split("#{key}=")[1].split(";")[0].replace("=", "")
                else
                    return false
            removeItem: (key) ->
                @setItem key, "", true



    # set storage method
    storageEngine = localStorage or cookieStorage



    # v1 wafer object
    wafer =
        get: (key) ->
            data = storageEngine.getItem key
            try
                return JSON.parse data
            catch e
                return data
        set: (key, value) ->
            try
                JSON.parse value
            catch e
                value = JSON.stringify value
            return storageEngine.setItem key, value
        remove: (key) ->
            return storageEngine.removeItem key

    
    # v2 Wafer class
    class Wafer
        constructor: (@key) ->
            if @ instanceof Wafer
                return @
            else
                return new Wafer @key
        key: null
        get: () ->
            return wafer.get(@key)
        set: (value) ->
            wafer.set(@key, value)
            return @
        remove: () ->
            wafer.remove(@key)
            return @

    window.wafer = wafer
    window.Wafer = Wafer
