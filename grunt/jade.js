module.exports = function (grunt) {
  grunt.config('jade', {
    dev: {
      options: {
        compileDebug: true,
        basePath: './src/',
        extension: '.html',
        client: false,
        pretty: true
      },
      files: {
        './src': ['<%= watch.jade.files %>']
      }
    }
  });
  grunt.loadNpmTasks('grunt-jade');
};
