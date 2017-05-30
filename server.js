var express        = require('express');
var app            = express();
var server		   = require('http').createServer(app);


var port = process.env.PORT || 3535; // set our port
app.use(express.static(__dirname + '/app')); 




server.listen(port);	
console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 	

	app.get('*', function(req, res) {
		res.sendFile('./app/index.html');
	});