define([
  'config',
  'angular',
  'controller/home-controller'
], function (cfg, A) {
  describe('Home controller', function () {
    var $scope,
        createController;

    beforeEach(module(cfg.ngApp));
    beforeEach(inject(function ($injector) {
      var $controller = $injector.get('$controller'),
          $rootScope = $injector.get('$rootScope');

      $scope = $rootScope.$new();
      createController = function () {
        $controller('homeController', {
          $scope: $scope
        });
      };
    }));

    it('should  set user profile', function () {
      var controller = createController();
      expect($scope.profile).toBeDefined();
    });
  });
});
