var fs = require('fs');
console.log('Attempting to create directory /tmp/test');
fs.mkdir('/tmp/test', function(err){
	if(err)
	{
		return console.log(err);
	}

	console.log('Directory created successfully.');
})