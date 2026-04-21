import React from 'react';
import './Services.css';

const IndustrialServices = () => {
  const industrialServices = [
    {
      id: "01",
      title: "Logo Design",
      description: "Crafting unique logos that capture your brand's essence and values, ensuring a memorable first impression through strategic visual storytelling and identity engineering.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
      size: "small",
      category: "IDENTITY"
    },
    {
      id: "02",
      title: "Printing Services",
      description: "High-quality printing for business cards, brochures, and banners, ensuring your brand makes a lasting impression. We utilize state-of-the-art machinery to guarantee precision, color depth, and industrial-grade durability across all substrates.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
      size: "large",
      category: "PRODUCTION"
    },
    
    {
      id: "03",
      title: "Web Design",
      description: "Creating user-friendly and visually stunning websites that enhance your online presence and drive customer engagement. Our web engineering focus ensures responsive performance and modern aesthetic standards.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80",
      size: "large",
      category: "DIGITAL"
    },
    {
      id: "04",
      title: "Branding Solutions",
      description: "Comprehensive branding strategies that elevate your business and connect with your target audience through impactful visual communication.",
      image: "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=1200&q=80",
      size: "small",
      category: "STRATEGY"
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="services-header-box">
          <div className="header-left">
            <h4 className="label">CORE CAPABILITIES</h4>
            <h2 className="section-title">
              INDUSTRIAL <span className="green-text">SERVICES</span>
            </h2>
          </div>
          <div className="header-right">
            <p>
              FintechPrint Innovations delivers high-scale branding and production 
              mechanisms. We bridge the gap between creative concept and 
              industrial-grade execution.
            </p>
          </div>
        </div>

        <div className="services-bento-grid">
          {industrialServices.map((service) => (
            <div 
              key={service.id} 
              className={`service-bento-card ${service.size}`}
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.95)), url(${service.image})` }}
            >
              <div className="bento-content">
                <div className="bento-top">
                  <span className="service-number">{service.id}</span>
                  <span className="service-category">{service.category}</span>
                </div>
                <div className="bento-bottom">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="industrial-line"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialServices;