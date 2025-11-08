const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;
const publicDir = path.join(__dirname, 'public');

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} by method ${req.method}`);

  if (req.method === 'GET') {
    let fileUrl = req.url === '/' ? '/index.html' : req.url;
    const filePath = path.resolve(publicDir + fileUrl);
    const ext = path.extname(filePath);

    if (ext === '.html') {
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(`<h1>Error 404: ${fileUrl} not found</h1>`);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(filePath).pipe(res);
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(`<h1>Error 404: ${fileUrl} is not an HTML file</h1>`);
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`<h1>Error 404: ${req.method} not supported</h1>`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
