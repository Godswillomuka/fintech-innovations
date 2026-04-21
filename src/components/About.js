import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Main Intro with Image */}
        <div className="about-header-wrapper">
          <div className="about-header">
            <h4 className="label">WHO WE ARE</h4>
            <h2 className="section-title">
              Why <span className="green-text">FintechPrint</span> is Your Best Choice
            </h2>
            <p className="about-lead">
               Choosing FintechPrint Innovations means partnering with a team that is deeply committed to your success. We blend innovative design with strategic branding to create solutions that not only look great but also drive results. Our dedication to quality and customer satisfaction sets us apart, ensuring your brand always makes a lasting impression.
            </p>
          </div>
          <div className="about-header-image">
            <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmRpbmclMjBtb2NrJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="Branding Mockup" />
          </div>
        </div>

        {/* The "Three Pillars" Grid */}
        <div className="pillars-grid">
          <div className="pillar-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmRpbmclMjBtb2NrJTIwcHJpbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60)' }}>
            <div className="pillar-overlay">
              <div className="pillar-line"></div>
              <h3>Strategic Methodologies</h3>
              <p>At FintechPrint Innovations, we believe effective branding goes beyond aesthetics, combining strategic market research, competitor analysis, and audience understanding to create brands that resonate deeply and stand out.</p>
            </div>
          </div>
          
          <div className="pillar-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGVzaWduJTIwY3JlYXRpdmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60)' }}>
            <div className="pillar-overlay">
              <div className="pillar-line"></div>
              <h3>Creative Design Excellence</h3>
              <p>Our design team is dedicated to creating visually stunning, effective work that reflects your brand identity, using innovation and creativity to deliver impactful solutions and consistently achieve exceptional results every time.</p>
            </div>
          </div>

          <div className="pillar-card" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523608050518-6c8450ca3ef1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJpbnRpbmclMjBwcmVzcyV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60)' }}>
            <div className="pillar-overlay">
              <div className="pillar-line"></div>
              <h3>Unmatched Print Quality</h3>
              <p>We use state-of-the-art printing technology to produce high-quality materials with precision and consistency, delivering exceptional results across everything from business cards to large-scale banners and impactful promotional products.</p>
            </div>
          </div>
        </div>

        {/* Visual Identity Section */}
        <div className="identity-split">
          <div className="identity-content">
            <h2>Crafting Visual Identities That <span className="green-text">Resonate</span></h2>
            <p>We specialize in capturing attention and creating a consistent, memorable brand experience across all visual assets.</p>
            <ul className="check-list">
              <li><strong>Logo Design:</strong> Unique essence representation.</li>
              <li><strong>Brand Guidelines:</strong> Absolute consistency.</li>
              <li><strong>Visual Assets:</strong> Enhancing overall appeal.</li>
            </ul>
          </div>
          <div className="identity-image">
            <div className="experience-badge">
              <span className="years">10+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;