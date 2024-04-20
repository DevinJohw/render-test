import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, {
    'Content-Tye': 'text/html; charset=utf-8',
  });
  res.end('<h1>Hello World</h1>');
});

server.listen(8080);
