var fs = require('fs');
var zlib = require('zlib');

// Decompress the file input.txt.gz to input2.txt
fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input-decompressed.txt'));

console.log('File Decompressed');
console.log('Program Ended.');