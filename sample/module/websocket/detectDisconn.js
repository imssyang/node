
How to detect and close broken connections?
Sometimes the link between the server and the client can be interrupted in a way that keeps both the server and the client unaware of the broken state of the connection (e.g. when pulling the cord).

In these cases ping messages can be used as a means to verify that the remote endpoint is still responsive.

const WebSocket = require('ws');

function noop() {}

function heartbeat() {
  this.isAlive = true;
}

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.isAlive = true;
  ws.on('pong', heartbeat);
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping(noop);
  });
}, 30000);

wss.on('close', function close() {
  clearInterval(interval);
});
Pong messages are automatically sent in response to ping messages as required by the spec.

Just like the server example above your clients might as well lose connection without knowing it. You might want to add a ping listener on your clients to prevent that. A simple implementation would be:

const WebSocket = require('ws');

function heartbeat() {
  clearTimeout(this.pingTimeout);

  // Use `WebSocket#terminate()`, which immediately destroys the connection,
  // instead of `WebSocket#close()`, which waits for the close timer.
  // Delay should be equal to the interval at which your server
  // sends out pings plus a conservative assumption of the latency.
  this.pingTimeout = setTimeout(() => {
    this.terminate();
  }, 30000 + 1000);
}

const client = new WebSocket('wss://echo.websocket.org/');

client.on('open', heartbeat);
client.on('ping', heartbeat);
client.on('close', function clear() {
  clearTimeout(this.pingTimeout);
});
