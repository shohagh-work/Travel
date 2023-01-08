const http = require('http');
const { url } = require('inspector');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello');
        res.write(' programmers');
        res.end();
    } else if (req.url === '/hi') {
        res.write('Hi Shohagh');
        res.end();
    } else {
        res.write('No Found');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');
