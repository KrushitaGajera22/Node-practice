const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('event', function Listener1(){
    console.log('Hellooooo! First Listener');
});

eventEmitter.on('event', function Listener2(a, b){
    console.log('sum of two numbers is ' +(a + b));
});

eventEmitter.on('event', function Listener3(a, b, c){
    console.log('events with parameters ' + a + ', ' + b + ' and ' + c);
});

eventEmitter.emit('event', 2, 6, 9);