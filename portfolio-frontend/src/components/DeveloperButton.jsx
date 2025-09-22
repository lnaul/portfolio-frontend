import React from 'react';
import { Link } from 'react-router-dom';
import './DeveloperButton.css';

const DeveloperButton = () => {
  return (
    <div className="developer-button-container">
      <Link to="/" className="logo-button">
        &lt;D&gt;
      </Link>
    </div>
  );
};

export default DeveloperButton;