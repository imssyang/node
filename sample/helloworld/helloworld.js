#!/usr/local/bin/node
//
// SERVER: node helloworld.js
// CLIENT: curl http://localhost:8124
//


// Example1
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end("Hello, World!\n");
}).listen(8124);

console.log('Server running on 8124');


// Example2
const hostname = '0.0.0.0';
const port = 3003;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

