const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server, Socket } = require("socket.io");
const io = new Server(server);
const users = {}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',  (socket) =>{
    socket.on('newuser',name =>{
        users[socket.id] = name
        socket.broadcast.emit('user-connected',name)
    })
    
    socket.on('sendchat',message =>{
        socket.broadcast.emit('chatmessdata',{message: message, name: users[socket.id]})
    })
})

server.listen(3000, () => {
  console.log('listening on *:3000');
});