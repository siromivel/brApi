'use strict';

var Trail = require('mongoose').model('Trail');

var featureCollection = function(contents) {
	this.type = "FeatureCollection";
	this.features = contents;
};

exports.findAll = function(req, res, next) {
	Trail.find({}, {'_id' : 0, '__v' : 0}, function(err, trails) {
		if (err) { return next(err) }
		res.json(new featureCollection(trails));
	});
};

exports.findByName = function(req, res, next) {
    var trailName = new RegExp(req.params.trail, "i");

	Trail.find({ "properties.name" : trailName }, function(err, trail) {
		if (err) { return next(err) }
		res.json(trail);
	});
};

exports.findByDifficulty = function(req, res, next) {
	Trail.find({ "properties.difficulty" : req.params.difficulty }, {'_id' : 0, '__v' : 0}, function(err, trails) {
		if (err) { return next(err) }
		res.json(new featureCollection(trails));
	});
};

exports.findByLocation = function(req, res, next) {
	var loc = new RegExp(req.params.loc, "i");

	Trail.find({ "properties.park" : loc }, { "_id" : 0, "__v" : 0 }, {"sort" : "properties.parkID" }, function(err, trails) {
		if (err) { return next(err) }
		res.json(new featureCollection(trails));
	});
}