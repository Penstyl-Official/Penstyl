import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Task {
  task_id: number;
  task_name: string;
  task_description: string;
  task_statement: string;
  task_points: number;
}

const TaskDetails: React.FC = () => {
  const { task_id } = useParams<{ task_id: string }>(); // Get task_id from URL
  const [task, setTask] = useState<Task | null>(null);

  // Fetch task details from the backend based on task_id
  useEffect(() => {
    fetch(`http://localhost:3001/api/tasks/${task_id}`)
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error("Error fetching task:", error));
  }, [task_id]);

  return (
    <div>
      {task ? (
        <>
          <h2>{task.task_name}</h2>
          <p><strong>Description:</strong> {task.task_description}</p>
          <p><strong>Statement:</strong> {task.task_statement}</p>
          <p><strong>Points:</strong> {task.task_points}</p>
        </>
      ) : (
        <p>Loading task...</p>
      )}
    </div>
  );
};

export default TaskDetails;
