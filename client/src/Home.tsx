import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Task {
  task_id: number;
  task_name: string;
  task_description: string;
}

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Fetch tasks from the backend
  useEffect(() => {
    fetch('http://localhost:3001/api/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div>
      <h2>Problem List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.task_id}>
            <h3>{task.task_name}</h3>
            <p>{task.task_description}</p>
            <Link to={`/task/${task.task_id}`}>
              <button>Solve</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
