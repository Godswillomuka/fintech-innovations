import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links configuration
  // Update these URLs with your actual social media profiles
  const socialLinks = [
    {
      icon: 'fab fa-facebook-f',
      url: 'https://facebook.com/fintechprintinnovations',
      label: 'Facebook',
      title: 'Follow us on Facebook'
    },
    {
      icon: 'fab fa-x-twitter',
      url: 'https://x.com/fintechprint',
      label: 'X',
      title: 'Follow us on X (Twitter)'
    },
    {
      icon: 'fab fa-instagram',
      url: 'https://instagram.com/fintechprintinnovations',
      label: 'Instagram',
      title: 'Follow us on Instagram'
    },
    {
      icon: 'fab fa-linkedin-in',
      url: 'https://linkedin.com/company/fintechprint-innovations',
      label: 'LinkedIn',
      title: 'Connect with us on LinkedIn'
    },
    {
      icon: 'fab fa-youtube',
      url: 'https://youtube.com/@fintechprintinnovations',
      label: 'YouTube',
      title: 'Subscribe to our YouTube channel'
    },
    {
      icon: 'fab fa-tiktok',
      url: 'https://tiktok.com/@fintechprint',
      label: 'TikTok',
      title: 'Follow us on TikTok'
    }
  ];

  return (
    <footer className="massive-footer">
      <div className="container footer-grid">
        
        {/* Column 1: Identity */}
        <div className="footer-column branding">
          <h2 className="footer-logo">FINTECHPRINT <span>INNOVATIONS</span></h2>
          <p className="footer-tagline">
            We build disruptive products designed to solve complex business problems for small to medium-sized companies looking to optimize performance and improve lives through innovative, high-impact technological solutions.
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
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                aria-label={social.label}
                title={social.title}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
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
    </footer>
  );
};

export default Footer;