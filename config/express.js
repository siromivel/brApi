'use strict';

var express = require('express'),
	cors = require('cors');

module.exports = function() {
	var app = express();
	require('../app/routes/index.server.routes.js')(app);
	app.use(cors());
	require('../app/routes/trails.server.routes.js')(app);
	return app;
};