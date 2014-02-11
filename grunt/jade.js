module.exports = function (grunt) {
  grunt.config('jade', {
    dev: {
      options: {
        compileDebug: true,
        basePath: './public/',
        extension: '.html',
        client: false,
        pretty: true
      },
      files: {
        './public': ['<%= watch.jade.files %>']
      }
    }
  });
  grunt.loadNpmTasks('grunt-jade');
};
