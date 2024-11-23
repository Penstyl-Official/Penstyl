const sqlite3 = require('sqlite3').verbose();

// Open or create the database
const db = new sqlite3.Database('./tasks.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Create the tasks table if it doesn't exist
db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    TASK_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    TASK_NAME TEXT NOT NULL,
    TASK_DESC TEXT,
    TASK_FULL_DESC TEXT
  );
`);

// Function to insert a task
function addTask(taskName, taskDesc, taskFullDesc, callback) {
  const stmt = db.prepare('INSERT INTO tasks (TASK_NAME, TASK_DESC, TASK_FULL_DESC) VALUES (?, ?, ?)');
  stmt.run(taskName, taskDesc, taskFullDesc, function (err) {
    if (err) {
      console.error(err.message);
      callback(null); // If there's an error, return null
    } else {
      callback(this.lastID); // Return the ID of the inserted task
    }
  });
  stmt.finalize();
}

// Function to get all tasks
function getTasks(callback) {
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      callback(rows); // Return all task rows
    }
  });
}

module.exports = { addTask, getTasks };
