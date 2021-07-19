const WebSocket = require('ws');

const ws = new WebSocket('ws://www.imssyang.com:8787');

ws.on('open', function open() {
  ws.send('Hi!');
});

ws.on('message', function incoming(data) {
  console.log('S: %s', data);
});
