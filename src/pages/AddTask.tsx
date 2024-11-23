import React, { useState } from 'react';

const AddTask = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [taskFullDesc, setTaskFullDesc] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTask = {
      TASK_NAME: taskName,
      TASK_DESC: taskDesc,
      TASK_FULL_DESC: taskFullDesc,
    };

    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Task added:', data);
        setTaskName('');
        setTaskDesc('');
        setTaskFullDesc('');
        alert('Task added successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to add task'}`);
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Error adding task');
    }
  };

  return (
    <div>
      <h1>Add New Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="taskDesc">Task Description</label>
          <input
            type="text"
            id="taskDesc"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="taskFullDesc">Full Task Description</label>
          <textarea
            id="taskFullDesc"
            value={taskFullDesc}
            onChange={(e) => setTaskFullDesc(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
