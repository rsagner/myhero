var express = require('express');

var http = require('http');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World! - by Rikard4');
});

app.get('/echo', function(request, response) {
  response.send('Echo! - by Rikard');
});


app.get('/google', function(request, response) {
  	http.get("http://www.google.se", function(res){}).on('response',function (feed) {

		response.writeHead(200, {'Content-Type': 'text/html','Accept-Charset': 'utf-8'});

		feed.on('data', function (chunk) {

			response.write(chunk);
	
		});

		feed.on('end', function () {

			response.end();
	
		});


	});
});








var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});