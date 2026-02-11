import "./Navbar.css";
import logo from "../assets/logo-cropped.png";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary">
      <div className="nav-left">
        <a className="brand" href="/" aria-label="Orthokinetics home">
          <img className="brand-logo" src={logo} alt="Orthokinetics" />
        </a>
      </div>

      <ul className="nav-links">
        <li><a className="nav-link" href="/about">About</a></li>
        <li><a className="nav-link" href="/development">Development</a></li>
        <li><a className="nav-link nav-cta" href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
