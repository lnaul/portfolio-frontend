import React from 'react';
import './index.css'; // Import the CSS file
import SplitTextAnimation from './components/SplitTextAnimation'; // Import the new component
import CodeIcon from './components/icons/CodeIcon';
import MobileIcon from './components/icons/MobileIcon';
import GamepadIcon from './components/icons/GamepadIcon';

function App() {
  return (
    <div className="app-container">
      <nav className="main-nav">
        <div className="nav-left">
          <span className="logo">Dee</span>
          <span className="portfolio-word">Portfolio</span>
        </div>
        <div className="nav-center">
          <a href="#frontend" className="nav-link-text">Front-End</a>
          <a href="#mobile" className="nav-link-text">Mobile UX/UI</a>
          <a href="#game" className="nav-link-text">Game Dev</a>
          <a href="#frontend" className="nav-link-icon"><CodeIcon /></a>
          <a href="#mobile" className="nav-link-icon"><MobileIcon /></a>
          <a href="#game" className="nav-link-icon"><GamepadIcon /></a>
        </div>
        <div className="nav-right">
          <a href="#contact" className="contact-btn">Contact</a>
        </div>
      </nav>

      {/* New Hero Section with SplitText animation and text content */}
      <section className="info-section">
        <div className="info-section-left">
          <SplitTextAnimation />
        </div>
        <div className="info-section-right">
          <h2>About My Work</h2>
          <p>
            This section will contain more details about my professional journey and philosophy.
            I focus on creating user-centered designs that are not only aesthetically pleasing
            but also highly functional and intuitive. My development skills ensure that these
            designs are brought to life with precision and performance.
          </p>
          <p>
            I believe in a holistic approach, where design and development go hand-in-hand
            to deliver truly impactful digital experiences.
          </p>
          <p>
            My passion lies in solving complex
            problems with creative and efficient solutions.
          </p>
          <p>
            Stay tuned for more detailed content here, including my methodologies, tools, and
            insights into the projects showcased in my portfolio.
          </p>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-column">
          <span className="footer-logo">Dee</span>
        </div>
        <div className="footer-column">
          <p>Contact Information:</p>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
