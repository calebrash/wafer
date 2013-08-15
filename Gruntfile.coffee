module.exports = (grunt) ->

  config =

    pkg: "<json:package.json>"

    coffee:
      default:
        options:
          bare: true
        files:
          "wafer.js": "wafer.coffee"
          "test/test.js": "test/test.coffee"

    uglify:
      default:
        files:
          "wafer.min.js": "wafer.js"
    
    qunit:
      default: "test/*.html"
    
    watch:
      default:
        files: ["wafer.coffee", "test/test.coffee"]
        tasks: ["coffee"],
      all:
        files: "wafer.coffee"
        tasks: ["coffee", "qunit", "uglify"]


  grunt.initConfig config

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-qunit"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.registerTask "default", ["coffee", "qunit", "uglify"]
