import Navbar from "./Navbar.jsx";
import "./AboutPage.css";
import teamPhoto from "../assets/ortho-team.jpg";
import leifPhoto from "../assets/leif2.jpg";


function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-container">

        {/* Mission Section */}
        <section className="about-hero">
          <h1>About Orthokinetics</h1>
          <p>
            Ortho-Kinetics is focused on engineering-driven innovation in orthodontic
            technology. Our well-rounded team is building modern medical shit          </p>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>Meet the Team</h2>

          <div className="team-grid">

            <div className="team-card">
              <img src={teamPhoto} alt="Gage Rusch" />
              <h3>Gage Rusch</h3>
              <p className="role">Project Lead</p>
              <p className="bio">
		  Engineer specializing in biomechanics and permanent/non-permanent deformation of materials.
		               </p>
              <a href="#" className="linkedin-btn">LinkedIn</a>
            </div>

            <div className="team-card">
              <img src={leifPhoto} alt="Leif Keidl" />
              <h3>Leif Keidl</h3>
              <p className="role">Technical Lead</p>
              <p className="bio">
		  Cybersecurity and computer science background with hands-on experience and a focused interest in IT infrastructure and software development.
              </p>
              <a href="#" className="linkedin-btn">LinkedIn</a>
            </div>

            <div className="team-card">
              <img src={teamPhoto} alt="Tommy Welling" />
              <h3>Tommy Welling</h3>
              <p className="role">placeholder</p>
              <p className="bio">
				desc              </p>
              <a href="#" className="linkedin-btn">LinkedIn</a>
            </div>

            <div className="team-card">
              <img src={teamPhoto} alt="Koy Moseler" />
              <h3>Koy Moseler</h3>
              <p className="role">Electrical Systems Lead</p>
              <p className="bio">
				desc  
		  </p>
              <a href="#" className="linkedin-btn">LinkedIn</a>
            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default AboutPage;

