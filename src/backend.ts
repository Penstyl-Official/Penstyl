import express from 'express';
import cors from 'cors';
import { openDb, initializeDb } from './database';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Initialize the database
initializeDb();

// Endpoint to add a new task
app.post('/api/tasks', async (req, res) => {
  const { task_id, task_name, task_description, task_statement, task_points } = req.body;
  const db = await openDb();

  try {
    await db.run(
      `INSERT INTO tasks (task_id, task_name, task_description, task_statement, task_points)
       VALUES (?, ?, ?, ?, ?)`,
      task_id, task_name, task_description, task_statement, task_points
    );
    res.json({ message: 'Task added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add task' });
  } finally {
    await db.close();
  }
});

// Endpoint to get all tasks
app.get('/api/tasks', async (req, res) => {
  const db = await openDb();

  try {
    const tasks = await db.all(`SELECT * FROM tasks`);
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  } finally {
    await db.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});