
const http =require('http');
const url = require('url');

function router(req,res){
    let baseURI = url.parse(req.url,true);
    console.log('url ',baseURI);
    //console.log('method ',req.log);
    res.writeHead(200, {'Content-type':'text/html'});
    res.end('<h2>Hello to the router</h2>');
}

http.createServer(router).listen(3000,() =>{
    console.log('server running on port 3000')
    
});