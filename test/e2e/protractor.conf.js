var config,
    onPrepare;

onPrepare = function () {
  var dir = './tests/report/protractor/',
      wrench = require('wrench');

  require('jasmine-reporters');

  global.select = global.by;

  wrench.mkdirSyncRecursive(dir);
  jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(dir, true, true));
};

config = {
  framework: 'jasmine',
  onPrepare: onPrepare,
  specs: ['./*/*-step.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000,
    showColors: true
  },
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8000'
};

exports.config = config;