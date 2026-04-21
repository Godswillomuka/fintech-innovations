

import React, { useState, useEffect } from "react";
import logo from "../assets/fintechLogo.png";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Update active link based on URL hash
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "home";
      setActiveLink(hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "SERVICES", id: "services" },
    { label: "PORTFOLIO", id: "portfolio" },
    { label: "ABOUT", id: "about" },
    { label: "CONTACT", id: "contact" }
  ];

  return (
    <header className={`main-header ${scrolled ? "active" : ""}`}>
      <div className="container nav-wrapper">
        <div className="logo-container">
          <img src={logo} alt="Fintech Print Innovations" />
        </div>
        <nav className="glass-nav">
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeLink === link.id ? "active" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="sign-in-btn">SIGN IN</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;