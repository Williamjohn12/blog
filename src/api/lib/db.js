import pg from 'pg';
import dotenv from 'dotenv';

const { Client } = pg;

let clientInstance = null;
dotenv.config();

export const getDbClient = () => {
  if (clientInstance) {
    // Return the existing instance if it already exists
    return clientInstance;
  }
  
  // Otherwise, create a new client instance
  clientInstance = new Client({
    connectionString: process.env.DB_STRING
  });

  clientInstance.connect()
    .then(() => {
      console.log('Connected to PostgreSQL');
    })
    .catch((err) => {
      console.error('Error connecting to PostgreSQL:', err.stack);
    });

  return clientInstance;
};

