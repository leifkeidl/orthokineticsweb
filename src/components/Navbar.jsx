import "./Navbar.css";
import okBadge from "../assets/images/branding/ok.png";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Primary">
      <div className="nav-left">
        <a className="brand" href="/" aria-label="Orthokinetics home">

          <span className="brand-wordmark">
            <span className="brand-ortho">ORTHO</span>
            <span className="brand-dash">-</span>
            <span className="brand-kinetics">KINETICS</span>
          </span>

          <img className="brand-badge" src={okBadge} alt="" />

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
