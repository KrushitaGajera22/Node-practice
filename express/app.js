var express = require('express');
var bodyParser = require('body-parser'); //in real life we use nodemailer if someone contact us then it redirect an mail to email address so that one will be notified about it. 
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
/* it displays the url we run after '/assets'  
app.use('/assets', function(req, res, next){
    console.run(req.url)
    next();
})*/
// below is done using in built middleware
app.use('/assets', express.static('assets'));   //middleware or static files like images or styles files

app.get('/', function(req, res){
    res.render('index');  // we use render while using ejs or views
    // res.send('hello')    for sending just a string
    // res.sendFile(__dirname + 'contact.html');    for sending whole file we use this syntax
});

app.get('/contact', function(req, res){
    res.render('contact', {qs: req.query});
});

//Handling post requests
app.post('/contact', urlencodedParser, function(req, res){
    console.log(req.body); // it prints query string into terminal if we use req.query below in data
    res.render('contact-success', {data : req.body});
});

//with the help of ejs templates
app.get('/profile/:name', function(req, res){
    var data = {age: 27, job: 'professor', hobbies: ['Eating', 'Travelling', 'Singing']};
    res.render('profile', {person: req.params.name, data: data});
})

/*
it is use for dynamic string
app.get('/profile/:name', function(req, res){
    res.send('You requested to see the profile with name  of ' + req.params.name);
});*/

app.listen(3000);