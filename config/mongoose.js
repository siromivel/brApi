'use strict';

var env = require('./env/development.js'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(env.db);
	require('../app/models/trail.server.model');
	return db;
};