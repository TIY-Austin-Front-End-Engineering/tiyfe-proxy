var express = require('express');
var request = require('request');
var cors = require('cors');
// var bodyParser = require('body-parser')
var app = express();
app.use(cors());
app.use(function(req, res, next) {
	req.rawBody = '';
	req.setEncoding('utf8');

	req.on('data', function(chunk) { 
	req.rawBody += chunk;
	});

	req.on('end', function() {
	next();
	});
});



app.set('port', (process.env.PORT || 5000));

// app.use(bodyParser.urlencoded({ extended: false }))

app.all('/*', function(req, res) {
	var options = {
		url: unescape(req.url.substring(1)),
		method: req.method,
		// headers: req.headers,
		body: req.rawBody
	};
	request(options, function(error, response, body) {
		res.end(body);
	});
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
