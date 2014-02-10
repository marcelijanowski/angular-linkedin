module.exports = function (grunt) {
  grunt.config('express', {
    dev: {
      options: {
        script: './server.js',
        port: 8000
      }
    }
  });
  grunt.loadNpmTasks('grunt-express-server');
};