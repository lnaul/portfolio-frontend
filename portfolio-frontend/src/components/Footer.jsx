import React from 'react';
import LinkedinIcon from './icons/LinkedinIcon';
import EmailIcon from './icons/EmailIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const Footer = () => {
  return (
    <nav className="main-footer">
      <div className="nav-center">
        <div className="footer-links-frame">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="nav-link-text">LinkedIn</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="nav-link-icon"><LinkedinIcon /></a>
          <a href="mailto:example@example.com" className="nav-link-text">Email</a>
          <a href="mailto:example@example.com" className="nav-link-icon"><EmailIcon /></a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="nav-link-text">WhatsApp</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="nav-link-icon"><WhatsappIcon /></a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;