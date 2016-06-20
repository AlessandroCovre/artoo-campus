console.log('Hello Word from a ' + process.env.NODE_ENV + ' enviroment');

var myModule = require("./exercises/myModule")({robot: ' Pissio !'});

console.log(myModule.sayHello(' Alessandro'));

/*var http = require('http');

var server = http.createServer(function (req, res){
    res.write('<h1>Hello world from my first server</h1>');
    res.end();
});

server.listen (8080, '0.0.0.0', function () {
   console.log('My Server is up and running') 
});
*/
var express = require("express");

var app = express();

app.get('/', function (req, res){
    //console.log(req);
    //res.send('<h1>Hello world from my second server</h1>');
    res.redirect('/users');
});


app.get('/reverse/:string', function (req, res){
    var input = req.params.string;
    var output = input.split('').reverse('').join('');
    if(req.query.uppercase !== 'false') output = output.toUpperCase();
    if(req.query.spaced) output = output.split('').join(' ');
    res.send(output);
});
 // Definisco users richiamando il router
var users = require("./exercises/users");
app.use('/users', users.router);

var items = require("./exercises/items")
app.use('/items', items.router);

app.listen('8080', function (){
    console.log('My server is up and running');
});