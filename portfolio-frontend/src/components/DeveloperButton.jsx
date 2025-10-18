import React, { useState, useEffect } from 'react';
import './DeveloperButton.css';
import eventBus from '../utils/eventBus';

const DeveloperButton = () => {
  const [displayText, setDisplayText] = useState('>D');
  const [activeIndex, setActiveIndex] = useState(0);

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
    const intervalId = setInterval(sequence, 7000); // Repeat every 7 seconds

    const handleSlideChange = (index) => {
      setActiveIndex(index);
    };

    eventBus.on('slideChanged', handleSlideChange);

    return () => {
      clearInterval(intervalId);
      eventBus.remove('slideChanged', handleSlideChange);
    };
  }, []);

  return (
    <div className="developer-button-container">
      <a 
        href="javascript:void(0)" 
        onClick={() => activeIndex !== 0 && eventBus.dispatch('navigateTo', 0)}
        className={`logo-button ${activeIndex === 0 ? 'disabled' : ''}`}>
        {displayText}
        <span className="typing-cursor" />
      </a>
    </div>
  );
};

export default DeveloperButton;
