Template.main.onRendered(function() {
  this.autorun(function() {
    document.title = Session.get('documentTitle');
  });
});

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
        console.log("nature:"+nature)
        return nature === "event";
    },
    isAPlace: function(nature){
        console.log("nature:"+nature)
        return nature === "place";
    }
});

Template.navbar.helpers({
    template: function () {
        route = Router.current();
        return route? route.lookupTemplate() : 'home';
    }
});

Template.citylist.events({
    'load *': function(){
        $('.grid').isotope({
            getSortData: {
                name : ".cityName"
            },
            itemSelector: '.grid-item',
        });
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 150) {
                $('.home').fadeIn(300);
            } else {
                $('.home').fadeOut(300);
            }
        });
    },
    'click #destClick': function(){
        $('html, body').stop(true, false).animate({
            scrollTop: $("#dest").offset().top
        }, 1000);      
    },
    'click #sort_az': function(){
        $('.grid').isotope({
            sortBy: 'name'
        });
    },
    'click #sort_date': function(){
        $('.grid').isotope({
            sortBy: 'original-order'
        });
    }
})

Template.home.events ({
    'load *': function(){
        $("#destlink").click(function(){
            $('html,body').stop(true, false).animate({
                scrollTop: $("#dest").offset().top
            },1000);
        });
        $("#destActive").addClass("active");
    }
});

Template.about.events ({
//    Session.set('documentTitle', 'Awesome title');
    'load *': function(){
        
    }
});
