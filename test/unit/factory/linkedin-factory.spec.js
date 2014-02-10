define([
  'config',
  'angular',
  'factory/linkedin-factory'
], function(cfg, A) {
  describe('Linkedin factory', function() {
    var factory;

    beforeEach(module(cfg.ngApp));
    beforeEach(inject(function($injector) {
      factory = $injector.get('linkedinFactory');
    }));

    it('', function() {
    });
  });
});
