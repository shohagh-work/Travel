const x = document.getElementById('output');
function multi(a) {
    x.innerHTML = a ** 8;
}

multi(2);

console.log(5 * 6);

const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
}).listen(8080);
