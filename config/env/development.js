var port = process.argv[2] || 8000;

module.exports = {
	db: "mongodb://riderx:trails1@ds047672.mongolab.com:47672/trailsmapp-dev",
	port: port,
};