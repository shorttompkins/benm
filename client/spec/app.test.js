var App = require('../src/app.js');

describe('App', function() {
    var app = new App();
    it('should have a start function', function() {
        expect(app.start).toBeDefined();
    });
});
