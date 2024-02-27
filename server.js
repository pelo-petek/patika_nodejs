const http = require('http');

const server = http.createServer((req, res, )=>{
    let url = req.url;
    
    if(url=='/home' || url =='/'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h2>welcome to home page</h2>")
    }
    else if(url =='/about'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h2>welcome to about page</h2>")
    }
    else if(url =='/contact'){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write("<h2>welcome to contact page</h2>")
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'});
        res.write("<h2>page not found</h2>")
    }

    res.end();
})
server.listen(5000, ()=>{
    console.log("the server is starting on 5000 port");
})