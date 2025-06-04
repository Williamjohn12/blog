import dotenv from 'dotenv';

dotenv.config();

export const DBSTRING = process.env.DB_STRING;
export const HOST = process.env.HOST || 'localhost';