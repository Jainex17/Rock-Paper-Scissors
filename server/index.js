const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Working...');
});

const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log('socketId: ' + socket.id);
  

  socket.on('disconnect', () => {
    console.log('a user disconnected');
  });

  socket.on('SendMessage', (message) => {
    console.log(message);
    socket.broadcast.emit('ReceiveMessage', message);
  });
});

server.listen(3001, () => {
  console.log('server listening on port 3001');
});