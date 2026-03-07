import Navbar from "./Navbar.jsx";
import "./LandingPage.css";
import teamPhoto from "../assets/ortho-team.jpg";
import { Helmet } from "react-helmet-async";

function LandingPage() {
  return (
    <>
		    <Helmet>
    <title>Orthokinetics | Engineering Solutions for Orthodontics</title>
    <meta
      name="description"
      content="Ortho-Kinetics develops precision software and engineering-driven systems designed to support modern orthodontic workflows and clinical decision-making."
    />
<meta property="og:title" content="Ortho-Kinetics" />
<meta property="og:description" content="Engineering-driven orthodontic technology." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://orthokinetics.org" />
		  <meta property="og:image" content="https://orthokinetics.org/preview.png" />
<meta property="og:site_name" content="Ortho-Kinetics" />
  </Helmet>

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
              <span>Renderings and demonstrations of prototypes.</span>
            </div>
            <div className="quick-card">
              <strong>Focus</strong>
              <span>Engineering-first work across software, systems, and design.</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
