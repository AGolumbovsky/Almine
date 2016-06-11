var bodyParser = require('body-parser');
var AlmineDB = require('../models/almineModel');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // get ALL
    app.get('/api/all', function(req, res) {

        AlmineDB.find({}, function(err, data) {

            if (err) throw err;

            res.send(data);

            console.log("look, that's one of them: " + data[0]);
        })

    });

    // get one
    app.get('/api/things/:thing', function(req, res) {

        AlmineDB.findById({ _id: req.params.thing }, function(err, data) {

            if(err) throw err;

            res.send(data);

            console.log("Look, is this who you lookin pho? " + data)

        })

    })

    // post to db
    app.post('/api/add', function(req, res) {
        
        var newItem = AlmineDB({
            uno: "eineeeeeeee", 
            dos: req.body.dos, 
            tres: req.body.tres
        })

        newItem.save(function(err) {

            res.send("Great success POST");
        })

    })

    // delete one
    app.delete('/api/things', function(req, res) {

        // to remember the info for the farewell message
        // do it differently
        var allThatsLeftOfIt = req.body.thing;

        AlmineDB.find({ "uno": req.body.thing }).remove(function(err) {

            if(err) throw err;

            res.send("it is no more");
            console.log("Is this what you wanted? I removed " + allThatsLeftOfIt);

        });

    });

};