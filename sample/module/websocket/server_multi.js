const http = require('http');
const WebSocket = require('ws');
const url = require('url');

const server = http.createServer();
const wss1 = new WebSocket.Server({ noServer: true });
const wss2 = new WebSocket.Server({ noServer: true });

wss1.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('FOO: %s', message);
  });

  ws.send('Hi, Foo!');
});

wss2.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('BAR: %s', message);
  });

  ws.send('Hi, Bar!');
});

server.on('upgrade', function upgrade(request, socket, head) {
  const pathname = url.parse(request.url).pathname;

  if (pathname === '/foo') {
    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request);
    });
  } else if (pathname === '/bar') {
    wss2.handleUpgrade(request, socket, head, function done(ws) {
      wss2.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(8787);
