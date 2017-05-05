var fs = require('fs');

console.log('Attempting to delete folder');
fs.rmdir('/tmp/1',function(err){
	if(err)
	{
		return console.log(err);
	}

	console.log('Directory successfully deleted');
	console.log('Attempting to read dir /tmp');

	fs.readdir('/tmp', function(err, files){

		if(err)
		{
			return console.log(err);
		}

		files.forEach(function(file){
			console.log(file);
		});

	});
	
});