/*console.log( '__filename' );
console.log( __filename );

console.log( '__dirname' );
console.log( __dirname );


console.log( 'setTimeout(cb,ms)' );
function printHello(){
	console.log('Hello World');
};
setTimeout(printHello, 2000);

*/
console.log( 'clearTimeout(t)' );
function printHello(){
	console.log('Hello World');
};
var t = setTimeout(printHello, 2000);
clearTimeout(t);