var http = require('http');
const echo = require('./libraries/echo.js');

// console.log(echo());

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end('Hello World' + echo() + '\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');