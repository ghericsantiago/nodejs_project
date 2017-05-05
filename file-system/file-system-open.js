var fs = require('fs');
var events = require('events');
var file = 'input.txt';
console.log('Opening File: ' + file);
fs.open(file,'r+', function(err, data){
	if(err)
	{
		return console.log(err);
	}
	console.log(file + ' Open Succesfully.');
});
console.log('Program Ended.');