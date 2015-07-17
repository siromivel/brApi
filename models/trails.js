'use strict';

var mongoose = require('mongoose');
var fs = require('fs');

var devEnv = JSON.parse(fs.readFileSync('./dev.json'));