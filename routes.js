var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('brApi');
});

router.get('/trails', function(req, res) {
  res.send("Hello.");
});

router.get(/\/trails\/.[^\/]*/i, function(req, res) {

});

router.get(/\/location\/.[^\/]*/i, function(req, res) { 

});

router.get(/\/difficulty\/(ex|e|i|a)$/i, function(req, res) {

});

module.exports = router;