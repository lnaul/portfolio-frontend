import React from 'react';
import './index.css'; // Import the CSS file
import SplitTextAnimation from './components/SplitTextAnimation'; // Import the new component

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

      {/* New Hero Section with SplitText animation and text content */}
      <section style={{
        minHeight: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '50px', // Space between columns
        padding: '50px', // Padding for the section
        color: '#eee' // Text color for the section
      }}>
        {/* Left column: 2/3 width */}
        <div style={{ flex: 2, textAlign: 'left' }}>
          <SplitTextAnimation />
        </div>
        {/* Right column: 1/3 width */}
        <div style={{ flex: 1, textAlign: 'left' }}>
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

      <div className="hero-section">
        <div className="hero-left">
          <h1>Dmitry Naumov</h1>
          <h2>Senior UX/UI Designer & Developer</h2>
          <p>
            Hello and welcome! I'm thrilled to share a collection of
            my work with you, where you'll see how thoughtful
            UI/UX design truly comes to life through hands-on
            development.
          </p>
          <p>
            This portfolio is a journey through
            projects where I've poured my passion into creating
            seamless, intuitive, and genuinely delightful digital
            experiences.
          </p>
          <p>
            From initial concept to final implementation, each piece
            here represents my commitment to understanding user
            needs and delivering impactful solutions. I hope you
            enjoy exploring these projects as much as I enjoyed
            bringing them to fruition.
          </p>
        </div>
        <div className="hero-right">
          <h3>Can Do...</h3>
          <ul>
            <li>UI/UX Design</li>
            <li>Front-End Development</li>
            <li>Mobile Prototyping</li>
            <li>Game Development</li>
            <li>Problem Solving</li>
            <li>Creative Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
