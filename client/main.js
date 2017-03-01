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
    },
    isotope: function() {
        $(document).ready(function(){
            $('.grid').isotope({
                // options
                itemSelector: '.grid-item',
            });
        })
    }
});

Template.citylist.events({
    'click *': function(){
        $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
        });
    }
})

Template.citylist.onCreated(function(){
    $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
    });
});

Template.formActivity.events({
    'submit' (event) {
        event.preventDefault();

        //Get value from form elements
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
                
        //Go back home
        //Change it later to go to the new page
        window.location.href = "../";
        
    },
    
    'change input[type=radio]' : function(){
        var input = $("#event");
        if ( input.prop("checked") == false) {
            console.log("true");
            $('#dates').fadeOut();            
        } else { $('#dates').fadeIn();}

        //Clear form
        target.text.value = '';
        target.description.value = '';
    }
})
