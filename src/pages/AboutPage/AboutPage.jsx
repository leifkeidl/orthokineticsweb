import Navbar from "../../components/Navbar.jsx"
import "./AboutPage.css";
import { Helmet } from "react-helmet-async";
import leifPhoto from "../../assets/images/people/leif2.jpg";
import gagePhoto from "../../assets/images/people/gage3.jpg";
import tommyPhoto from "../../assets/images/people/tommy2.jpg";
import koyPhoto from "../../assets/images/people/koy1-retouched.jpg";

function AboutPage() {
  const teamMembers = [
    {
      name: "Gage Rusch",
      role: "Project Lead",
      image: gagePhoto,
      alt: "Gage Rusch",
      bio: "Engineer focused on biomechanics, material behavior, and the deformation characteristics of permanent and non-permanent systems.",
      email: "gage.rusch@orthokinetics.org",
      linkedin: "https://www.linkedin.com/in/gage-rusch-1a1733290/",
      imageUrl: "https://orthokinetics.org/images/team/gage3.jpg",
    },
    {
      name: "Leif Keidl",
      role: "Technical Lead",
      image: leifPhoto,
      alt: "Leif Keidl",
      bio: "Technical lead with a background in cybersecurity, software development, and IT infrastructure, supporting secure systems and full-stack implementation.",
      email: "leif.keidl@orthokinetics.org",
      linkedin: "https://www.linkedin.com/in/leif-keidl-5b8784302/",
      imageUrl: "https://orthokinetics.org/images/team/leif2.jpg",
    },
    {
      name: "Tommy Welling",
      role: "Engineer",
      image: tommyPhoto,
      alt: "Tommy Welling",
      bio: "Engineering Physics major specializing in electronics, digital systems, and hands-on technical problem solving.",
      email: "tommy.welling@orthokinetics.org",
      linkedin: "https://www.linkedin.com/in/tdwelling/",
      imageUrl: "https://orthokinetics.org/images/team/tommy2.jpg",
    },
    {
      name: "Koy Moseler",
      role: "Engineer",
      image: koyPhoto,
      alt: "Koy Moseler",
      bio: "Engineer focused on energy systems, power electronics, and practical hardware development for real-world technical applications.",
      email: "koy.moseler@orthokinetics.org",
      linkedin: "https://www.linkedin.com/in/koy-moseler-233b582a5/",
      imageUrl: "https://orthokinetics.org/images/team/koy1-retouched.jpg",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Ortho-Kinetics",
    url: "https://orthokinetics.org/about",
    description:
      "Meet the Ortho-Kinetics engineering and development team building automated orthodontic manufacturing systems and same-visit retainer technology.",
    mainEntity: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.bio,
      image: member.imageUrl,
      email: `mailto:${member.email}`,
      sameAs: [member.linkedin],
      worksFor: {
        "@type": "Organization",
        name: "Ortho-Kinetics",
        url: "https://orthokinetics.org",
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>About Ortho-Kinetics | Engineering & Development Team</title>
        <meta
          name="description"
          content="Meet the Ortho-Kinetics engineering and development team building automated orthodontic manufacturing systems and same-visit retainer technology."
        />
        <meta
          name="keywords"
          content="Ortho-Kinetics team, Gage Rusch, Leif Keidl, Tommy Welling, Koy Moseler, orthodontic engineering, power electronics, cybersecurity, software development"
        />
        <meta property="og:title" content="About Ortho-Kinetics" />
        <meta
          property="og:description"
          content="Meet the team behind Ortho-Kinetics and the work driving our engineering and development efforts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orthokinetics.org/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://orthokinetics.org/about" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      <main className="about-container">
        <section className="about-hero">
          <h1>About Ortho-Kinetics</h1>
        <p>
  Ortho-Kinetics was founded in Waukesha, Wisconsin in 2025 with the goal of improving orthodontic workflows.
  By combining mechanical design, electronics, and software development, we focus on advancing orthodontic
  manufacturing and clinical processes.

  <br /><br />

  Integrating hardware and software development within a single team allows ideas to move efficiently
  from concept to working systems, without fragmented development or unnecessary external handoffs.
</p> 
        </section>

        <section className="team-section">
          <h2>Meet the Team</h2>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article className="team-card" key={member.name}>
                <img src={member.image} alt={member.alt} />
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>

                <div className="button-row">
                  <a
                    href={`mailto:${member.email}`}
                    className="linkedin-btn"
                    aria-label={`Email ${member.name}`}
                  >
                    {member.email}
                  </a>
                  <a
                    href={member.linkedin}
                    className="linkedin-btn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} LinkedIn profile`}
                  >
                    LinkedIn
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutPage;
