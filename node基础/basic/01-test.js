const http = require('http');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'})
    res.end('hello！/n')
}).listen(3000, '127.0.0.1')
console.log('Sever running at http://127.0.0.1:3000/');
