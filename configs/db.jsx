// configs/db.jsx
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from './schema';


const connectionString = process.env.NEXT_PUBLIC_DB_CONNECTION_STRING;

if (!connectionString) {
  throw new Error("Database connection string is missing!");
}

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });