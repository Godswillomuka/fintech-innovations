import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="massive-footer">
      <div className="container footer-grid">
        
        {/* Column 1: Identity */}
        <div className="footer-column branding">
          <h2 className="footer-logo">FINTECH<span>PRINT</span></h2>
          <p className="footer-tagline">
            Engineering disruptive print and digital solutions for the modern industrial landscape.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-label">NAVIGATION</h4>
          <ul className="footer-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#portfolio">PORTFOLIO</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-column">
          <h4 className="footer-label">SOLUTIONS</h4>
          <ul className="footer-links">
            <li><a href="#services">LOGO DESIGN</a></li>
            <li><a href="#services">BRANDING</a></li>
            <li><a href="#services">PRINT MEDIA</a></li>
            <li><a href="#services">WEB SYSTEMS</a></li>
          </ul>
        </div>

        {/* Column 4: Contact & Social */}
        <div className="footer-column">
          <h4 className="footer-label">CONNECT</h4>
          <div className="footer-contact-info">
            <p>info@fintechprint.com</p>
            <p>+254 748 000087</p>
          </div>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="LinkedIn">LI</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="Instagram">IG</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-wrapper">
          <p className="copyright">
            COPYRIGHT © {currentYear} FINTECHPRINT INNOVATIONS LTD. ALL RIGHTS RESERVED.
          </p>
          <p className="technical-stamp">OPERATIONAL // HQ_NAIROBI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;