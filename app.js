var server = require('express')();
var http = require('http').createServer(server);

server.get('/', function(req, res) {
	res.send("Hello");
});

http.listen(3000, function() {
	console.log("Hi Anna!!!");
})