var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 1337, "hfest.azurewebsites.net", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})

app.get('/', function (req, res) {

	res.end( "home page" );
})

//query example
app.get('/listUsers', function (req, res) {

})

//query the database here
app.get('/:id', function (req, res) {
   // First read existing users.
   
})