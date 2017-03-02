Cities = new Mongo.Collection("cities");
Activities = new Mongo.Collection("activities");
Test = new Mongo.Collection("test");
Admins = new Mongo.Collection("admins");

//Admins.remove({});
Admins.remove({})
Admins.insert({id: "u0"})
Admins.insert({id: "u1"})