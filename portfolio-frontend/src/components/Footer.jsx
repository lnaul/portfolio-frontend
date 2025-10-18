import React from 'react';
import LinkedinIcon from './icons/LinkedinIcon';
import EmailIcon from './icons/EmailIcon';
import WhatsappIcon from './icons/WhatsappIcon';

const Footer = () => {
  return (
    <nav className="main-footer">
      <div className="footer-links-frame">
        <a href="mailto:naumovdimitriy@gmail.com" className="footer-icon-button">
          <EmailIcon />
        </a>
        <a href="https://www.linkedin.com/in/lnaul/" target="_blank" rel="noopener noreferrer" className="footer-icon-button">
          <LinkedinIcon />
        </a>
        <a href="https://wa.me/66956599000" target="_blank" rel="noopener noreferrer" className="footer-icon-button">
          <WhatsappIcon />
        </a>
      </div>
    </nav>
  );
};

export default Footer;
