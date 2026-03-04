import Navbar from "./Navbar.jsx";
import "./ContactPage.css";

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="contact-container">

        <section className="contact-hero">
          <h1>Contact Us</h1>
          <p>
            For partnerships, clinical inquiries, or general questions about our
            platform, please reach out to our team. We look forward to connecting.
          </p>
        </section>

        <section className="contact-card">
          <h2>General Inquiries</h2>
          <p>
            Email us at:
          </p>

          <a
            className="email-button"
            href="mailto:info@orthokinetics.org?subject=Ortho-Kinetics Inquiry"
          >
            info@orthokinetics.org
          </a>
        </section>

      </main>
    </>
  );
}

export default ContactPage;
