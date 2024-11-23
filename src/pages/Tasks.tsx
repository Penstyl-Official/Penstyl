import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tasks = () => {
  const [tasks, setTasks] = useState<{ TASK_ID: number, TASK_NAME: string }[]>([]);

  useEffect(() => {
    // Fetch tasks from the backend API
    fetch('/api/tasks')
      .then((response) => response.json())
      .then((data) => {
        setTasks(data); // Set tasks to the state once data is fetched
      })
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []); // Empty dependency array means this runs once on component mount

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {/* Map through tasks and display them as links */}
        {tasks.map((task) => (
          <li key={task.TASK_ID}>
            <Link to={`/task/${task.TASK_ID}`}>{task.TASK_NAME}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
