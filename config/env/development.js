'use strict';

var port = process.argv[2] || 8000;

module.exports = {
	db: "mongodb://localhost:example",
	port: port,
};
