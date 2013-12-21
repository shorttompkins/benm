var NUE = require('../src/app.js');

describe('app', function() {
    var app = new NUE();

    it('should have a start function', function() {
        expect(app.start).toBeDefined();
    });
});
