import React from 'react';
import { Link } from 'react-router-dom';
import './DeveloperButton.css';

const DeveloperButton = () => {
  return (
    <div className="developer-button-container">
      <Link to="/" className="developer-button">
        <svg className="developer-logo-svg" viewBox="0 0 50 50">
          {/* The 'D' shape */}
          <path d="M15,5 H25 A 15 20 0 0 1 25 45 H15 Z" fill="none" stroke="currentColor" strokeWidth="5"/>
          {/* The static text */}
          <text x="26" y="32" fontSize="12" fill="currentColor" textAnchor="middle" fontFamily="monospace" fontWeight="bold">
            {"</>"}
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default DeveloperButton;