// 

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          CREATE. DESIGN.<br />
          <span className="accent">DEFINE.</span>
        </h1>
        <h2>
          Fintech-first brand & visual identity studio.
        </h2>
        <p className="hero-subtitle">
          FintechPrint Innovations is your premier creative agency in Kenya, specializing in design, printing, and branding solutions. We blend art and technology to deliver unmatched services that resonate with your audience.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollToSection('contact')}>START A PROJECT</button>
          <button className="btn-secondary" onClick={() => scrollToSection('portfolio')}>OUR WORK</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;