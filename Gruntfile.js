module.exports = function (grunt) {
    grunt.initConfig({
        pkg: '<json:package.json>',
        concat: {
            dist: {
                src: ['source/*.js', 'source/geometric/*.js'],
                dest: 'bin/calculate.js'
            }
        },
        uglify: {
            dist: {
                src: 'bin/calculate.js',
                dest: 'bin/calculate.min.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['concat', 'uglify']);
};