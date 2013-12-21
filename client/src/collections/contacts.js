var Backbone = require('backbone'),
    ContactModel = require('../models/contact');

module.exports = SampleCollection = Backbone.Collection.extend({
    model:  ContactModel,
    url: '/api/contacts'
});
