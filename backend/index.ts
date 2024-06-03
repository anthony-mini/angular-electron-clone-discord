import { Server } from 'socket.io';
import { Client } from 'pg';

import express = require('express');

import userControllers from './controleurs/usersControllers';

async function main(): Promise<void> {
  const app = express();
  app.use(express.json());
  app.use('/users', userControllers);

  const io = new Server({
    cors: {
      origin: '*',
    },
  });

  const client = new Client({
    user: 'myusername',
    host: 'localhost',
    database: 'local-clone-discord',
    password: 'myuserpassword',
    port: 5432,
  });

  // Connexion à la base de données
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (err: any) {
    console.error('Connection error', err.stack);
  }

  io.on('connection', (socket) => {
    console.log('New conneciton', socket.id);
    socket.on('message', (message) => {
      console.log('A user send message', message);
      io.emit('message', message);
    });
  });

  io.listen(3000);
  app.listen(5500, () => {
    console.log('Server is running on port 3000');
  });

  console.log('Server is running on port 5500');
}

main().catch((err) => {
  console.error('An error occurred:', err);
});
