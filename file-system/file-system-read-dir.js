var fs = require('fs');

console.log('Attempting to read directory /tmp');
fs.readdir('/tmp', function(err, files){
	
	if(err)
	{
		return console.log(err);
	}

	files.forEach( function(file){
		console.log(file);
	});
})