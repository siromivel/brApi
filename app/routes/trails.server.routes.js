'use strict';

var trails = require('../controllers/trails.server.controller.js');

module.exports = function(app) {
	app.route(/\/trails\/?$/)
		.get(trails.findAll);

	app.route('/trails/:trail')
		.get(trails.findByName);

	app.route('/difficulty/:difficulty')
		.get(trails.findByDifficulty);

	app.route('/location/:loc')
		.get(trails.findByLocation);
};
