var fs = require('fs');
var buf = new Buffer(1024);

console.log('Attempting to open an exsisting file');
fs.open('input.txt', 'r+', function(err, fd){

	if(err)
	{
		return console.log(err);
	}

	console.log('File open successfully');
	console.log('Attempting to truncate the file after 10 bytes');

	fs.ftruncate(fd, 10, function(err){
		if(err)
		{
			return console.log(err);
		}

		console.log('File truncated successfully.');
		console.log('Going to read the same file');

		fs.read(fd, buf, 0, buf.length, 0 , function(err, bytes){
			if(err)
			{
				return console.log(err);
			}

			// Print only read bytes
			if(bytes > 0)
			{
				console.log(buf.slice(0, bytes).toString());
			}

			// Close the opened file
			console.log('Attempting to close the file');
			fs.close(fd, function(err){
				if(err)
				{
					return console.log(err);
				}

				console.log('successfully Closed the file');
			})
		})

	})

});