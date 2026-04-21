const ContactPortal = () => (
  <section className="contact-portal" id="contact">
    <div className="container portal-wrapper">
      <div className="portal-info">
        <h4 className="label">CONTACT</h4>
        <h2>LET'S BUILD SOMETHING MASSIVE</h2>
        <p>Unlock bold branding experiences tailored to your business needs.</p>
        <div className="contact-details">
          <p>📞 +254 748 000087</p>
          <p>📧 info@fintechprint.com</p>
          <p>📍 Nairobi, Kenya</p>
        </div>
      </div>
      <div className="portal-form">
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Service" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="submit-btn">CONTACT</button>
        </form>
      </div>
    </div>
  </section>
);

export default ContactPortal;