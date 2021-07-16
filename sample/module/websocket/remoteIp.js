//The remote IP address can be obtained from the raw socket.
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  const ip = req.socket.remoteAddress;
});

// server runs behind a proxy like NGINX, the de-facto standard is to use the X-Forwarded-For header.
wss.on('connection', function connection(ws, req) {
  const ip = req.headers['x-forwarded-for'].split(',')[0].trim();
});
