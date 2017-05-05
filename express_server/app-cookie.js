var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', function(req, res){
	console.log( req.cookies );
	res.end();
});

var server = app.listen(8484, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});