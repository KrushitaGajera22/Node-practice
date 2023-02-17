const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', function(start, end){
    console.log('numbers started from ' + start + ' to ' + end);
});

eventEmitter.emit('start', 5, 100);