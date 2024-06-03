import { Request, Response, NextFunction } from 'express';
import express = require('express');
import { createUser, getUser, getAllUsers } from '../models/users';

const router = express.Router();

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as {
    username: string;
    password: string;
  };
  createUser(username, password)
    .then((user) => res.json(user))
    .catch(next);
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body as {
    username: string;
    password: string;
  };
  getUser(username)
    .then((user) => {
      if (user && user.password === password) {
        res.json({ message: 'Logged in successfully' });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    })
    .catch(next);
});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
  getAllUsers()
    .then((users) => res.json(users))
    .catch(next);
});
export default router;
