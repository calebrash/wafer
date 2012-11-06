module.exports = function(grunt) {

    grunt.initConfig({
        lint: {
            all: ['wafer.js']
        },
        min: {
            dist: {
                src: ['wafer.js'],
                dest: 'wafer.min.js'
            }
        }
    });

    grunt.registerTask('default', 'lint min');

};

