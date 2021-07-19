//The remote IP address can be obtained from the raw socket.
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8787 });

wss.on('connection', function connection(ws, req) {
  const ip1 = req.socket.remoteAddress;
  console.log(ip1);

  const xf = req.headers['x-forwarded-for'];
  if (null != xf) {
    const ip2 = xf.split(',')[0].trim(); //server runs behind a proxy like NGINX
    console.log(ip2);
  }
});

