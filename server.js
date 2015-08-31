'use strict';
// test comment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var env = require('./config/config.js'),
	mongoose = require('./config/mongoose.js'),
	express = require('./config/express.js');

var db = mongoose(),
	app = express();

app.listen(env.port);

module.exports = app;
console.log(process.env.NODE_ENV + 'listening on http://localhost:' + env.port);
