module.exports = function(config) {
  var browsers,
      exclude;

  browsers =['Chrome', 'Firefox'];

  exclude = function(path) {
    return {
      pattern: path,
      included: false
    };
  };

  config.set({
    basePath: '../../',
    browsers: browsers,
    files: [
      exclude('src/vendor/**/*.js'),
      exclude('src/js/**/*.js'),
      exclude('test/unit/**/*-spec.js'),
      'test/unit/test-main.js'
    ],
    exclude: ['src/js/app.js'],
    frameworks: [
      'jasmine',
      'requirejs'
    ],
    preprocessors: {
      'src/js/**/*.js': 'coverage'
    },
    reporters: [
      'coverage',
      'junit',
      'progress'
    ],
    coverageReporter: {
      dir: 'test/report/coverage',
      reporters: [
        {
          type: 'html'
        }, {
          type: 'text-summary'
        }
      ]
    },
    junitReporter: {
      outputFile: 'test/report/karma-unit.xml'
    },
    logLevel: config.LOG_INFO
  });
};