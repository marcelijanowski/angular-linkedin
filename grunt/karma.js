module.exports = function (grunt) {
  grunt.config('karma', {
    unit: {
      configFile: 'test/unit/karma.conf.js',
      singleRun: true
    }
  });
  grunt.loadNpmTasks('grunt-karma');
};