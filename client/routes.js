Router.configure({
    layoutTemplate: "main",
    notFoundTemplate: "notFound"
});

Router.route("/", function() {
    this.render('home');
}, {
    layoutTemplate: "home"
});

Router.route('/activities/:id', function (){
    this.render('activities', {    
        data: function () {
            // Return the document for the selected city (the one whose id is given)
            // The value of this id is given by this.params.id
            var id = this.params._id;            
            return activities.findOne({_id: id});
        }
    })
});

Router.route('/formActivity', function(){
    this.render("formActivity");
}, {
    layoutTemplate: "formActivity"
})