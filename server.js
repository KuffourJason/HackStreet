var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

app.get('/', function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end( "home page" );
})

//query example
app.get('/listUsers', function (req, res) {

})

//query the database here
app.get('/:id', function (req, res) {
   // First read existing users.
   
})

 server.listen(process.env.PORT || 8080, function () { // fifth and final change 
 });