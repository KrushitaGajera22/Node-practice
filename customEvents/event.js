var events = require('events');

class Person extends events.EventEmitter{
    constructor(name){
        super();
        this.name = name;
    }
}

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');
var People = [james, mary, ryu];

People.forEach(function(person){
    person.on('speak', function(msg){
        console.log(person.name + ' said: ' +msg);
    });
});

james.emit('speak', 'hello');
mary.emit("speak", 'good morning!');