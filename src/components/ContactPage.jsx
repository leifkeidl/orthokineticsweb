import Navbar from "./Navbar.jsx";
import "./ContactPage.css";

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-container">
        <h1>Contact</h1>

        <div className="contact-card">
          <h2>Leif Keidl</h2>
          <p>Phone: <a href="tel:2623478180">262-347-8180</a></p>
          <p>Email: <a href="mailto:leifkeidl3@gmail.com">leifkeidl3@gmail.com</a></p>
        </div>

        <div className="contact-card">
          <h2>Gage Rusch</h2>
          <p>Phone: <a href="tel:2622001215">262-200-1215</a></p>
          <p>Email: <a href="mailto:gagerusch@gmail.com">gagerusch@gmail.com</a></p>
        </div>

        <a
          className="email-button"
          href="mailto:leifkeidl3@gmail.com?subject=Orthokinetics Inquiry"
        >
          Email Us
        </a>
      </main>
    </>
  );
}

export default ContactPage;

