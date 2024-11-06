import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open the database connection
export async function openDb() {
  return open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

// Function to initialize the database
export async function initializeDb() {
  const db = await openDb();
  
  // Create the tasks table with the specified fields
  await db.exec(`
    CREATE TABLE IF NOT EXISTS tasks (
      task_id INTEGER NOT NULL,
      task_name TEXT NOT NULL,
      task_description TEXT,
      task_statement TEXT,
      task_points INTEGER,
      PRIMARY KEY (task_id, task_name)
    )
  `);

  await db.close();
}