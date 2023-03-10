var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made :' + req.url);
    if(req.url === '/Home' || req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if(req.url === '/Contact-us'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/Contact.html').pipe(res);
    }
    else if(req.url === '/api/app'){
        var app = [{name : 'mahek', age : '24'}, {name : 'heena', age : '26'}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(app));
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');