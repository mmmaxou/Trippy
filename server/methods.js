Meteor.methods({
    initUploadServerForCity: function (name, lat, long) {
        UploadServer.init({
            tmpDir: process.env.PWD + '/.uploads/tmp',
            uploadDir: process.env.PWD + '/public/images/' + name,
            checkCreateDirectories: true, //create the directories for you
            finished: function (req) {
                var fileName = "/images/" + name + "/" + req.name;
                // Insert the new city in the collection here
                
                Cities.insert()
            }
        });
    }
});

Meteor.methods({
    'initUploadServerForActivity': function (city, activity) {
        var dirName = city.picture.slice(5, city.picture.lastIndexOf("/"));
        UploadServer.init({
            tmpDir: process.env.PWD + '/.uploads/tmp',
            uploadDir: process.env.PWD + '/public/images/' + dirName,
            checkCreateDirectories: true, //create the directories for you
            finished: function (req) {
                var fileName = "/images/" + dirName + "/" + req.name;
                // add fileName in the array of pictures of the activity
                // Test whether this is the first picture in the array
                // If this is the first picture, you have update the city document by adding to its field 'activities'
                // an object with the id, the name, the nature and the picture filename(this first one)
                // You have also tu update the activity document by adding the filename to the array 'pictures'
            }
        });
    }
});