import Navbar from "../../components/Navbar.jsx";
import "./LandingPage.css";
import teamPhoto from "../../assets/images/team/ortho-team.jpg";
import heroVideo from "../../assets/videos/placeholder.mp4";
import fp1Image from "../../assets/images/engineering/fp1.png";
import { Helmet } from "react-helmet-async";

function LandingPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Ortho-Kinetics Technologies, LLC",
      alternateName: ["Ortho-Kinetics", "Orthokinetics", "OrthoKinetics"],
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
        { "@type": "Person", name: "Gage Rusch" },
        { "@type": "Person", name: "Leif Keidl" },
        { "@type": "Person", name: "Tommy Welling" },
        { "@type": "Person", name: "Koy Moseler" },
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
        <meta property="og:description" content="Engineering-driven orthodontic technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orthokinetics.org" />
        <meta property="og:image" content="https://orthokinetics.org/preview.png" />
        <meta property="og:site_name" content="Ortho-Kinetics" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ortho-Kinetics" />
        <meta name="twitter:description" content="Engineering-driven orthodontic technology." />
        <meta name="twitter:image" content="https://orthokinetics.org/preview.png" />

        <link rel="canonical" href="https://orthokinetics.org" />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="landing-page">
        <Navbar />

        <section className="landing-hero">
          <div className="landing-hero__media">
            <img
              className="landing-hero__fallback"
              src={teamPhoto}
              alt="Ortho-Kinetics team"
            />

            <video
              className="landing-hero__video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={teamPhoto}
              aria-label="Ortho-Kinetics hero video"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="landing-hero__overlay" />
          </div>

          <div className="landing-hero__headline-wrap">
            <h1 className="landing-hero__headline">
              Real-Time Permanent Retainer Fabrication
            </h1>
          </div>
        </section>

        <section className="landing-hero__below">
          <p className="landing-hero__subtext">
            Precision-focused solution built to support accurate analysis and cut down on chair time.          </p>
        </section>

        <section className="landing-engineering">

          <div className="landing-engineering__media">
            <img
              src={fp1Image}
              alt="Permanent retainer engineering visualization"
              className="landing-engineering__image"
            />
          </div>

          <div className="landing-engineering__content">
            <p className="landing-engineering__paragraph">
              Our engineering approach focuses on translating orthodontic
              workflows into precise, fabrication-ready systems.
              By combining process-driven design
              and clinically informed software development, Ortho-Kinetics
              is building tools intended to improve consistency,
              accelerate production, and support more reliable retainer
              fabrication from digital scan to ready-made retainer.            </p>
          </div>

        </section>

        <section className="landing-metric">

          <div className="landing-metric__figure">
            50%
          </div>

          <div className="landing-metric__label">
            Reduction in fabrication time compared to existing solutions.
          </div>

        </section>

        <section className="landing-hero__below landing-hero__below--actions">
          <div className="landing-hero__actions">

            <a
              className="landing-hero__button landing-hero__button--primary"
              href="/contact"
            >
              Contact
            </a>

            <a
              className="landing-hero__button landing-hero__button--secondary"
              href="/development"
            >
              Learn more
            </a>

          </div>
        </section>

      </div>
    </>
  );
}

export default LandingPage;
