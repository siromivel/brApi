'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var TrailSchema = new Schema({
	type : String,
	properties : {
		name : String,
		difficulty: String,
		park: String,
		parkID: Number
	},
	geometry : {
		type : { type : String },
		coordinates : { type : Array }
	}
});

mongoose.model('Trail', TrailSchema);