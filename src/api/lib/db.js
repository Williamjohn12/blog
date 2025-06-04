import pg from 'pg';
import { DBSTRING } from '../../util/config.js';


const { Client } = pg;

let clientInstance = null;
const { Pool } = pg;

export const getDbClient = () => {
  if (clientInstance) {
    // Return the existing instance if it already exists
    return clientInstance;
  }
  
  // Otherwise, create a new client instance
  /*clientInstance = new Client({
    connectionString: process.env.DB_STRING,
    ssl: {
    rejectUnauthorized: false
  }
  }); */
  clientInstance = new Pool({
    connectionString: DBSTRING,
    ssl: {
      rejectUnauthorized: false
    }
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

