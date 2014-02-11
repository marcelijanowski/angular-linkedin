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
    },
    jade: {
      files: [
        'src/*.jade',
        'src/assets/partial/**/*.jade'
      ],
      tasks: ['jade'],
      options: {
        livereload: true
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
};