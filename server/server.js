const express = require('express');
const { addTask, getTasks } = require('./db');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// API route to get all tasks
app.get('/api/tasks', (req, res) => {
  getTasks((tasks) => {
    res.json(tasks); // Send back the list of tasks as JSON
  });
});

// API route to create a new task
app.post('/api/tasks', (req, res) => {
  const { TASK_NAME, TASK_DESC, TASK_FULL_DESC } = req.body;

  // Validate incoming data (you can add more validation here)
  if (!TASK_NAME || !TASK_DESC || !TASK_FULL_DESC) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Insert the task into the database using the correct function
  addTask(TASK_NAME, TASK_DESC, TASK_FULL_DESC, (taskId) => {
    if (taskId) {
      res.status(201).json({ TASK_ID: taskId, TASK_NAME, TASK_DESC, TASK_FULL_DESC });
    } else {
      res.status(500).json({ error: 'Failed to add task' });
    }
  });
});

// Start the Express server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
