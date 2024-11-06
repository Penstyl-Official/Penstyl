import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TaskDetails from './TaskDetails';
import Navbar from './Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task-details" element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
