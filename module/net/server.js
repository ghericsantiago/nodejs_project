var net  = require('net');
var server = net.createServer(function(connection){
	console.log('client connected');

	connection.on('end', function(){
		console.log('client disconnected');
	});

	connection.write('Hello World');
	connection.pipe(connection);
});


server.listen(8282, function(){
	console.log('server is listening to 8282');
});