var models = require('../app/models');

module.exports = {
    index: function(req, res) {
        models.Contact.find({}, function(err, data) {
            res.json(data);
        });
    },
    getById: function(req, res) {
        models.Contact.find({ _id: req.params.id }, function(err, contact) {
            if(err)
                res.json({error: 'Contact not found.'});
            res.json(contact);
        });
    },
    add: function(req, res) {
        console.log(req.body);

        var newContact = new models.Contact(req.body);
        newContact.save(function(err, contact) {
            if (err)
                res.json({});
            console.log('successfully inserted contact: ' + contact._id);
            res.json(contact);
        });
    },
    update: function(req, res) {
        console.log(req.body);
        res.json(req.body);
    }
};
