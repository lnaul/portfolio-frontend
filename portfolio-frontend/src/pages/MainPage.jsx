import React from 'react';
import SplitTextAnimation from '../components/SplitTextAnimation';
import SectionTwo from '../components/SectionTwo'; // This will be renamed to PageTwo

const MainPage = () => {
  return (
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

        <section id="page-2" className="page-section"> {/* Page 2: Web Dev */}
          <SectionTwo />
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
  );
};

export default MainPage;
