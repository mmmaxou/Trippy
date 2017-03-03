Template.cities.helpers({
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
    isPlaceEmpty : function () {
        var city = this;
        var isEmpty = city.activities.some(function (e) {
            return e.nature == "place";
        })
        return !isEmpty;
    },
    isEventEmpty : function () {
        var city = this;
        var isEmpty = city.activities.some(function (e) {
            return e.nature == "event";
        })
        return !isEmpty;
    },
    userAlreadyLiked : function () {
        var city = this;
        var user = Meteor.user();
        
        if ( city.usersLiking != null ) {
            var check = city.usersLiking.some(function(e){
                return e == user._id;
            })
        } else {
            var check = false;
        }
        if (check) {
            return true
        } else {
            return false
        }
    },
    commentsNumber : function() {
        var city = this;
        var nb = city.comments.length;
        console.log(nb);
        return nb;
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
        if( $('.wrapperCityDescription > p').hasClass("editable") == false) {
            $('#descriptionButtonCancel').fadeIn();
            $('#descriptionButton').text("Save");
            $('.wrapperCityDescription > p')
                .attr('contenteditable', 'true')
                .addClass('editable');
        }
        else {
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

            if ( check ) {
                Meteor.call("addLike", city, "city", user);
                toastSuccess("Successfully liked")   
            } else {  
                toastError("You already liked !");
            }
        }
    }
})


function isConnected() {
    var user = Meteor.user();
    if (user != null) {
        return true;
    }
    return false;
}

function isAdmin() {
    console.log("admin checking")
    if ( isConnected() ) {
        var user = Meteor.user();
        if( Admins.findOne({id: user._id}) != undefined )
            return true;
    }
    return false;
}

function toastError (text) {         
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr.error(text);
}

function toastSuccess (text) {         
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": false,
        "positionClass": "toast-top-full-width",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "2000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr.success(text);
}