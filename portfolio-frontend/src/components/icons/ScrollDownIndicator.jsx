import React from 'react';

const ScrollDownIndicator = () => (
  <div className="scroll-indicator-content">
    <span>Scroll Down</span>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 19V5M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
);

export default ScrollDownIndicator;
