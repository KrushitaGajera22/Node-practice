const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('scream', function(){
    console.log('I hear a scream.');
});

eventEmitter.emit('scream');