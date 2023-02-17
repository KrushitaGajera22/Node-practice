var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made :' + req.url);
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var myObj = {
        name : 'Mahek' ,
        job : 'Professor',
        age : '24'
    };
    res.end(JSON.stringify(myObj));  //toString() method can also be used to convert obj into string format.
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');