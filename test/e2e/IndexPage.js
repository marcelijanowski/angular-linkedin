var IndexPage = function () {
	this.navigate = function () {
		browser.get('/');
	};
	this.linkedinButton = element(by.css('button.linkedin'));
	this.headerInformation = element(by.tagName('h1'));
};

module.exports = new IndexPage();