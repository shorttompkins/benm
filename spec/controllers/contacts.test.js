/* jshint -W030 */
var proxyquire = require('proxyquire'),
    modelsStub = {},
    md5Stub = function(string) { return string; },
    contacts = proxyquire('../../controllers/contacts', {
        '../app/models' : modelsStub,
        'MD5': md5Stub
    });

var res = {},
    req = {};

describe('Contacts Controller', function() {
    beforeEach(function() {
        res = {
            json: sinon.spy()
        };
        req = {
            params: {
                id : 1
            }
        };
        modelsStub.Contact = {
            find: function(query, callback) {
                callback(null, {});
            },
            save: function(err, callback) {
                callback(null, req.body);
            }
        };
    });

    it('should exist', function() {
        expect(contacts).to.exist;
    });

    describe('index', function() {
        it('should be defined', function() {
            expect(contacts.index).to.be.a('function');
        });

        it('should send json', function() {
            contacts.index(req, res);
            expect(res.json).calledOnce;
        });
    });

    describe('getById', function() {
        it('should be defined', function() {
            expect(contacts.getById).to.be.a('function');
        });

        it('should send json on successful retrieve', function() {
            contacts.getById(req, res);
            expect(res.json).calledOnce;
        });

        it('should send json error on error', function() {
            modelsStub.Contact = {
                find: function(query, callback) {
                    callback(null, {error: 'Contact not found.'});
                }
            };
            contacts.getById(req, res);
            expect(res.json).calledWith({error: 'Contact not found.'});
        });
    });

    describe('add', function() {
        beforeEach(function() {
            req.body = {
                name: 'testing',
                email: 'test@testing.com',
                phone: '123-456-7890'
            };
        });

        it('should be defined', function() {
            expect(contacts.add).to.be.a('function');
        });

        it('should return json on save', function() {

            modelsStub.Contact = sinon.spy(function() {
                modelsStub.Contact.prototype.save = function(callback) {
                    callback(null, req.body);
                };
                return;
            });

            contacts.add(req, res);
            expect(res.json).calledWith(req.body);
        });
        it('should return error on failed save', function() {

            modelsStub.Contact = sinon.spy(function() {
                modelsStub.Contact.prototype.save = function(callback) {
                    callback({}, req.body);
                };
                return;
            });

            contacts.add(req, res);
            expect(res.json).calledWith({error: 'Error adding contact.'});
        });
    });

    describe('delete', function() {
        beforeEach(function() {
            req.body = {
                id: '1',
                name: 'testing',
                email: 'test@testing.com',
                phone: '123-456-7890'
            };
        });

        it('should be defined', function() {
            expect(contacts.delete).to.be.a('function');
        });

        it('should return json on save', function() {
            var contactSpy = {remove: sinon.spy()};
            modelsStub.Contact = {
                findOne: function(query, callback) {
                    callback(null, contactSpy);
                }
            };

            contacts.delete(req, res);
            expect(contactSpy.remove).calledOnce;
        });
        it('should return error on failed save', function() {
            modelsStub.Contact = {
                findOne: function(query, callback) {
                    callback({}, {});
                }
            };

            contacts.delete(req, res);
            expect(res.json).calledWith({error: 'Contact not found.'});
        });
    });
});
