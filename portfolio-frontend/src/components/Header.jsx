import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="main-nav">
      <div className="nav-links-frame">
        <a href="/#page-2" className="nav-link-text">Web Dev</a>
        <a href="/#page-3" className="nav-link-text">Mobile Apps</a>
        <a href="/#page-4" className="nav-link-text">Game Dev</a>

      </div>
    </nav>
  );
};

export default Header;