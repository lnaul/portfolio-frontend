import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DeveloperButton.css';

const DeveloperButton = () => {
  const [displayText, setDisplayText] = useState('>D');

  useEffect(() => {
    const sequence = () => {
      // Typing part
      setTimeout(() => setDisplayText('>De'), 3000);
      setTimeout(() => setDisplayText('>Dee'), 3250);

      // Deleting part
      setTimeout(() => setDisplayText('>De'), 6750);
      setTimeout(() => setDisplayText('>D'), 7000);
    };

    sequence(); // Run on initial mount
    const intervalId = setInterval(sequence, 7000); // Repeat every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="developer-button-container">
      <Link to="/" className="logo-button">
        {displayText}
        <span className="typing-cursor" />
      </Link>
    </div>
  );
};

export default DeveloperButton;
