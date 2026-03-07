import Navbar from "./Navbar.jsx";
import "./ContactPage.css";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Ortho-Kinetics | General Inquiries</title>

        <meta
          name="description"
          content="Contact Ortho-Kinetics for partnerships, clinical inquiries, and general questions about our orthodontic technology platform."
        />

        <link rel="canonical" href="https://orthokinetics.org/contact" />

        <meta property="og:title" content="Contact Ortho-Kinetics" />
        <meta
          property="og:description"
          content="Reach out to Ortho-Kinetics for partnerships, clinical inquiries, and general questions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://orthokinetics.org/contact" />
        <meta property="og:image" content="https://orthokinetics.org/preview.png" />
        <meta property="og:site_name" content="Ortho-Kinetics" />
      </Helmet>

      <Navbar />

      <main className="contact-container">
        <section className="contact-hero">
          <h1>Contact Ortho-Kinetics</h1>
          <p>
            For partnerships, clinical inquiries, or general questions about our
            platform, please reach out to our team. We look forward to connecting.
          </p>
        </section>

        <section className="contact-card">
          <h2>General Inquiries</h2>
          <p>Email us at:</p>

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
