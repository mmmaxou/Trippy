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

Template.cities.helpers({
    cities: function() {
        return Cities.find();
    },
    activities: function() {
        return Activities.find();
    }
});

Template.citylist.events({
    'click #destAnchor': function(e){
        $('html, body').animate({
            scrollTop: $("#dest").offset().top
        }, 1000);
    },
    'load *': function(){
        $('.grid').isotope({
            itemSelector: '.grid-item',
        });
    }
})

Template.formActivity.events({
    'submit' (event) {
        event.preventDefault();

        const target = event.target;
        const name = target.name.value;
        const description = target.description.value;
        const datestart = target.datestart.value;
        const dateend = target.dateend.value;
        const nature = target.nature.value;
        var comments = [];
        var editor = "TODO";
        var pictures = [];

        console.log(name, description, datestart, dateend, nature)

        Test.insert({
            name,
            description,
            datestart,
            dateend,
            nature,
            comments,
            editor,
            pictures
        });

        window.location.href = "../";

    },

    'change input[type=radio]' : function(){
        var input = $("#event");
        if ( input.prop("checked") == false) {
            console.log("true");
            $('#dates').fadeOut();            
        } else { $('#dates').fadeIn();}

        target.text.value = '';
        target.description.value = '';
    }
});