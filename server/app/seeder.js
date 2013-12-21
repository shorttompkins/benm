var mongoose = require('mongoose'),
    models = require('./models');

module.exports = {
    check: function() {
        models.Contact.find({}, function(err, contacts) {
            if (contacts.length === 0) {
                console.log('no contacts found, seeding...');
                var newContact = new models.Contact({
                    email: 'jkat98@gmail.com',
                    name: {
                        first: 'Jason',
                        last: 'Krol'
                    },
                    phone: '215-123-1234'
                });
                newContact.save(function(err, contact) {
                    console.log('successfully inserted contact: ' + contact._id);
                });

                newContact = new models.Contact({
                    email: 'dskboudge@gmail.com',
                    name: {
                        first: 'Dustin',
                        last: 'Krol'
                    },
                    phone: '215-123-1234'
                });
                newContact.save(function(err, contact) {
                    console.log('successfully inserted contact: ' + contact._id);
                });

                newContact = new models.Contact({
                    email: 'polartennis@gmail.com',
                    name: {
                        first: 'Andrea',
                        last: 'Krol'
                    },
                    phone: '215-123-1234'
                });
                newContact.save(function(err, contact) {
                    console.log('successfully inserted contact: ' + contact._id);
                });
            } else {
                console.log('found ' + contacts.length + ' existing contacts!');
            }
        });
    }
};
