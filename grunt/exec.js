module.exports = function (grunt) {
  grunt.config('exec', {
    e2e: {
      cmd: 'protractor tests/e2e/protractor.conf.js'
    }
  });
  grunt.loadNpmTasks('grunt-exec');
};