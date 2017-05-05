var fs = require('fs');
var zlib = require('zlib');

// Compress the file input.txt to input.text.gz
fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'));

console.log('File Compressed.');
console.log('Program Ended.');