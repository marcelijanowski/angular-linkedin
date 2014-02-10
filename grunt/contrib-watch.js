module.exports = function (grunt) {
  grunt.config('watch', {
    jsHintAndCS: {
      files: [
        '<%= jshint.all %>'
      ],
      tasks: [
        'jshint',
        'jscs'
      ],
      options: {
        livereload: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};