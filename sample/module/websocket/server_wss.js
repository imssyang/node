const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

const server = https.createServer({
  cert: fs.readFileSync('./ssl/cert.pem'),
  key: fs.readFileSync('./ssl/key.pem')
});
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('C: %s', message);
  });

  ws.send('Hi!');
});

server.listen(8787);
