import Navbar from "./Navbar.jsx";
import "./AboutPage.css";
import teamPhoto from "../assets/ortho-team.jpg";
import leifPhoto from "../assets/leif2.jpg";
import gagePhoto from "../assets/gage3.jpg";
import tommyPhoto from "../assets/tommy2.jpg";
import koyPhoto from "../assets/koy1-retouched.jpg";





function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-container">

        {/* Mission Section */}
        <section className="about-hero">
          <h1>About Ortho-Kinetics</h1>
          <p>
         The Ortho-Kinetics team brings together expertise in engineering, software development, cybersecurity, and systems design. Our combined backgrounds allow us to move projects from concept to working implementation without relying on external handoffs.
		  </p>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet the Team</h2>

          <div className="team-grid">

            <div className="team-card">
              <img src={gagePhoto} alt="Gage Rusch" />
              <h3>Gage Rusch</h3>
              <p className="role">Project Lead</p>
              <p className="bio">
		  Engineer specializing in biomechanics and permanent/non-permanent deformation of materials.
		               </p>
              <a href="https://www.linkedin.com/in/gage-rusch-1a1733290/" className="linkedin-btn">LinkedIn</a>
            </div>

            <div className="team-card">
              <img src={leifPhoto} alt="Leif Keidl" />
              <h3>Leif Keidl</h3>
              <p className="role">Technical Lead</p>
              <p className="bio">
		  Cybersecurity and computer science background with hands-on experience and a focused interest in IT infrastructure and software development.
              </p>
              <a href="https://www.linkedin.com/in/leif-keidl-5b8784302/" className="linkedin-btn">LinkedIn</a>
            </div>

            <div className="team-card">
              <img src={tommyPhoto} alt="Tommy Welling" />
              <h3>Tommy Welling</h3>
              <p className="role">Engineer</p>
              <p className="bio">
				Engineering Physics major specializing in electronics and digital systems.             </p>
              <a href="https://www.linkedin.com/in/tdwelling/" className="linkedin-btn">LinkedIn</a>
            </div>

            <div className="team-card">
              <img src={koyPhoto} alt="Koy Moseler" />
              <h3>Koy Moseler</h3>
              <p className="role">Engineer</p>
              <p className="bio">
				Energy Systems Engineer with a focus on Power Electonics.
		  </p>
              <a href="https://www.linkedin.com/in/koy-moseler-233b582a5/" className="linkedin-btn">LinkedIn</a>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default AboutPage;

