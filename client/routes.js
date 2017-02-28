Router.configure({
    layoutTemplate: "hello",
    notFoundTemplate: "notFound"
});

Router.route("/", {
    template: "main"
});

Router.route('/city/:id', {
    template: "city",
    
    data: function () {
        // Return the document for the selected city (the one whose id is given)
        // The value of this id is given by  this.params.id
        var params = this.params; // { _id: "5" }
        var id = params._id; // "5"
    }
});