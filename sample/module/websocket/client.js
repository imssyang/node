const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8787');

ws.on('open', function open() {
  ws.send('Hi!');
});

ws.on('message', function incoming(data) {
  console.log('S: %s', data);
});
