require.config({
  baseUrl: '/assets/js/',
  urlArgs: 'x=' +  (new Date()).getTime(),
  paths: {
    angular: '../vendor/angular/angular',
    'angular-resource': '../vendor/angular-resource/angular-resource',
    'angular-route': '../vendor/angular-route/angular-route',
    lodash: '../vendor/lodash/dist/lodash'
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
require(['startup']);