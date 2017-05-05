var fs = require('fs');

console.log('Attempting to delete file');

fs.unlink('input.txt', function(err){
	if(err)
	{
		return console.log(err);
	}

	console.log('File deleted successfully!');
});
