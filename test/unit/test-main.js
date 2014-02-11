var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/(mock|spec)\.js$/).test(file);
});

requirejs.config({
  baseUrl: '/base/public/assets/js/',
  paths: {
    angular: '../vendor/angular/angular',
    'angular-mocks': '../vendor/angular-mocks/angular-mocks',
    lodash: '../vendor/lodash/dist/lodash',
    mock: '../../test/unit/mock'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    lodash: {
      exports: '_'
    }
  }
});

require(['config', 'angular'], function (cfg, A) {
  require(['angular-mocks'], function () {
    A.module(cfg.ngApp, []);
    A.bootstrap(document, [cfg.ngApp]);
    require(tests, function () {
      window.__karma__.start(); 
    });
  });
});