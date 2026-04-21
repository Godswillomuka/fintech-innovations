const services = [
  { title: "VEHICLE BRANDING", desc: "Vehicle branding communications for your brand.", icon: "🚛" },
  { title: "3D LETTER MOULDING", desc: "Moulding meets bonding 3D letter moulding and 3D print.", icon: "🏢" },
  { title: "DIGITAL PRINTING", desc: "Premium quality digital printing for corporate identity.", icon: "🖨️" },
  { title: "WEB ENGINEERING", desc: "High-performance web design and engineering.", icon: "💻" }
];

const IndustrialServices = () => (
  <section className="services-section" id="services">
    <div className="container">
      <h4 className="label">SERVICES</h4>
      <h2 className="section-title">INDUSTRIAL CAPABILITIES</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <span className="service-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustrialServices;