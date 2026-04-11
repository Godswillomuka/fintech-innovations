import react from "react";
import logo from "../assets/fintechLogo.png"

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="nav">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Login</a>
            </div>
        </div>
    );
}

export default Header;