// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected()
{
	console.log('connection sucessful.');

	// Fire the data_recieved event
	eventEmitter.emit('data_recieved');
};

// Bind the connection event with handler
eventEmitter.on('connection', connectHandler);

// Bind the data_recieved event with the anonymous function
eventEmitter.on('data_recieved', function(){
	console.log('data recieved sucessfully.');
});


// Fire the connection event
eventEmitter.emit('connection');

console.log('Program Ended.');