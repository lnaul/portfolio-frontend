import React, { useEffect } from 'react';
import './index.css'; // Import the CSS file
import SplitTextAnimation from './components/SplitTextAnimation'; // Import the new component
import CodeIcon from './components/icons/CodeIcon';
import MobileIcon from './components/icons/MobileIcon';
import GamepadIcon from './components/icons/GamepadIcon';

function App() {
  return (
    <> {/* React Fragment */}
      <nav className="main-nav">
        <div className="nav-left">
          <a href="/" className="logo-btn"><span className="logo">Dee</span></a>
        </div>
        <div className="nav-center">
          <div className="nav-links-frame"> {/* New wrapper */}
            <a href="#page-2" className="nav-link-text">Web Dev</a> {/* Updated link */}
            <a href="#page-3" className="nav-link-text">Mobile Apps</a> {/* Updated link */}
            <a href="#page-4" className="nav-link-text">Game Dev</a> {/* Updated link */}
            <a href="#page-2" className="nav-link-icon"><CodeIcon /></a> {/* Updated link */}
            <a href="#page-3" className="nav-link-icon"><MobileIcon /></a> {/* Updated link */}
            <a href="#page-4" className="nav-link-icon"><GamepadIcon /></a> {/* Updated link */}
            {/* New buttons */}
            <button className="nav-button" onClick={() => window.location.href = "#page-1"}>1</button>
            <button className="nav-button" onClick={() => window.location.href = "#new-empty-page"}>2</button>
          </div> {/* End new wrapper */}
        </div>
        <div className="nav-right">
          <a href="#page-5" className="contact-btn">Contact</a> {/* Updated link */}
        </div>
      </nav>

      <div className="app-container">
        <div className="scroll-container"> {/* New scroll container */}
          <section id="page-1" className="page-section info-section"> {/* Page 1 */}
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

          <section id="page-2" className="page-section web-dev-section"> {/* Page 2: Web Dev */}
            <h2>Web Development Projects</h2>
            <p>Placeholder for Web Dev content.</p>
          </section>

          <section id="page-3" className="page-section mobile-apps-section"> {/* Page 3: Mobile Apps */}
            <h2>Mobile Apps Projects</h2>
            <p>Placeholder for Mobile Apps content.</p>
          </section>

          <section id="page-4" className="page-section game-dev-section"> {/* Page 4: Game Dev */}
            <h2>Game Development Projects</h2>
            <p>Placeholder for Game Dev content.</p>
          </section>

          <footer id="page-5" className="page-section main-footer"> {/* Page 5: Footer */}
            <div className="footer-column">
              <span className="footer-logo">Dee</span>
            </div>
            <div className="footer-column">
              <p>Contact Information:</p>
              <p>Email: info@example.com</p>
              <p>Phone: +123 456 7890</p>
            </div>
          </footer>
        </div> {/* End scroll-container */}
      </div>

      {/* New empty page outside scroll-snapping system */}
      <div id="new-empty-page" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '3em', color: 'var(--color-primary-light)', backgroundColor: 'var(--color-secondary-dark)' }}>
        <h1>This is a New Empty Page</h1>
      </div>
    </> // End React Fragment
  );
}

export default App;