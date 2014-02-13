var home = require('../controllers/home'),
    contacts = require('../controllers/contacts');

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/api/contacts', contacts.index);
    app.get('/api/contacts/:id', contacts.getById);
    app.post('/api/contacts', contacts.add);
    // app.put('/api/contacts', contacts.update);
    app.delete('/api/contacts/:id', contacts.delete);
};
