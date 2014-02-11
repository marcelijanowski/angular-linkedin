define([
  'config',
  'angular',
  'controller/app-controller'
], function (cfg, A) {
  describe('App controller', function () {
    var $scope,
        createController;

    beforeEach(module(cfg.ngApp));
    beforeEach(inject(function ($injector) {
      var $controller = $injector.get('$controller'),
          $rootScope = $injector.get('$rootScope');

      $scope = $rootScope.$new();
      createController = function () {
        $controller('appController', {
          $scope: $scope
        });
      };
    }));

    it('should add the header and footer partials', function () {
      var controller = createController();
      expect($scope.headerPartial).toBeDefined();
      expect($scope.footerPartial).toBeDefined();
    });
  });
});
