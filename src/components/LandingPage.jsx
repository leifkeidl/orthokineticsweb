import Navbar from "./Navbar.jsx";
import "./LandingPage.css";
import teamPhoto from "../assets/ortho-team.jpg";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero" aria-label="Orthokinetics hero">
          <img className="hero-img" src={teamPhoto} alt="Orthokinetics team" />

          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            <h1>Engineering-Driven Solutions for Orthodontics</h1>
            <p>
              Precision-focused software built to support accurate analysis and informed clinical decisions.
            </p>

            <div className="hero-actions">
              <a className="hero-btn primary" href="/contact">Contact</a>
              <a className="hero-btn secondary" href="/about">Learn more</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
