import pg from 'pg';

const { Client } = pg;

let clientInstance = null;

export const getDbClient = () => {
  if (clientInstance) {
    // Return the existing instance if it already exists
    return clientInstance;
  }
  
  // Otherwise, create a new client instance
  clientInstance = new Client({
    user: 'user',
    password: 'test1234',
    host: '127.0.0.1',
    port: 5432,
    database: 'user',
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

