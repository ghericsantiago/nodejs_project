var express = require('express');
var app = express();
var fs = require('fs');


// This will enabled to get the POST data
// Create application/x-www-form-urlencoded parser
// ###
var bodyParser = require('body-parser');
var ulrencodedParser = bodyParser.urlencoded({extended: false });
// ###

// This will enabled to upload data
// ####
var multer  = require('multer');

// This will get the file
app.use( multer({ dest: './tmp/' }).single('file') );
// ####

app.use(express.static('public'));

app.get('/', function(request, response){
	console.log(request);
	console.log('Got a GET request for the homepage');
	response.send('Hello GET');
});

app.get('/index-get.htm', function(request, response){
	response.sendFile( __dirname + '/' + 'index-get.htm');
});

app.get('/index-post.htm', function(request, response){
	response.sendFile( __dirname + '/' + 'index-post.htm');
});

app.get('/index-file-upload.htm', function(request, response){
	response.sendFile( __dirname + '/' + 'index-file-upload.htm');
});

app.get('/process_get', function(request, response){
	// Prepare output in JSON foemat
	jsonResponse = {
		first_name: request.query.first_name,
		last_name: request.query.last_name
	};

	console.log(jsonResponse);
	response.send(JSON.stringify(jsonResponse));
});

app.post('/process_post', ulrencodedParser ,function(request, response){

	jsonResponse = {
		first_name: request.body.first_name,
		last_name: request.body.last_name
	};
	console.log(jsonResponse);
	response.send(JSON.stringify(jsonResponse));
});

app.post('/', function(request, response){
	console.log('Got a POST request for the homepage');
	response.send('Hello POST');
});

app.delete('/del_user', function(request, response){
	console.log('Got a DELETE request for /del)user');
	res.send('Hello DELETE');
})

app.get('/list_user', function(request, response){
	console.log('Got a GET request for /list_user');
	response.send('Page Listing');
});

// This responds a GET request for abcd, abxd, ab123cd, and so on
app.get('/ab*cd', function(request, response){
	console.log('Got a GET request for /ab*cd');
	response.send('Page Pattern Match');
});


app.post('/file_upload', function(req, res){
	
	console.log(req.file.originalname);
	console.log(req.file.path);
	console.log(req.file.type);
	var file = __dirname + "/public/images/" + req.file.originalname;

	fs.readFile( req.file.path, function (err, data) {
	  fs.writeFile(file, data, function (err) {
	    if( err )
	    {
	        console.log( err );
	    }
	    else
	    {
		   response = {
		      message:'File uploaded successfully',
		      filename:req.file.originalname
		   };
		}
	     console.log( response );
	     res.end( JSON.stringify( response ) );
	  });
	});
});

var server = app.listen(8484, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});
