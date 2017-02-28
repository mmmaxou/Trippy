Template.queries.events({
    "click #fullfill": function () {
	Meteor.call("reset", function (err, res) {
	    if (err)
		console.log("!!", err);
	});
    }
});