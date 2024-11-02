import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Web3Provider } from './providers/Web3Provider';
import Navbar from './components/Navbar';
import ChallengesPage from './pages/ChallengesPage';
import ChallengePage from './pages/ChallengePage';

function App() {
  return (
    <Web3Provider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<ChallengesPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/challenge/:id" element={<ChallengePage />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Router>
    </Web3Provider>
  );
}

export default App;