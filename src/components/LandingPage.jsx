import Navbar from "./Navbar.jsx";
import "./LandingPage.css";
import teamPhoto from "../assets/ortho-team.jpg";
import { Helmet } from "react-helmet-async";

function LandingPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Ortho-Kinetics Technologies, LLC",
		 alternateName: [
    "Ortho-Kinetics",
    "Orthokinetics",
    "OrthoKinetics"
  ],
      url: "https://orthokinetics.org",
      logo: "https://orthokinetics.org/preview.png",
      image: "https://orthokinetics.org/preview.png",
      email: "info@orthokinetics.org",
      foundingDate: "2025",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Waukesha",
        addressRegion: "WI",
        addressCountry: "US",
      },
      member: [
        {
          "@type": "Person",
          name: "Gage Rusch",
        },
        {
          "@type": "Person",
          name: "Leif Keidl",
        },

        {
          "@type": "Person",
          name: "Tommy Welling",
        },
        {
          "@type": "Person",
          name: "Koy Moseler",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Ortho-Kinetics",
      url: "https://orthokinetics.org",
      publisher: {
        "@type": "Organization",
        name: "Ortho-Kinetics Technologies, LLC",
        url: "https://orthokinetics.org",
      },
    },
  ];

  return (
    <>
      <Helmet>
        <title>Ortho-Kinetics | Engineering Solutions for Orthodontics</title>
        <meta
          name="description"
          content="Ortho-Kinetics develops precision software and engineering-driven systems designed to support modern orthodontic workflows and clinical decision-making."
        />
        <meta property="og:title" content="Ortho-Kinetics" />
        <meta
          property="og:description"
          content="Engineering-driven orthodontic technology."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orthokinetics.org" />
        <meta
          property="og:image"
          content="https://orthokinetics.org/preview.png"
        />
        <meta property="og:site_name" content="Ortho-Kinetics" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ortho-Kinetics" />
        <meta
          name="twitter:description"
          content="Engineering-driven orthodontic technology."
        />
        <meta
          name="twitter:image"
          content="https://orthokinetics.org/preview.png"
        />
        <link rel="canonical" href="https://orthokinetics.org" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      <main className="container">
        <section className="hero" aria-label="Orthokinetics hero">
          <img className="hero-img" src={teamPhoto} alt="Ortho-Kinetics team" />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content">
            <h1>Engineering-Driven Solutions for Orthodontics</h1>
            <p>
              Precision-focused software built to support accurate analysis and
              informed clinical decisions.
            </p>

            <div className="hero-actions">
              <a className="hero-btn primary" href="/contact">
                Contact
              </a>
              <a className="hero-btn secondary" href="/about">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section className="home-below" aria-label="Landing page intro">
          <p className="hint">
            We’re building practical tools that blend software, systems, and
            engineering into a modern orthodontic workflow.
          </p>

          <div className="quick-row">
            <div className="quick-card">
              <strong>Development updates</strong>
              <span>Renderings and demonstrations of prototypes.</span>
            </div>
            <div className="quick-card">
              <strong>Focus</strong>
              <span>
                Engineering-first work across software, systems, and design.
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
