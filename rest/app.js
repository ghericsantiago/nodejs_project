var express  = require('express');
var app = express();
var fs = require('fs');

var user = {
	"user4" : {
	  "name" : "mohit",
	  "password" : "password4",
	  "profession" : "teacher",
	  "id": 4
	}
};

app.get('/listUsers',  function(req, res){
	fs.readFile( __dirname + '/' + 'users.json', 'utf8', function(err, data){
		console.log( data );
		res.end(data);
	});
});

app.get('/addUserForm', function(req, res){
	fs.readFile( __dirname + '/' + 'addUser.htm', function(err, data){
		console.log('Add User Request is recieved');
		res.end( data );
	});
});

app.get('/deleteUserForm', function(req, res){
	fs.readFile( __dirname + '/' + 'deleteUser.htm', function(err, data){
		console.log('Delete User Request is recieved');
		res.end( data );
	});
});


app.get('/:id', function(req, res){
	// first get all users
	fs.readFile( __dirname + '/users.json', function(err, data){
		data = JSON.parse(data);
		user = data['user' + req.params.id];
		console.log( user );
		res.end( JSON.stringify(user) );
	})
});

app.post('/addUser', function(req, res){
	// First read existing users.
	fs.readFile( __dirname + '/users.json', 'utf8', function(err, data){
		data = JSON.parse( data );
		data['user4'] = user ['user4'];
		console.log(data);
		res.end( JSON.stringify(data) );
	})
});

app.delete('/deleteUser', function(req, res){
	console.log('Attempting to delete user 2');
	// First read the existing users.
	fs.readFile( __dirname + '/users.json', function(err, data){
		data = JSON.parse( data );
		delete data['user' + 2];
		console.log(data);
		res.end( JSON.stringify(data) );
	})
});

var server = app.listen(8484, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});