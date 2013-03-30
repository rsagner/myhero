var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World! - by Rikard');
});

app.get('/echo', function(request, response) {
  response.send('Echo! - by Rikard');
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});