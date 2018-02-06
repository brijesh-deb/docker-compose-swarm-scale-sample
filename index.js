var http = require('http');
var os = require('os');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>Hostname is ${os.hostname()}</h1>`);
}).listen(8080);