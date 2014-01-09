/* jshint -W030 */
var models = require('../../app/models');

describe('Models', function() {

    describe('Contact', function() {
        var schema = models.Contact.schema.paths;

        it('should exist', function() {
            expect(models.Contact).to.exist;
        });

        it('should have email string field', function() {
            expect(schema.email).to.exist;
            expect(schema.email.instance).to.equal('String');
        });

        it('should have name fields', function() {
            expect(schema['name.first']).to.exist;
            expect(schema['name.first'].instance).to.equal('String');
            expect(schema['name.last']).to.exist;
            expect(schema['name.last'].instance).to.equal('String');
        });

        it('should have phone string field', function() {
            expect(schema.phone).to.exist;
            expect(schema.phone.instance).to.equal('String');
        });

        it('should have gravatar string field', function() {
            expect(schema.gravatar).to.exist;
            expect(schema.gravatar.instance).to.equal('String');
        });
    });
});
