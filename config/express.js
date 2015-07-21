'use strict';

var express = require('express');

module.exports = function() {
	var app = express();
	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/trails.server.routes.js')(app);
	return app;
};