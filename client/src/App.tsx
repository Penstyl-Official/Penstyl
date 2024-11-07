import React, { useEffect, useState } from 'react';
import Home from './Home';
import TaskDetails from './TaskDetails';
import Navbar from './Navbar';

const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<string>(window.location.hash || '#/');

  const renderRoute = () => {
    switch (currentRoute) {
      case '#/task-details':
        return <TaskDetails />;
      case '#/':
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {renderRoute()}
    </div>
  );
};

export default App;
