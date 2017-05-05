var fs = require('fs');
var file = 'input.txt';
console.log('Going to get file info of '+file+'!');
fs.stat(file,function(err,stats){
	if(err)
	{
		return console.log(err);
	}
	console.log(stats);
	console.log('Got the file info successfully.');

	// Check the file type
	console.log('isFile? ' + stats.isFile());
	console.log('isDirectory? ' + stats.isDirectory());
});