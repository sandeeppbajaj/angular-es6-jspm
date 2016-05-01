var express = require('express'),
    server  = express(),
    port    = 8086;

server.use(express.static(__dirname + '/../public'));
server.listen(port, function () {
    console.log('Server listening at port: ' + port);
});
