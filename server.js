var http = require('http');
var express = require('express');
var Connection = require('tedious').Connection; 

var app = express();
app.listen(process.env.PORT || 8000);

/*
var config = {  
	userName: 'yourusername',  
        password: 'yourpassword',  
        server: 'yourserver.database.windows.net',  
        // If you are on Microsoft Azure, you need this:  
        options: {encrypt: true, database: 'AdventureWorks'}  
};  

var connection = new Connection(config);  

connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
        console.log("Connected");  
    });
*/

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
