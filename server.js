var http = require('http');
var express = require('express');
var t = require('tedious');
var Connection = require('tedious').Connection; 

var app = express();
app.listen(process.env.PORT || 8000);




var config = {  
	userName: 'jasfour@kugar',  
        password: 'Eugene12345',  
        server: 'kugar.database.windows.net',  
        // If you are on Microsoft Azure, you need this:  
        options: {encrypt: true, database: 'RX'}  
};  

var profs =  "";
var postings = "";

 var connection = new Connection(config);  

    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.  
        console.log("Connected");  
        
    });  

    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
    
    function executeStatement(query) {  
        request = new Request(query, function(err) {  
        if (err) {  
            console.log(err);}  
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            profs = profs + "\n" + result;
            console.log(result);  
            result ="";  
        });  

        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
       
        });  
        connection.execSql(request);  
    }
    
app.get('/listProfs', function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	 executeStatement("SELECT * FROM professor;"); 
    res.end( profs );
    profs = "";
})

//query example
app.get('/listPostings', function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
    executeStatement("SELECT r.title, r.duration, r.posting, r.deadline, r.position,"+
    	"r.yearA, p.firstN, p.lastN, p.email, p.link, d.dname FROM research r, professor p,"+
    	" department d WHERE p.profkey = r.profkey AND d.dkey = p.hdkey;"); 
    res.end( profs );
    profs = "";
})

//query the database here
app.get('/listPd:id', function (req, res) {
   // First read existing users.
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   executeStatement("SELECT r.title, r.duration, r.posting, r.deadline, r.position, "+
   	   "r.yearA, p.firstN, p.lastN, p.email, p.link, d.dname FROM research r, professor p,"+
   	   " department d WHERE p.profkey = r.profkey AND d.dkey = p.hdkey AND d.dkey="+ req.params.id + ";"); 
   res.end( profs );
   profs = "";
})
