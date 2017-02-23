var http = require('http');
var express = require('express');

var app = express();
app.listen(process.env.PORT || 8000);

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
