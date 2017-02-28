Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", function() {
    this.render('home');
}, {
    layoutTemplate: "home"
});

Router.route('/city/:id', function (){
    this.render('cities', {    
        data: function () {
            // Return the document for the selected city (the one whose id is given)
            // The value of this id is given by  this.params.id
            var params = this.params; // { _id: "5" }
            var id = params._id; // "5"
        }
    })
});