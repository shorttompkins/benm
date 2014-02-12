var Marionette = require('backbone.marionette');

module.exports = ContactDetailsView = Marionette.ItemView.extend({
    template: require('../../templates/contact_details.hbs'),
    events: {
        'click a.back': 'goBack',
        'click a.delete': 'deleteContact'
    },

    goBack: function(e) {
        e.preventDefault();
        window.App.controller.home();
    },
    deleteContact: function(e) {
        e.preventDefault();
        console.log('Deleting contact');
        window.App.data.contacts.remove(this.model);

        // this will actually send a DELETE to the server:
        this.model.destroy();

        window.App.controller.home();
    }
});
