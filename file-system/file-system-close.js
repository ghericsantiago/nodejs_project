var fs = require('fs');
var buf = new Buffer(1024);
var file = 'input.txt';
console.log('Going to open an existing file');
fs.open(file, 'r+', function(err, fd){
	if(err)
	{
		return console.log(err);
	}
	console.log('File opened successfully!');
	console.log('Attempting to read the file');

	fs.read(fd, buf, 0 , buf.length, 0 ,function(err, bytes){
		if(err)
		{
			return console.log(err);
		}

		// Print only read bytes to avoid junk
		if(bytes > 0)
		{
			console.log(buf.slice(0, bytes).toString());
		}

		// Close the opened file
		fs.close(fd, function(err){
			if(err)
			{
				return console.log(err);
			}
			console.log('File successfully Closed.');
		})

	});

});