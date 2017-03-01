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
    },
    isAnEvent: function(nature){
        return nature === "event";
    },
    isAPlace: function(nature){
        return nature === "place";        
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
    
        Activities.insert(activity, function(err, objectId){
            activity._id = objectId;
            Meteor.call("initUploadServerForActivity", city, activity);
        });
        
    },

    'change input[type=radio]' : function(){
        var input = $("#event");
        if ( input.prop("checked") == false) {
            $('#dates').fadeOut();            
        } else { $('#dates').fadeIn();}
    },
});

Template.cityAdd.events({
    'submit form': function (event) {
        event.preventDefault();
        var city = {};       
        
        const target = event.target;
        
        city.name = target.name.value;
        city.description = target.description.value;
        city.coordinates = {
            long : target.long.value,
            lat : target.lat.value
        }
        
        // show the upload panel 
        $('.uploadPanel').fadeIn();
        // hide the submit button 
        $('#submit').fadeOut();
        // find the document corresponding to the user (his id is Meteor.userId())
        // TODO
    
        Cities.insert(city, function(err, objectId){
            city._id = objectId;
            Meteor.call("initUploadServerForCity", city);
        });
        
    }
});