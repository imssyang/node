const WebSocket = require('ws');

const ws = new WebSocket('wss://www.imssyang.com:8787', { rejectUnauthorized: false });

ws.on('open', function open() {
  ws.send('Hi!');
});

ws.on('message', function incoming(data) {
  console.log('S: %s', data);
});
