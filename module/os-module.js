var os = require('os');

console.log('tmpdir()');
console.log(os.tmpdir());

console.log('endianness()');
console.log(os.endianness());

console.log('hostname()');
console.log(os.hostname());

console.log('type() operating system platform');
console.log(os.type());

console.log('arch() operating bit');
console.log(os.arch());

console.log('release() operating system release');
console.log(os.release());

console.log('uptime() system uptime in seconds');
console.log(os.uptime());

console.log('loadavg() Returns an array containing the 1, 5, and 15 minute load average');
console.log(os.loadavg());

console.log('totalmem() Returns the total amount of system memory in bytes.');
console.log(os.totalmem());

console.log('freemem() Returns the amount of free system memory in bytes.');
console.log(os.freemem());

console.log('cpus() Returns an array of objects containing information ');
console.log('about each CPU/core installed: model, speed (in MHz),');
console.log('and times (an object containing the number of milliseconds');
console.log('the CPU/core spent in: user, nice, sys, idle, and irq).');
console.log(os.cpus());

console.log('networkInterfaces() Get a list of network interfaces.');
console.log(os.networkInterfaces());

console.log('os.EOL');
console.log(os.EOL);