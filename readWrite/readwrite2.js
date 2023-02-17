var fs = require('fs');

// it is used in asynchronous 
fs.readFile('read.txt', 'utf8', function(err, data){
   fs.writeFile('writeMe.txt', data, function(err, data){});
});

//fs.unlink('write.txt');  This is used for deleting any file.