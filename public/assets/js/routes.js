define([
  'config',
  'angular'
],function (cfg, A) {
  var app,
      routes;

  routes = function ($routeProvider, $locationProvider) {
    $routeProvider.when('/error/:code', {
      templateUrl: cfg.path.partial + 'error-partial.html'
    })
    .when('/', {
      templateUrl: cfg.path.partial + 'home-partial.html',
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  };

  routes.$inject = ['$routeProvider', '$locationProvider'];
  app = A.module(cfg.ngApp);
  app.config(routes);
});