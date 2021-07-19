const WebSocket = require('ws');

const ws1 = new WebSocket('ws://www.imssyang.com:8787/foo');
const ws2 = new WebSocket('ws://www.imssyang.com:8787/bar');

ws1.on('open', function open() {
  ws1.send('Hi from Foo!');
});

ws1.on('message', function incoming(data) {
  console.log('S: %s', data);
});

ws2.on('open', function open() {
  ws2.send('Hi from Bar!');
});

ws2.on('message', function incoming(data) {
  console.log('S: %s', data);
});
