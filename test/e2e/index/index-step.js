
describe('Index IndexPage', function () {
  var IndexPage = require('../IndexPage.js');
  beforeEach(function () {
    IndexPage.navigate();
  });

  it('should have link to login with linkedin', function () {
    expect(IndexPage.linkedinButton.getText()).toEqual('LinkedIn Connect');
  });
});