import pool from '../database';

interface messages {
  id: number;
  user_id: number;
  content: string;
  created_at: Date;
}

export const createMessage = async (
  user_id: number,
  content: string
): Promise<messages> => {
  const result = (await pool.query(
    'INSERT INTO messages (user_id, content) VALUES ($1, $2) RETURNING *',
    [user_id, content]
  )) as { rows: messages[] };
  return result.rows[0];
};

export const getMessagesForConversations = async (
  user_id: number
): Promise<messages[]> => {
  const result = (await pool.query(
    'SELECT * FROM messages WHERE user_id = $1',
    [user_id]
  )) as { rows: messages[] };
  return result.rows;
};
