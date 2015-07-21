'use strict';

module.exports = function(app) {
	var index = require('../controllers/index.server.controller.js');
	
	app.route('/').get(function(req, res) {
		res.send('brApi - a simple GeoJSON API');
	});
}