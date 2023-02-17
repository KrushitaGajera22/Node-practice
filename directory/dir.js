var fs = require('fs');

//fs.mkdirSync('dir2');
//fs.rmdirSync('dir2');

/*
for creating a new directory in asynchronous 
fs.mkdir('dir2', function(){
    fs.readFile('read.txt', 'utf8', function(err, data){
        fs.writeFile('./dir2/write.txt', data, function(err, data){});
     });
});
*/

//for deleting directory
fs.unlink('./dir2/write.txt', function(){
    fs.rmdir('dir2', function(){});
});