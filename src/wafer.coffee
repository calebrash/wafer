# Wafer 3.0
# Copyright (c) 2013 Caleb Rash
# Licensed under the MIT License


do (window) ->

  # localStorage polyfill:
  # maps localStorage methods to cookies  
  if not window.localStorage
    cookieStorage =
      setItem: (key, value, remove=false) ->
        if remove then delta = -1 else delta = 30
        expires = new Date()
        expires.setDate expires.getDate() + delta
        document.cookie = "#{key}=#{escape value}; expires=#{expires.toUTCString()}"
      getItem: (key) ->
        if document.cookie.indexOf "#{key}=" isnt -1
          unescape document.cookie.split("#{key}=")[1].split(";")[0].replace("=", "")
        else
          false
      removeItem: (key) ->
        @setItem key, "", true



  # set storage method
  storageEngine = localStorage or cookieStorage


    
  # v2 Wafer class
  class Wafer
    constructor: (@key) ->
      if @ instanceof Wafer
        return @
      else
        return new Wafer @key
    key: null
    get: () ->
        data = storageEngine.getItem @key
        try
          return JSON.parse data
        catch e
          return data
    set: (value) ->
        try
          JSON.parse value
        catch e
          value = JSON.stringify value
        storageEngine.setItem @key, value
        return @
    remove: () ->
        storageEngine.removeItem @key
        return @


  # export
  window.Wafer = Wafer
