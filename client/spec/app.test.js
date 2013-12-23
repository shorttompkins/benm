var App = require('../src/app.js'),
    Marionette = require('backbone.marionette');

describe('App', function() {
    var app = new App();
    it('should have a start function', function() {
        expect(app.start).toBeDefined();
    });

    describe('app.start', function() {
        beforeEach(function() {
            app.start();
        });

        it('should define a core Marionette application', function() {
            var marionetteApp = new Marionette.Application();
            expect(typeof(App.core)).toEqual(typeof(marionetteApp));
        });

        it('should have a views object', function() {
            expect(App.views).toBeDefined();
        });

        it('should have a data object', function() {
            expect(App.data).toBeDefined();
        });
    });
});
