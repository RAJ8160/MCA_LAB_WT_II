    const http = require('http');
    const fs = require('fs');
    const path = require('path');

    const port = 3000;

    const server = http.createServer((req, res) => {
        let filePath;
        switch (req.url) {
            case '/about':
                filePath = path.join(__dirname, 'about.txt');
                break;
            case '/contact':
                filePath = path.join(__dirname, 'contact.txt');
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('404 Not Found');
                return;
        }

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${filePath}:`, err);
                res.File(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    });

    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });