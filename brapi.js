'use strict';

var fs = require('fs');
var Http = require('http');
var Promise = require('bluebird');
var MongoDB = Promise.promisify(require('mongodb').MongoClient);

var env = JSON.parse(fs.readFileSync('./config/env/dev/dev.json'));

var dbURI =  env.db;

function reqHandler(req, res) {
	res.writeHead(200, {'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*'});

    //Routing & Request Handling, need to break out into model and controller(s) type of pattern.
    if (/\/trails\/?$/.test(req.url)) {
        var trails;
        var featureCollection = {};
        featureCollection.type = "FeatureCollection";

        MongoDB.connect(dbURI, function(err, db) {
            if (err) { console.log(err) }

            db.collection('trails').find({}, { "_id": 0 }).toArray().then(function(docs) {
                featureCollection.features = docs;
            }).then(function() {;
                res.write(JSON.stringify(featureCollection));
                res.end();
                db.close();
            });
        });
    } else if (/\/trails\/.[^\/]*/.test(req.url)) {
    	var trailName = new RegExp(decodeURIComponent(req.url.match(/\/trails\/(.[^\/]*)/)[1].toString()), "i");

        MongoDB.connect(dbURI, function(err, db) {
            if (err) { console.log(err) }

            db.collection('trails').
                find({ "properties.name": trailName }, { "_id": 0 }).
                toArray().then(function(docs) {
                    res.write(JSON.stringify(docs[0]));
                    res.end();
                    db.close();
                });
        });
	} else if (/\/difficulty\/(e|i|a)/.test(req.url)) {
        var trailDifficulty = new RegExp(decodeURIComponent(req.url.match(/\/difficulty\/(e|i|a)/)[1].toString()), "i");
        var trails;
        var featureCollection = {};
        featureCollection.type = "FeatureCollection";

        MongoDB.connect(dbURI, function(err, db) {
            if (err) { console.log(err) }

            db.collection('trails').find({ "properties.difficulty": trailDifficulty }, {"_id": 0}).toArray().then(function(docs) {
                featureCollection.features = docs;
            }).then(function() {;
                res.write(JSON.stringify(featureCollection));
                res.end();
                db.close();
            });
        });
    } else {
    	res.write('Invalid URL');
        res.end();
    }
}

var trailServer = Http.createServer(reqHandler).listen(env.port);
