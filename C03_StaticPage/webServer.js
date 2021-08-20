
const http =require('http');
const url =require('url');
const fs = require('fs');

function webserver(req,res){
//if route is '/' then load index.html else load requested files.

let baseURI = url.parse(req.url);

let filepath = baseURI.pathname =='/' ? '/index.html' : baseURI.pathname;
console.log(filepath);

//check if requested file is accessible or not
fs.access(filepath, fs.F_OK);
}

http.createServer(webserver).listen(3000,() =>{
    console.log("webserver running on port 3000");
});