var Marionette = require('backbone.marionette');

module.exports = ContactDetailsView = Marionette.ItemView.extend({
    template: require('../../templates/contact_details.hbs'),
    events: {
        'click a': 'goBack'
    },

    goBack: function(e) {
        e.preventDefault();
        window.App.router.navigate('#',{trigger: true});
    }
});
