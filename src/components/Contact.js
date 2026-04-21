import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact-portal" id="contact">
      <div className="container portal-wrapper">
        <div className="portal-content">
          <h4 className="label">PORTAL</h4>
          <h2 className="massive-title">LET'S BUILD SOMETHING MASSIVE</h2>
          
          <div className="contact-details">
            <div className="detail-block">
              <span className="detail-label">OFFICE</span>
              <p>FintechPrint Solutions</p>
              <p>3575 Fake Buena Vista Avenue</p>
            </div>
            <div className="detail-block">
              <span className="detail-label">COMMUNICATION</span>
              <p>͏ +254113833488</p>
              <p>Fintechprintinnovations@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="portal-form-container">
          {!submitted ? (
            <form className="industrial-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>FULL NAME</label>
                <input type="text" placeholder="Senor' George" required />
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" placeholder="+254..." required />
                </div>
                <div className="input-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" placeholder="george@company.com" required />
                </div>
              </div>

              <div className="input-group">
                <label>COMPANY <span className="optional-tag">(OPTIONAL)</span></label>
                <input type="text" placeholder="Your Business Name" />
              </div>

              <div className="input-group">
                <label>SUBJECT BRIEF</label>
                <textarea placeholder="Outline the scope and scale of your project..." required></textarea>
              </div>

              <button type="submit" className="submit-btn-massive">
                INITIATE PROJECT
              </button>
            </form>
          ) : (
            // sent box message
            <div className="success-message">
              <div className="success-icon-circle">
                <svg viewBox="0 0 24 24" className="fly-jet">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="white" />
                </svg>
              </div>
              <h2 className="thank-you-text">Thank You!</h2>
              <p className="success-subtext">
                Your message has been sent.<br />
                We will get back to you shortly.
              </p>
              <button className="go-home-btn" onClick={() => setSubmitted(false)}>
                close
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;