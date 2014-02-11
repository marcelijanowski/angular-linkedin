define([
  'config',
  'angular',
  'directive/linkedin-directive'
], function (cfg, A) {
  describe('Linkedin directive', function () {
    var el = A.element(''),
        $httpBackend,
        $scope,
        createDirective,
        data;

    beforeEach(module(cfg.ngApp));
    beforeEach(inject(function ($injector) {
      var $compile = $injector.get('$compile'),
          $compiled = $compile(el),
          $rootScope = $injector.get('$rootScope');

      $httpBackend = $injector.get('$httpBackend');
      $scope = $rootScope.$new();

      createDirective = function () {
        $compiled($scope);
      };
    }));

    afterEach(function () {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should load button to linkeind', function () {
      var directive;

      $httpBackend.expectGET(cfg.path.partial + 'directive/linkedin-partial.html')
        .respond(201, '');

      directive = createDirective();
      $httpBackend.flush();

      $scope.menuItems = data;
      $scope.$digest();

      expect(el.find('li').length).toBe(data.length);
    });
  });
});
