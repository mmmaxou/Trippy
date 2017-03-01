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

Template.citylist.events({
    'click #destAnchor': function(){
        $('html, body').animate({
            scrollTop: $(".mainContent").offset().top
        }, 2000);
    },
    'load *': function(){
        $('.grid').isotope({
            // options
            itemSelector: '.grid-item',
        });
    }
})

Template.formActivity.events({
    'submit form': function (event) {
        event.preventDefault();
        
        var city = this || {picture: '/images/Aix/aix.jpg'};
        var activity = {};       

        //Get value from form elements
        const target = event.target;
        activity.name = target.name.value;
        activity.description = target.description.value;
        activity.datestart = target.datestart.value;
        activity.dateend = target.dateend.value;
        activity.nature = target.nature.value;
        activity.comments = [];
        activity.editor = "TODO";
        activity.pictures = [];
        
        console.log(activity)
        console.log("city :", city)
        console.log(Meteor.userId())
        
        // show the upload panel 
        $('.uploadPanel').fadeIn();
        // hide the submit button 
        $('#submit').fadeOut();
        // find the document corresponding to the user (his id is Meteor.userId())
        // TODO
    
        Test.insert(activity, function(err, objectId){
            activity._id = objectId;
            Meteor.call("initUploadServerForActivity", city, activity);
        });
                
        //Go back home
        //Change it later to go to the new page
//        window.location.href = "../";
        
    },
    
    'change input[type=radio]' : function(){
        var input = $("#event");
        if ( input.prop("checked") == false) {
            console.log("true");
            $('#dates').fadeOut();            
        } else { $('#dates').fadeIn();}
    },
    
    'click .uploadPanel' : function() {
        console.log("clicked")
        Meteor.call("initUploadServerForCity", "name", "lat", "long");
    }
});