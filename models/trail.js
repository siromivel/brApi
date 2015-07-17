var mongoose = require('mongoose'),
	Schema = mongoose.Schema

var trailSchema = mongoose.Schema({
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

Trail = mongoose.model('trail', trailSchema);

module.exports = Trail;