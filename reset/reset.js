if (Meteor.isServer) {
    Meteor.methods({
        // reset database
        reset: function () {
            var derek = {
                "_id": "u0",
                "createdAt": new Date("2016-02-04T09:28:14.187Z"),
                "services": {
                    "password": {
                        "bcrypt": "$2a$10$5J/u4IF59xW8Xi73eQajzu5rnF2bcvXaKKQaye.Njh3knctvLnuf6" // derek.ie
                    },
                    "resume": {
                        "loginTokens": []
                    }
                },
                "emails": [{
                        "address": "derek@dkit.ie",
                        "verified": false
      }
  ]
            };
            var gilles = {
                "_id": "u1",
                "createdAt": new Date("2016-02-04T09:29:14.662Z"),
                "services": {
                    "password": {
                        "bcrypt": "$2a$10$PtpfLpKrWd3/AbQz1CCL6ubnHpWd2D.QVvQSJLoL.WPKpQjZCGIi." //gilles.fr
                    },
                    "resume": {
                        "loginTokens": []
                    }
                },
                "emails": [{
                        "address": "gilles@iut.fr",
                        "verified": false
      }
  ]
            };
            Meteor.users.remove({});
            Meteor.users.insert(derek);
            Meteor.users.insert(gilles);

            // *** activities
            // **** LILLE
            var jdp = {
                _id: "c0a0",
                name: "Jardin des Plantes",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Lille/jdp.jpg", "/images/Aix/jdp2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this place !!"
  }],
                description: "The Jardin des Plantes de Lille is a municipal botanical garden located on the Rue du jardin des Plantes. It is open daily without charge. It was established in 1948 as a successor of three botanical gardens in Lille. The garden is designed as a pleasure park, with botanical plots containing more than 1,500 plants grouped by families.",
                url: "http://www.lille.fr"
            };



            // DUBLIN
            var saintSauveur = {
                _id: "c0a1",
                name: "cathedral saint Sauveur",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Aix/sauveur1.jpg", "/images/Aix/sauveur2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "great"
  }],
                description: "no description"
            };
            var festival = {
                _id: "c0a2",
                name: "festival de musique",
                nature: "event",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Aix/festival1.png", "/images/Aix/festival1.jpg", "/images/Aix/festival2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "Awful music"
  }],
                description: "Fort de son succès, le Festival d’Aix accueille un public non seulement local, mais aussi national, et un grand nombre de spectateurs et de journalistes venus du monde entier.",
                url: "http://festival-aix.com/en",
                dateStart: new Date('2016-6-15'),
                dateEnd: new Date('2016-7-10')
            };
            Activities.remove({})
            Activities.insert(jdp);
            Activities.insert(saintSauveur);
            Activities.insert(festival);

            // **** cities
            var aix = {
                _id: "c0",
                name: 'Aix en Provence',
                coordinates: {
                    long: "43.5263",
                    lat: "5.4454"
                },
                description: "Protégée par la Montagne Sainte Victoire qui culmine à 1.011 m, Aix est entourée d'une campagne richementpréservée avec d'authentiques bastides provençales entourées de jardins à la française. Son nom vient des sources thermales découvertes à la fondation de la ville en 123 avant JC par les romains. <br />Aix en Provence était la capitale de la Provence au XVème siècle : marchands prospères et notables firent de la ville la Florence provençale que l'on connaît aujourd'hui. Demeures bourgeoises, placettes fleuries, hôtels particuliers, fontaines anciennes, ruelles ombragées... toutes les images de la Provence noble des XVII° et XVIII° sont rassemblées à Aix. <br />",
                picture: '/images/Aix/aix.jpg',
                activities: [{
                    _id: saintSauveur._id,
                    name: saintSauveur.name,
                    nature: saintSauveur.nature,
                    picture: saintSauveur.pictures[0]
  }, {
                    _id: festival._id,
                    name: festival.name,
                    nature: festival.nature,
                    picture: festival.pictures[0]
  }]
            };
            var lille = {
                _id: "c1",
                name: 'Lille',
                coordinates: {
                    long: "50.633333",
                    lat: "3.066667"
                },
                description: "Lille is the biggest city in Northern France, in French Landers. It’s a very beautiful place, and also a big student city. When you walk around the city center, if you look up you will always discover new things, such as sculptures on the roof, or on the walls that you didn’t notice before. And the people there are really, really friendly! ",
                picture: '/images/Lille/lille.jpg',
                activities: [{
                    _id: jdp._id,
                    name: jdp.name,
                    nature: jdp.nature,
                    picture: jdp.pictures[0]
  }, {
                    _id: saintSauveur._id,
                    name: saintSauveur.name,
                    nature: saintSauveur.nature,
                    picture: saintSauveur.pictures[0]
  }, {
                    _id: festival._id,
                    name: festival.name,
                    nature: festival.nature,
                    picture: festival.pictures[0]
  }]
            };
            Cities.remove({});
            Cities.insert(aix);
            Cities.insert(lille);
        },
    })
}
