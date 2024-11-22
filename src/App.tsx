<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './providers/Web3Provider';
>>>>>>> main
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tasks from './pages/Tasks';
import Task from './pages/Task';
import AddTask from './pages/AddTask';  // Import AddTask component

const App = () => {
  return (
<<<<<<< HEAD
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
=======
    <Web3Provider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<ChallengesPage />} />
            <Route path="/practice" element={<ChallengesPage />} />
            <Route path="/practice/:id" element={<ChallengePage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </Web3Provider>
>>>>>>> main
  );
};

export default App;
