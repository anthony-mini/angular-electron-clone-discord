import { Server } from 'socket.io';

function main() {
  const io = new Server({
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('New conneciton', socket.id);
    socket.on('message', (message) => {
      console.log('A user send message', message);
      io.emit('message', message);
    });
  });

  io.listen(3000);

  console.log('Server is running on port 3000');
}

main();
