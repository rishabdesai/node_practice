const express= require('express');

const app = express();

app.get('/', function(req,res){
    //console.log(req);
    res.send("<h1>Hello...</h1>");
})

app.get('/about', function(req,res){
    //console.log(req);
    res.send("<h1>About page...</h1>");
})

app.get('/contact', function(req,res){
    //console.log(req);
    res.send("<h1>contact page...</h1>");
})

app.listen(3000, function(){
    console.log("server started on port 3000");
});

