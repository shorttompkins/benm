var Backbone = require('backbone');

module.exports = ContactModel = Backbone.Model.extend({
    idAttribute: '_id',
    urlRoot: 'api/contacts'
});
