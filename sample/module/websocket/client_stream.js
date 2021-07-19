const WebSocket = require('ws');

const ws = new WebSocket('ws://www.imssyang.com:8787');

const duplex = WebSocket.createWebSocketStream(ws, { encoding: 'utf8' });

duplex.pipe(process.stdout);
process.stdin.pipe(duplex);
