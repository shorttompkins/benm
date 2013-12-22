var Marionette = require('backbone.marionette'),
    ContactsView = require('./views/contacts'),
    ContactDetailsView = require('./views/contact_details'),
    AddContactView = require('./views/add');

module.exports = Controller = Marionette.Controller.extend({
    initialize: function() {
        App.core.vent.trigger('app:log', 'Controller: Initializing');
        window.App.views.contactsView = new ContactsView({ collection: window.App.data.contacts });
        window.App.views.addContactView = new AddContactView();
        //note we store the details view with no model because its set at the time
        //of hitting via the controller (further down below)
        window.App.views.contactDetailsView = new ContactDetailsView();
    },

    home: function() {
        App.core.vent.trigger('app:log', 'Controller: "Home" route hit.');
        var view = window.App.views.contactsView;
        this.renderView(view);
    },

    details: function(id) {
        App.core.vent.trigger('app:log', 'Controller: "Contact Details" route hit.');
        var view = window.App.views.contactDetailsView;
        //see how we change the model based on whichever they selected
        //(better than newing up the view just because it has a diff model!)
        view.changeModel(window.App.data.contacts.get(id));
        this.renderView(view);
    },

    add: function() {
        App.core.vent.trigger('app:log', 'Controller: "Add Contact" route hit.');
        //var view = window.App.views.addContactView;
        //Note: reusing the cached view was causing events to NOT fire on
        //subsequent rounds of reuse... why?
        var view = new AddContactView();
        this.renderView(view);
    },

    renderView: function(view) {
        $('#js-boilerplate-app').html(view.render().el);
    }
});
