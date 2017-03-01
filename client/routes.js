Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "home",
});

Router.route('/activities/:id', {
    template: "activities",
    data: function () {
        var id = this.params._id;
        return Activities.findOne({_id: id});
    }    
});

Router.route('/formActivity', {
    template: "formActivity",
})