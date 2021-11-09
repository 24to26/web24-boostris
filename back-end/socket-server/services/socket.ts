import { Server } from 'socket.io';

export const initSocket = (httpServer) => {
  const io = new Server(httpServer, {
    /* options */
    cors: {
      origin: '*',
    },
  });
  const nsp = io.of('/ad');

  nsp.on('connection', (socket) => {
    console.log(socket.id);
    console.log('asdf');
    socket.on('playerMove', (player) => {});

    socket.on('user', (user) => {});

    socket.on('chat', (msg) => {});

    socket.on('disconnect', () => {});
  });
};
