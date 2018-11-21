const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Node Basic Server</title></head>');
  res.write('<body><h1>A basic Node server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);