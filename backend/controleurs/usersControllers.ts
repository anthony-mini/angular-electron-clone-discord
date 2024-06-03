import { Request, Response, NextFunction } from 'express';
import express = require('express');
import { createUser, getUser, getAllUsers } from '../models/users';

const router = express.Router();

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  const { name, password } = req.body as {
    name: string;
    password: string;
  };
  createUser(name, password)
    .then((user) => res.json(user))
    .catch(next);
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  const { name, password } = req.body as {
    name: string;
    password: string;
  };
  getUser(name)
    .then((user) => {
      if (user && user.password === password) {
        res.json({ message: 'Logged in successfully' });
      } else {
        res.status(401).json({ message: 'Invalid name or password' });
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
