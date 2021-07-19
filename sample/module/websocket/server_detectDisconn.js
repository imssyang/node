const WebSocket = require('ws');

function noop() {}

function heartbeat() {
  this.isAlive = true;
  console.log('HEART: %s', this.isAlive);
}

const wss = new WebSocket.Server({ port: 8787 });

wss.on('connection', function connection(ws) {
  ws.isAlive = true;
  ws.on('pong', heartbeat);
  console.log('CONN: %j', ws);
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) {
      console.log('Terminate: %j', interval);
      return ws.terminate();
    }

    ws.isAlive = false;
    ws.ping(noop);
    console.log('Interval: %j', ws);
  });
}, 30000);

wss.on('close', function close() {
  clearInterval(interval);
  console.log('Close: %j', interval);
});

