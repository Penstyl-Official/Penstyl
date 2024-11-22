import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';
import Task from './pages/Task';
import AddTask from './pages/AddTask';  // Import AddTask component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task/:taskId" element={<Task />} />
        <Route path="/add-task" element={<AddTask />} />  {/* Add new route for adding tasks */}
      </Routes>
    </Router>
  );
};

export default App;
