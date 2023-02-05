const socketIO = require('socket.io');
const { server, port } = require('./server');

// create socket.io server
const io = socketIO(server);


// listen to socket.io server
io.on('connection', socket => {
    console.log('Client connected');
    // TODO: add socket.io logic

    socket.on('disconnect', () => console.log('Client disconnected'));
});


// listen to server
server.listen(port);