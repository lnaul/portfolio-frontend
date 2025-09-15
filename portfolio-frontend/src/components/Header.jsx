import React from 'react';
import { Link } from 'react-router-dom';
import CodeIcon from './icons/CodeIcon';
import MobileIcon from './icons/MobileIcon';
import GamepadIcon from './icons/GamepadIcon';

const Header = () => {
  return (
    <nav className="main-nav">
      <div className="nav-links-frame">
        <a href="/#page-2" className="nav-link-text">Web Dev</a>
        <a href="/#page-3" className="nav-link-text">Mobile Apps</a>
        <a href="/#page-4" className="nav-link-text">Game Dev</a>
        <a href="/#page-2" className="nav-link-icon"><CodeIcon /></a>
        <a href="/#page-3" className="nav-link-icon"><MobileIcon /></a>
        <a href="/#page-4" className="nav-link-icon"><GamepadIcon /></a>
        <a href="/#page-1" className="nav-button">1</a>
        <Link to="/scroll" className="nav-button">Scroll</Link>
      </div>
    </nav>
  );
};

export default Header;