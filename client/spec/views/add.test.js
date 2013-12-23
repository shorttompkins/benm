var AddView = require('../../src/views/add.js'),
    $ = require('jquery');

describe('view:add', function() {
    var addView = new AddView();

    beforeEach(function() {
        spyOn(addView, 'save');
    });

    it('should have a save function', function() {
        expect(addView.save).toBeDefined();
    });

    //dont worry about catching the event - just test the functionality
    //of the event handler

    // it('should trigger the save function on click', function() {
    //     addView.render();
    //     addView.$el.find('a.save-button').trigger('click');
    //     //expect the save method to have been called...
    // });
});
