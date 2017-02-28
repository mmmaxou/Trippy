Template.queries.events({
    "click #fullfill": function() {
        Meteor.call("reset", function (err, res) {
            if (err)
                console.log("!!", err);
        });
    }
});

Template.citylist.helpers({
    cities: function() {
        return Cities.find();
    },
    activities: function() {
        return Activities.find();
    }
});

$(document).ready(function () {
    $('.grid').isotope({
        itemSelector: '.grid-item',
    });
});