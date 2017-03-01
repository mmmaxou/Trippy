Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "home"
});

Router.route('/cities/:id', {
    template: "cities",
    data: function () {
        var id = this.params.id;
        return Cities.findOne({_id: id});
    }    
});

Router.route('/activities/:id', {
    template: "activities",
    data: function () {
        var id = this.params.id;
        return Activities.findOne({_id: id});
    }    
});

Router.route('/formActivity', {
    template: "formActivity"
})

Router.route('/cityAdd', {
    template: "cityAdd"
})

RouterAutoScroll.animationDuration = 0;

/*meteor update iron:middleware-stack*/