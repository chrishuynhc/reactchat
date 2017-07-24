var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

io.on('connection', function(socket){
	console.log('We have a connection');
	socket.on('new message', function(msg){
		console.log(msg);
		io.emit('receive-message', msg);
	})
});

server.listen('3000', function(){
	console.log('We are connected');
})