import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('user_name'),
      phone: formData.get('user_phone'),
      email: formData.get('user_email'),
      company: formData.get('user_company') || "N/A",
      brief: formData.get('user_brief')
    };

    const rawMessage = `NEW PROJECT INITIATION\n--------------------------\nClient: ${data.name}\nCompany: ${data.company}\nPhone: ${data.phone}\nEmail: ${data.email}\n--------------------------\nBrief: ${data.brief}`;
    
    const whatsappNumber = "254113833488";
    const subject = encodeURIComponent(`Project Initiation: ${data.name}`);
    const body = encodeURIComponent(rawMessage);

    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
      
      // Multi-channel trigger
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(rawMessage)}`, '_blank');
      window.location.href = `mailto:Fintechprintinnovations@gmail.com?subject=${subject}&body=${body}`;
    }, 1500);
  };

  return (
    <section className="contact-portal" id="contact">
      <div className="container portal-wrapper">
        <div className="portal-content">
          <h4 className="detail-label" style={{ marginBottom: '10px' }}>CONTACT US</h4>
          <h2 className="massive-title">LET'S BUILD SOMETHING MASSIVE</h2>
          
          <div className="contact-details">
            <div className="detail-block">
              <span className="detail-label">OFFICE</span>
              <p>FintechPrint Innovations</p>
              <p>3575 Fake Buena Vista Avenue</p>
            </div>
            
            <div className="detail-block">
              <span className="detail-label">COMMUNICATION</span>
              <a href="tel:+254113833488" className="contact-link-row">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <p>+254113833488</p>
              </a>
              <a href="mailto:Fintechprintinnovations@gmail.com" className="contact-link-row">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <p>Fintechprintinnovations@gmail.com</p>
              </a>
            </div>
          </div>
        </div>

        <div className="portal-form-container">
          {!submitted ? (
            <form className="industrial-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>FULL NAME</label>
                <input type="text" name="user_name" placeholder="Senor' George" required />
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" name="user_phone" placeholder="+254..." required />
                </div>
                <div className="input-group">
                  <label>EMAIL ADDRESS</label>
                  <input type="email" name="user_email" placeholder="george@company.com" required />
                </div>
              </div>

              <div className="input-group">
                <label>COMPANY <span className="optional-tag">(OPTIONAL)</span></label>
                <input type="text" name="user_company" placeholder="Your Business Name" />
              </div>

              <div className="input-group">
                <label>SUBJECT BRIEF</label>
                <textarea name="user_brief" placeholder="Outline the scope and scale..." required></textarea>
              </div>

              <button type="submit" className="submit-btn-massive" disabled={isLoading}>
                {isLoading ? <div className="btn-spinner"></div> : "INITIATE PROJECT"}
              </button>
            </form>
          ) : (
            <div className="success-message">
              <div className="success-icon-circle">
                <svg viewBox="0 0 24 24" className="fly-jet">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="white" />
                </svg>
              </div>
              <h2 className="thank-you-text">Initiated!</h2>
              <p className="success-subtext">
                Your project brief has been formatted.<br />
                Please complete the send process in your apps.
              </p>
              <button className="go-home-btn" onClick={() => setSubmitted(false)}>CLOSE</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;