const http = require('http');
const maxBodySize = 1024 * 1024; // 1MB

const server = http.createServer((req, res) => {
  let body = [];
  let bodySize = 0;
  req.on('data', chunk => {
    bodySize += chunk.length;
    if (bodySize > maxBodySize) {
      res.writeHead(413, { 'Content-Type': 'text/plain' });
      res.end('Request Entity Too Large');
      return;
    }
    body.push(chunk);
  });
  req.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    res.writeHead(200);
    res.end('ok');
  });
});

server.listen(3000);