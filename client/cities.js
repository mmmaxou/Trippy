Template.cities.helpers({
    //    cities: function() {
    //        return Cities.find();
    //    },
    //    activities: function() {
    //        return Activities.find({});
    //    },
    isAnEvent: function(nature){
        return nature === "event";
    },
    isAPlace: function(nature){
        return nature === "place";
    },
    isConnected : function () {
        return isConnected()
    },
    isAdmin : function () {
        return isAdmin()
    },
    isPlaceEmpty : function (object) {
        return $('#placeWrapper').find("*").length == 0;
    },
    isEventEmpty : function (object) {
        return $('#eventWrapper').find("*").length == 0;
    }
});

Template.cities.events({
    'click #displayAddActivity' : function () {
        var a = $('#displayAddActivity').text();
        if (a == "+" ) {
            $('.formAddCity').fadeIn();
            $('#displayAddActivity').text("-");
        } else {
            $('.formAddCity').fadeOut();
            $('#displayAddActivity').text("+");
        }
    },
    'click #commentAdd': function(){
        $('#sectionAdd').fadeIn();
    },
    'submit form#sectionAdd': function (event) {
        event.preventDefault();

        var city = this;      
        var comment = {};
        const target = event.target;
        comment.text = target.comment.value;
        comment.date = new Date();
        comment.user = {
            _id : Meteor.user()._id,
            email : Meteor.user().emails[0].address
        }

        Meteor.call("addComment", city, comment, "city");
        toastSuccess("Comment added !")
        $('#sectionAdd').fadeOut();
        target.comment.value = "";
    },
    'click #descriptionButton' : function () {
        if( $('#descriptionButton').text() == "Edit") {
            $('#descriptionButtonCancel').fadeIn();
            $('#descriptionButton').text("Save");
            $('.wrapperCityDescription > p')
                .attr('contenteditable', 'true')
                .addClass('editable');
        }
        else if( $('#descriptionButton').text() == "Save") {
            $('.wrapperCityDescription > p')
                .attr('contenteditable', 'false')
                .removeClass('editable');
            $('#descriptionButtonCancel').fadeOut();
            $('#descriptionButton').text("Edit");

            Meteor.call("editDescription", this._id, "city", $(".wrapperCityDescription > p").text())
        }
    },
    'click #descriptionButtonCancel' : function () {
        $('.wrapperCityDescription > p')
            .attr('contenteditable', 'false')
            .removeClass('editable')
            .text(this.description);        
        $('#descriptionButtonCancel').fadeOut();
        $('#descriptionButton').text("Edit");
    },
    'click #like': function(){
        var user = isConnected();
        if(user != null) {
            user = Meteor.user();
            var city = this;

            //Regarde si l'utilisateur a déjà liké dans la database de l'activité
            if ( city.usersLiking != null ) {
                var check = !city.usersLiking.some(function(e){
                    return e == user._id;
                })
                } else {
                    var check = true;
                }

            console.log("User : " + user)
            console.log("Check : " + check)

            if ( check ) {
                Meteor.call("addLike", city, "city", user);
                toastSuccess("Successfully liked")   
            } else {  
                toastError("You already liked !");
            }
        }
    }
})