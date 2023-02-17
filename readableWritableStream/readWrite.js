var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/read.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/write.txt');

myReadStream.on('data', function(chunk){
    console.log('New chunk arrived : ');
    myWriteStream.write(chunk);    // myReadStream.pipe(myWriteStream); it is used in piping.
})