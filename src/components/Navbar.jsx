import { useEffect, useState } from "react";
import "./Navbar.css";
import okBadge from "../assets/images/branding/ok.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 760) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="navbar" aria-label="Primary">
      <div className="nav-left">
        <a className="brand" href="/" aria-label="Orthokinetics home" onClick={closeMenu}>
          <span className="brand-wordmark">
            <span className="brand-ortho">ORTHO</span>
            <span className="brand-dash">-</span>
            <span className="brand-kinetics">KINETICS</span>
          </span>

          <img className="brand-badge" src={okBadge} alt="" />
        </a>
      </div>

      <button
        className={`nav-toggle ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={toggleMenu}
      >
        <span className="nav-toggle-icon" aria-hidden="true">
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </span>
      </button>

      <ul
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}
      >
        <li>
          <a className="nav-link" href="/about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="/development" onClick={closeMenu}>
            Development
          </a>
        </li>
        <li>
          <a className="nav-link nav-cta" href="/contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
