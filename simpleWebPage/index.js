//import express and ejs 
var express = require('express')
var ejs = require('ejs')

//create object of express
var app = express();

//location of folder to access the static content. 
app.use(express.static('public'));
//set view engine to ejs
app.set('view engine','ejs');

//define port number
app.listen(8080);

//create server running at address - localhost:8080
//to start the server, open terminal, type - node index.js
app.get('/',function(req,res){
    //res.send("Hello");
    res.render('pages/index');
});

app.get('/nature', function(req, res){
    res.render('pages/nature');
});

app.get('/the_world', function(req,res){
    res.render('pages/the_world');
});

app.get('/about',function(req,res){
    res.render('pages/about');
});

app.get('/contact',function(req,res){
    res.render('pages/contact');
});

