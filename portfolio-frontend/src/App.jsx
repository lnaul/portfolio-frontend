import React from 'react';
import './index.css'; // Import the CSS file

function App() {
  return (
    <div className="app-container">
      <nav className="main-nav">
        <div className="nav-left">
          <span className="logo">Dee</span>
          <span className="portfolio-word">Portfolio</span>
        </div>
        <div className="nav-center">
          <a href="#frontend">Front-End</a>
          <a href="#mobile">Mobile UX/UI</a>
          <a href="#game">Game Dev</a>
        </div>
        <div className="nav-right">
          <a href="#contact" className="contact-btn">Contact</a>
        </div>
      </nav>

      <div className="content-placeholder">
        <h1>Welcome to Dmitry Naumov's Portfolio</h1>
        <p>Scroll down to see the sticky navigation in action!</p>
        {/* Add a lot of content to make the page scrollable */}
        {Array(50).fill().map((_, i) => (
          <p key={i}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;