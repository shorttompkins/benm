var Backbone = require('backbone'),
    ContactModel = require('../models/contact');

module.exports = ContactsCollection = Backbone.Collection.extend({
    model:  ContactModel,
    url: '/api/contacts'
});
