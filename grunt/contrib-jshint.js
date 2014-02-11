module.exports = function (grunt) {
  grunt.config('jshint', {
    all: [
      'public/assets/js/*.js',
      'public/assets/js/**/*.js',
      'grunt/*.js',
      'tests/*.js',
      'tests/**/*-spec.js',
      'tests/**/*-step.js',
      'Gruntfile.js',
      'server.js'
    ],
    options: {
      jshintrc: '.jshintrc'
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
};