module.exports = function (grunt) {
  grunt.config('jshint', {
    all: [
      'assets/js/*.js',
      'assets/js/**/*.js',
      'grunt/*.js',
      'test/*.js',
      'test/**/*-spec.js',
      'test/**/*-step.js',
      'Gruntfile.js',
      'server.js'
    ],
    options: {
      jshintrc: '.jshintrc'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};