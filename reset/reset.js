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
                _id: "c1a0",
                name: "Jardin des Plantes",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Lille/jdp.jpg", "/images/Lille/jdp2.jpg"],
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
            var grandPlace = {
                _id: "c1a1",
                name: "La Grande Place",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Lille/gp.jpg", "/images/Lille/gp2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this place !!"
  }],
                description: "La grand place a big place in Lille. At this location you can find a lot of shops such as Le Furet du Nord, which is a big library. You can also see the Column of the Goddess which is a famous emblem of the city. This place is always filled with people.",
                url: "http://www.lille.fr"
            };
            var beauxArts = {
                _id: "c1a2",
                name: "Le palais des Beaux-Arts ",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Lille/ba.jpg", "/images/Lille/ba2.jpg", "/images/Lille/ba3.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this place !!"
            }],
                description: "The Palais des Beaux arts de Lille is a municipal museum dedicated to fine arts, modern art, and antiquities. It is one of the largest art museums in France. You can find paints, sculptures dating from Antiquities to 20th century.",
                url: "http://www.lille.fr"
            };
            var braderie = {
                _id: "c1a3",
                name: "La braderie de Lille",
                nature: "event",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Lille/bra.jpg", "/images/Lille/bra2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this event !!"
            }],
                description: "The Lille braderie is an annual street market that takes place on the weekend of the first Sunday of September in Lille. This event dates back to the 12th century and claims to be the largest such event in Europe, with over 10,000 sellers and several million attendees. The 2016 market was cancelled due to security fears because of the recent terrorism in France.",
                url: "http://www.lille.fr"
            };
            var granet = {
                _id: "c0a15",
                name: "musée Granet",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this place !!"
  }],
                description: "Le musée Granet présente près de 600 oeuvres de peinture, sculpture, pièces archéologiques. Peintures hollandaises, italiennes, françaises de diverses époques",
                url: "http://museegranet-aixenprovence.fr"
            };
            var saintSauveur = {
                _id: "c0a16",
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
                _id: "c0a6qwd",
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

            // DUBLIN
            var templeBar = {
                _id: "c0a0",
                name: "The Temple Bar",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Dublin/ttb.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this place !!"
  }],
                description: "Guinness is synonymous with Ireland and no visit to Dublin is complete without a trip to the Guinness Storehouse – the Home of Guinness.Located in the heart of the legendary St. James’s Gate Brewery in Dublin, this production site has been home to the Guinness Brewery since 1759, when Arthur Guinness signed a lease for 9,000 years. The Guinness Storehouse building dates back to 1904 and is built in the style of the Chicago School of Architecture. It was once the fermentation plant of the brewery and is now a seven-story visitor experience dedicated to the history of the making of this world famous beer. The Guinness Storehouse is the Home of Guinness, where you will discover what goes into the making of each and every pint, and learn about the incredible brand history stretching over 250 years.Ireland’s number one International Visitor Attraction unfolds its tale across seven floors shaped around a giant pint, which, if filled would contain 14.3 million pints of Guinness. Here, you can experience Guinness like nowhere else. As you make your way through the impressive storehouse, discover the age-old art of brewing that makes Guinness so distinctive; visit the Tasting rooms, a multisensory tasting experience designed to help you appreciate the distinctive taste of the iconic stout, from the very first velvet sip to the last lingering drop. You can learn how to pour the perfect pint in the Guinness Academy or upgrade to enjoy samples of the four most popular variants, with an intimate tasting experience with the Connoisseur Experience. Step into the wonderful world of Guinness Advertising at the new Advertising Exhibit. Enjoy the best in Irish cuisine at the Guinness & Food Experience on level five. The highlight for many visitors is the Gravity Bar, symbolically the ‘Head of the Pint”, where visitors can enjoy unparalleled panoramic views of Dublin city – views that are all the better with a complimentary pint in hand.",
                url: ""
            };
            var guinness = {
                _id: "c0a1",
                name: "Guinness Storehouse",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Dublin/guinness.jpg", "/images/Dublin/guinness2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this place !!"
  }],
                description: "The Temple Bar is located in the heart of Dublin and close to all the main attractions. If it’s a traditional Irish Pub you are after, look no further than the Temple Bar.Hard to believe that in the middle of this hectic area, there is a peaceful outdoor haven, where you can enjoy the atmosphere of the bar, in the sunshine or rain, out in the fresh air of Dublin.A genuinely warm welcome, backed by first-rate modern service, is the hallmark of this friendly spot in Dublin.Whether you are alone or with a group of friends, the craic is fantastic and you will feel thoroughly at home at the Temple Bar. Overseas and out of town visitors will find the staff to be a valuable mine of information on Dublin's history and haunts.Boasting Traditional Irish Music Pub of the Year from 2002 to 2012, The Temple Bar prides itself with fine Live Music Sessions every day and bring together a fine sample of talented musicians from around the country.If you want a quick bite to eat before you head off to do the sights of Dublin, drop in and grab a sandwich and refreshments.",
                url: ""
            };
            var trinity = {
                _id: "c0a2",
                name: "Trinity College Dublin Library ",
                nature: "place",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Dublin/trinity.jpg", "/images/Dublin/trinity2.jpg", "/images/Lille/ba3.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this place !!"
            }],
                description: "Dublin’s Trinity College Library has 5 million printed volumes with extensive collections of journals, manuscripts, maps and music reflecting more than 400 years of academic development.  The most famous of its manuscripts, the Book of Kells and the Book of Durrow, were presented by Henry Jones, Bishop of Meath and former vice-chancellor of the university, in the 1660s. Other special collections include the Ussher Collection acquired in 1661 and the Fagel Colection of 1802. The library was endowed with legal deposit privilege in 1801 and continues to receive copies of material published in the United Kingdom and Ireland. The library supports the learning and research needs across all disciplines of Trinity College.  It is a major research library, providing services to a wide range of external users and institutions. It contributes to the development of creative initiatives in information provision and its exhibitions of manuscripts and other treasures attracts hundreds of thousands of visitors to the Old Library each year.",
                url: ""
            };
            var patrick = {
                _id: "c0a3",
                name: "St Patrick’s Day",
                nature: "event",
                editor: {
                    _id: gilles._id,
                    email: gilles.emails[0].address
                },
                pictures: ["/images/Dublin/patrick.jpg", "/images/Dublin/patrick2.jpg"],
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this event !!"
            }],
                description: "The St. Patrick’s Festival is, without a doubt, one of the most magical times to be in Dublin City. Spanning over four days (March 16 – 19) and with spectacular events taking place all over the capital, there is no better place to celebrate the arts, culture, and food that Dublin has to offer. Check out some of the festival highlights, from jigs to poetry and everything in-between... Attended by tens of thousands, the St. Patrick’s Day Parade on March 17 is the festival’s most well-known and beloved event. Kicking off at 12pm on Parnell Street, this colorful procession of eccentric performers, magical floats and joyful bands from all over the world will meander around the city center bringing the spirit of the festival to life. “Ireland You Are” is the theme for the 2017 Festival Parade, which will weave its way through the heart of the capital city in a flourish of color and flair. Marvel as Ireland’s finest street theatre companies swirl by with fantastical pageantry and raucous performances. Bands from Ireland and around the world will deliver uplifting rhythms for the spectacular procession. For history buffs, the “In the Footsteps of St. Patrick’s Walking Tour” is a must, vividly illustrating the captivating tale of St. Patrick and the Dublin of his time. Not only does the tour encapsulate some of Dublin’s most famous ancient sites including Christ Church Cathedral and St. Patrick’s Cathedral, it also shows off a unique and unexplored side of the city that Dubliners seldom see. Tours take place on March 16, 17 (2.15pm only), 18 and 19 at 10.30am and 2.15pm. ",
                url: "http://www.lille.fr"
            };
            Activities.remove({});
            Activities.insert(grandPlace);
            Activities.insert(jdp);
            Activities.insert(beauxArts);
            Activities.insert(braderie);
            Activities.insert(templeBar);
            Activities.insert(guinness);
            Activities.insert(trinity);
            Activities.insert(patrick);
            Activities.insert(granet);
            Activities.insert(saintSauveur);
            Activities.insert(festival);

            // **** cities
            var dublin = {
                _id: "c4",
                name: 'Dublin',
                coordinates: {
                    long: "53.3330600",
                    lat: "-6.2488900"
                },
                like: 15,
                comments: [{
                    user: {
                        _id: derek._id,
                        email: derek.emails[0].address
                    },
                    date: new Date(),
                    text: "I love this event !!"
                }],
                description: "Dublin is the capital and largest city of Ireland. Dublin is in the province of Leinster on Ireland's east coast, at the mouth of the River Liffey. The city has an urban area population of 1,345,402. The population of the Greater Dublin Area, as of 2016, was 1,904,806 people. Founded as a Viking settlement, the Kingdom of Dublin became Ireland's principal city following the Norman invasion. The city expanded rapidly from the 17th century and was briefly the second largest city in the British Empire before the Acts of Union in 1800. Following the partition of Ireland in 1922, Dublin became the capital of the Irish Free State, later renamed Ireland.Dublin is administered by a City Council. The city is listed by the Globalization and World Cities Research Network (GaWC) as a global city, with a ranking of 'Alpha-', which places it amongst the top thirty cities in the world. It is a historical and contemporary centre for education, the arts, administration, economy and industry.",
                picture: '/images/Dublin/dublin.jpg',
                activities: [{
                    _id: templeBar._id,
                    name: templeBar.name,
                    nature: templeBar.nature,
                    picture: templeBar.pictures[0]
  }, {
                    _id: guinness._id,
                    name: guinness.name,
                    nature: guinness.nature,
                    picture: guinness.pictures[0]
  }, {
                    _id: trinity._id,
                    name: trinity.name,
                    nature: trinity.nature,
                    picture: trinity.pictures[0]
  }, {
                    _id: patrick._id,
                    name: patrick.name,
                    nature: patrick.nature,
                    picture: patrick.pictures[0]
  }]
            };
            var lille = {
                _id: "c3",
                name: 'Lille',
                coordinates: {
                    long: "50.633333",
                    lat: "3.066667"
                },
                like: 3,
                description: "Lille is the biggest city in Northern France, in French Landers. It’s a very beautiful place, and also a big student city. When you walk around the city center, if you look up you will always discover new things, such as sculptures on the roof, or on the walls that you didn’t notice before. And the people there are really, really friendly! ",
                picture: '/images/Lille/lille.jpg',
                activities: [{
                    _id: jdp._id,
                    name: jdp.name,
                    nature: jdp.nature,
                    picture: jdp.pictures[0]
  }, {
                    _id: grandPlace._id,
                    name: grandPlace.name,
                    nature: grandPlace.nature,
                    picture: grandPlace.pictures[0]
  }, {
                    _id: beauxArts._id,
                    name: beauxArts.name,
                    nature: beauxArts.nature,
                    picture: beauxArts.pictures[0]
  }, {
                    _id: braderie._id,
                    name: braderie.name,
                    nature: braderie.nature,
                    picture: braderie.pictures[0]
  }]
            };
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
                    _id: granet._id,
                    name: granet.name,
                    nature: granet.nature,
                    picture: granet.pictures[0]
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
            var boulogne = {
                _id: "c1",
                name: 'Boulogne sur mer',
                coordinates: {
                    long: "50.7264",
                    lat: "1.6147"
                },
                description: "",
                picture: '/images/Boulogne/centre.jpg',
                activities: []
            };
            Cities.remove({});
            Cities.insert(aix);
            Cities.insert(boulogne);
            Cities.insert(lille);
            Cities.insert(dublin);
        },
    })
}
