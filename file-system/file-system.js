var fs = require('fs');

// Asyncronous Read
fs.readFile('input.txt', function(err, data){
	if(err)
	{
		return console.log(err);
	}

	console.log('Asyncronous read: ' + data.toString());
});

// Syncronous Read
var data = fs.readFileSync('input.txt');
console.log('Syncronous read: ' + data.toString());

console.log('Program Ended');