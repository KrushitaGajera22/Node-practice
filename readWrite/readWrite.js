var fs = require('fs');

var read = fs.readFileSync('read.txt', 'utf8'); //it is used in synchronous 
fs.writeFileSync('write.txt', read); // synchronous means it does not allow file to go to next command until response is generated from current code

// utf8 is used for converting the data into readable form