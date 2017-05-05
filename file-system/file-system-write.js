var fs = require('fs');
var file = 'input-write.txt';
var message = 'Simply Easy Learning';

console.log('Going to write into file!');
fs.writeFile(file, message , function(err, data){
	if(err)
	{
		return console.log(err);
	}

	console.log("Data written successfully");
	console.log("Let's read newly written data");
	fs.readFile(file, function(err, data){
		if(err)
		{
			return console.log(err);
		}

		console.log("Asyncronous read: " +data.toString());
	})
});