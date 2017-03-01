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
    'submit form': function (event) {
        event.preventDefault();
        
        var city = this || {picture: '/images/Aix/aix.jpg'};
        var activity = {};       

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
            $('#dates').fadeOut();            
        } else { $('#dates').fadeIn();}
    },
    
//    'click .uploadPanel' : function() {
//        Meteor.call("initUploadServerForCity", "name", "lat", "long");
//    }
});