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
          <h4 className="footer-label">CONNECT WITH US</h4>
          <div className="footer-contact-info">
            <p>fintechprintinnovations@gmail.com</p>
            <p>+254113833488</p>
          </div>
          <div className="footer-socials">

  <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
    <i className="fab fa-facebook-f"></i>
  </a>

  <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
    <i className="fab fa-x-twitter"></i>
  </a>

  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
    <i className="fab fa-instagram"></i>
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
    <i className="fab fa-linkedin-in"></i>
  </a>

  <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
    <i className="fab fa-youtube"></i>
  </a>

  <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
    <i className="fab fa-tiktok"></i>
  </a>

</div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-wrapper">
          <p className="copyright">
            COPYRIGHT © {currentYear} FINTECHPRINT INNOVATIONS LTD. ALL RIGHTS RESERVED.
          </p>
          <p className="technical-stamp">Nairobi, Kenya</p>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;