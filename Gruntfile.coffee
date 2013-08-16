module.exports = (grunt) ->

  config =

    pkg: "<json:package.json>"

    coffee:
      default:
        options:
          bare: true
        files:
          "dist/wafer.js": "src/wafer.coffee"
          "test/test.js": "test/test.coffee"

    uglify:
      default:
        files:
          "dist/wafer.min.js": "dist/wafer.js"
    
    qunit:
      default: "test/*.html"
    
    watch:
      default:
        files: ["src/wafer.coffee", "test/test.coffee"]
        tasks: ["coffee"],
      all:
        files: "src/wafer.coffee"
        tasks: ["coffee", "qunit", "uglify"]


  grunt.initConfig config

  grunt.loadNpmTasks "grunt-contrib-coffee"
  grunt.loadNpmTasks "grunt-contrib-qunit"
  grunt.loadNpmTasks "grunt-contrib-uglify"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.registerTask "default", ["coffee", "qunit", "uglify"]
