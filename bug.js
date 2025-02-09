const http = require('http');

const server = http.createServer((req, res) => {
  // The following line will cause an error if the request is too large
  const body = [];
  req.on('data', chunk => body.push(chunk));
  req.on('end', () => {
    const bodyString = Buffer.concat(body).toString();
    res.writeHead(200);
    res.end('ok');
  });
});

server.listen(3000);