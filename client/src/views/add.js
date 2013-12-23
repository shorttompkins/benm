var Marionette = require('backbone.marionette');

module.exports = AddView = Marionette.ItemView.extend({
    template: require('../../templates/add.hbs'),
    events: {
        'click a.save-button': 'save'
    },

    save: function(e) {
        e.preventDefault();
        var newContact = {
            name: {
                first: this.$el.find('#name_first').val(),
                last: this.$el.find('#name_last').val()
            },
            email: this.$el.find('#email').val(),
            phone: this.$el.find('#phone').val()
        };

        window.App.data.contacts.create(newContact);
        window.App.core.vent.trigger('app:log', 'Add View: Saved new contact!');
        window.App.controller.home();
    }
});
