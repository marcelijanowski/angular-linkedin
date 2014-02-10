module.exports = function (grunt) {
  require('time-grunt')(grunt);
  grunt.loadTasks('grunt');

  grunt.registerTask('default', 'run the server and watch for changes', [
    'jshint',
    'jade:dev',
    'express',
    'watch'
  ]);

  grunt.registerTask('e2e', 'run the server and watch for changes', [
    'jshint',
    'jscs',
    'exec:e2e'
  ]);

  grunt.registerTask('unit', 'run unit tests', [
    'jshint',
    'jscs',
    'karma:unit'
  ]);
};