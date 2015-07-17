//dependencies

var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');

//instantiate the express app
var app = express();
var router = require('./routes.js');
app.use('/', router)
// var trails = require('./models/trails.js');

//import the environment variables
var env = require('./config/config.js');

//establish a database connection through mongoose
var mongoose = require('mongoose');
mongoose.connect(env.db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongoose connection error.'));
db.once('open', function(callback) {
  console.log('Database connection ready.');
});

var server = app.listen(env.port, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('brApi listening at: ', host + ':' + port);
});
