var fs = require('fs');

var init = JSON.parse(fs.readFileSync('./init.json'));

if (init.environment === 'development') {
  var config = JSON.parse(fs.readFileSync('./config/env/dev/dev.json'));
} else if (init.environment === 'production') {
  var config = JSON.parse(fs.readFileSync('./config/env/prod/prod.json'));
} else { 
  try {
  	throw new Error('Invalid init.json');
  } catch(e) {
  	console.log(e.message);
  }
}

module.exports = config;