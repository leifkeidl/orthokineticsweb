import Navbar from "../../components/Navbar.jsx";
import "./DevelopmentPage.css";
import { Helmet } from "react-helmet-async";

import casingRender from "../../assets/images/engineering/ok-asset1.png";
import explodedRender from "../../assets/images/engineering/fp4.png";
import appScreenshot from "../../assets/images/software/app2.png";

function DeviceShowcase({
  title,
  desc,
  imgSrc,
  flip = false,
}) {
  return (
    <section className="dev-block" aria-label={title}>
      <div className={"dev-block-inner" + (flip ? " flip" : "")}>
        <div className="dev-copy">
          <h2>{title}</h2>
          <p className="dev-lede">{desc}</p>
        </div>

        <div className="dev-visual" aria-hidden="true">
          <img
            className="device-img"
            src={imgSrc}
            alt=""
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
}

function DevelopmentPage() {
  return (
    <>
      <Helmet>
        <title>Ortho-Kinetics Development | Automated Orthodontic Manufacturing</title>
        <meta
          name="description"
          content="Engineering development of the Ortho-Kinetics system including compact device design, software tools, and automated orthodontic appliance workflows."
        />
      </Helmet>

      <Navbar />

      <main className="dev">
        <header className="dev-hero" aria-label="Development header">
          <div className="dev-hero-inner">
            <h1>What we’re building</h1>
            <p className="dev-hero-sub">
              A snapshot of the engineering work in progress.
            </p>
          </div>
        </header>

        <DeviceShowcase
          title="All in One"
          desc="Our compact model is being developed as a narrow, chairside-friendly package focused on reducing footprint, simplifying setup, and fitting more naturally into existing clinical environments without adding unnecessary complexity."
          imgSrc={explodedRender}
        />

        <DeviceShowcase
          title="Smooth Integration"
          desc="The casing is being designed around a cleaner physical profile, compatibility with established workflow expectations, and a quieter overall presence so the system feels practical and unobtrusive in real use."
          imgSrc={casingRender}
          flip
        />

        <section className="dev-shot">
          <div className="dev-shot-inner">
            <h2>Application Preview</h2>

            <div className="shot-shell">
              <img
                className="shot-img"
                src={appScreenshot}
                alt="Application screenshot"
                draggable="false"
              />
            </div>

            <p className="dev-lede dev-shot-text">
              The current software work focuses on giving operators more direct control over model isolation, orientation, and measurement consistency while keeping the interface readable and practical during development.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default DevelopmentPage;
