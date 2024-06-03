import pool from '../database';

interface User {
  id: number;
  username: string;
  password: string;
}

interface QueryResult {
  rows: User[];
}

export const createUser = async (
  username: string,
  password: string
): Promise<User> => {
  const result = (await pool.query(
    'INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *',
    [username, password]
  )) as QueryResult;
  return result.rows[0];
};

export const getUser = async (username: string): Promise<User> => {
  const result = (await pool.query('SELECT * FROM users WHERE name = $1', [
    username,
  ])) as QueryResult;
  return result.rows[0];
};

export const getAllUsers = async (): Promise<User[]> => {
  const result = (await pool.query('SELECT * FROM users')) as QueryResult;
  return result.rows;
};
