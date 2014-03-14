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

        // this will actually send a DELETE to the server:
        this.model.destroy({
          success: function(model, response)  {
              window.App.data.contacts.remove(this.model);
          }
        });

        window.App.controller.home();
    }
});
