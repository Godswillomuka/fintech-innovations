import "./Header.css";
import logo from "../assets/fintechLogo.png";

function Header() {
  return (
    <header className="header">

      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-content">
          <div className="topbar-left">
            <span>info@fintechprint.com</span>
            <span>+254 748 000087</span>
          </div>

          <div className="topbar-right">
            <span>Mon - Fri: 8:00 am - 5:00 pm</span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="navbar">
        <div className="container nav-content">
          
          <div className="logo">
            <img src={logo} alt="Fintech Print Logo" />
          </div>

          <nav className="menu">
            <a href="#home" className="active">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="cta">
            <button>Get a Quote</button>
          </div>

        </div>
      </div>

    </header>
  );
}

export default Header;