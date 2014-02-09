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
      exclude('assets/vendor/**/*.js'),
      exclude('assets/js/**/*.js'),
      exclude('tests/unit/**/*-spec.js'),
      'tests/unit/test-main.js'
    ],
    exclude: ['assets/js/app.js'],
    frameworks: [
      'jasmine',
      'requirejs'
    ],
    preprocessors: {
      'assets/js/**/*.js': 'coverage'
    },
    reporters: [
      'coverage',
      'junit',
      'progress'
    ],
    coverageReporter: {
      dir: 'tests/report/coverage',
      reporters: [
        {
          type: 'html'
        }, {
          type: 'text-summary'
        }
      ]
    },
    junitReporter: {
      outputFile: 'tests/report/karma-unit.xml'
    },
    logLevel: config.LOG_INFO
  });
};