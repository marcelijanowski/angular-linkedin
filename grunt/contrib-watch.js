module.exports = function (grunt) {
  grunt.config('watch', {
    compass: {
      files: [
        '<%= compass.dev.options.sassDir %>/**/*.scss',
        '<%= compass.dev.options.imagesDir %>/**/*.png'
      ],
      tasks: [
        'compass:dev',
        'scsslint'
      ],
      options: {
        livereload: true
      }
    },
    html: {
      files: [
        'public/assets/partial/*.html',
        'public/assets/partial/**/*.html',
        '*.html'
      ],
      options: {
        livereload: true
      }
    },
    jade: {
      files: [
        'public/*.jade',
        'public/assets/partial/**/*.jade'
      ],
      tasks: ['jade'],
      options: {
        livereload: true
      }
    },
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