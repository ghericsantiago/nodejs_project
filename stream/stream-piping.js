var fs = require('fs');

var streamReader =  new fs.createReadStream('input.txt');
var streamWriter = new fs.createWriteStream('output.txt');

streamReader.pipe(streamWriter);
console.log('Program Ended.');