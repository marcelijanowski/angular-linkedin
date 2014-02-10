define([
  'config',
  'angular'
], function (cfg, A) {
  LinkedinFactory.$inject = ['$q'];

  function LinkedinFactory ($q) {
    var factory = {
    };

    return factory;
  }

  var app = A.module(cfg.ngApp);
  app.factory('linkedinFactory', LinkedinFactory);
});