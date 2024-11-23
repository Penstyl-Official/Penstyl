import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Task = () => {
  const { taskId } = useParams<{ taskId: string }>(); // Get task ID from URL parameters
  const [task, setTask] = useState<{ TASK_NAME: string, TASK_DESC: string, TASK_FULL_DESC: string } | null>(null);

  useEffect(() => {
    // Fetch task details by ID from the backend API
    fetch(`/api/tasks/${taskId}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data); // Set the task details to state
      })
      .catch((error) => console.error('Error fetching task:', error));
  }, [taskId]); // Re-run the effect if taskId changes

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h1>{task.TASK_NAME}</h1>
      <p>{task.TASK_DESC}</p>
      <p>{task.TASK_FULL_DESC}</p>
    </div>
  );
};

export default Task;
