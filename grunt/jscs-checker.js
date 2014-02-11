module.exports = function (grunt) {
  grunt.config('jscs', {
    all: {
      files: {
        src: ['<%= jshint.all %>']
      },
      options: {
        junit: 'tests/report/jscs-output.xml'
      }
    }
  });
  grunt.loadNpmTasks('grunt-jscs-checker');
};