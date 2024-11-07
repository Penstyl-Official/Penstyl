import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Penstyl</a></li>
        <li><a href="/tasks">Practice</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;