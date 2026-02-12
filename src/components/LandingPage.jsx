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

        <section className="home-below" aria-label="Landing page intro">
          <p className="hint">
            We’re building practical tools that blend software, systems, and engineering into a modern orthodontic workflow.
          </p>

          <div className="quick-row">
            <div className="quick-card">
              <strong>Development updates</strong>
              <span>CAD snapshots, prototype visuals, and progress notes.</span>
            </div>
            <div className="quick-card">
              <strong>Team + focus</strong>
              <span>Engineering-first work across software, systems, and design.</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;

