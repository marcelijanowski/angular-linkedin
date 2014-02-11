define(['config', 'angular'], function (cfg, A) {
  require(['angular-resource', 'angular-route'], function () {
    A.module(cfg.ngApp, ['ngResource', 'ngRoute']);
    require(['controller/app-controller'], function () {
      A.bootstrap(document.documentElement, [cfg.ngApp]);
    });
  });
});