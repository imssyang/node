const WebSocket = require('ws');

const ws = new WebSocket.Server({ port: 8787 });

ws.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('C: %s', message);
  });

  ws.send('Hi!');
});
