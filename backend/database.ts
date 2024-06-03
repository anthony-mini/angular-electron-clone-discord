import { Pool } from 'pg';

const pool = new Pool({
  user: 'myusername',
  host: 'localhost',
  database: 'local-clone-discord',
  password: 'myuserpassword',
  port: 5432,
});

pool.on('connect', () => {
  console.log('Connected to the database');
});

export default pool;
