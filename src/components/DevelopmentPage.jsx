
// DevelopmentPage.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Navbar.jsx";
import "./DevelopmentPage.css";

// 1) “CAD box / casing” render
import casingRender from "../assets/ok-asset1.png";

// 2) Exploded view (placeholder for now)
//    Replace this import with your real exploded-view image when you have it.
import explodedRender from "../assets/EXPLODEPACKAGE2.png";

// NEW: wide screenshot at end
import appScreenshot from "../assets/app1.png";

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function useParallaxProgress(sectionRef) {
  const [scrollY, setScrollY] = useState(0);
  const [rect, setRect] = useState({ top: 0, height: 1 });

  useEffect(() => {
    const updateRect = () => {
      const el = sectionRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const pageTop = window.scrollY + r.top;
      setRect({ top: pageTop, height: Math.max(1, r.height) });
    };

    const onScroll = () => setScrollY(window.scrollY);

    updateRect();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateRect);

    // re-measure after layout settles
    const t = setTimeout(updateRect, 250);

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateRect);
    };
  }, [sectionRef]);

  return useMemo(() => {
    const viewportMid = scrollY + window.innerHeight * 0.48;
    const start = rect.top;
    const end = rect.top + rect.height;
    return clamp((viewportMid - start) / (end - start), 0, 1);
  }, [scrollY, rect.top, rect.height]);
}

function DeviceShowcase({
  sectionRef,
  eyebrow,
  title,
  desc,
  bullets,
  imgSrc,
  captionTitle,
  captionBody,
  flip = false,
}) {
  const p = useParallaxProgress(sectionRef);

  // subtle motion (kept mild)
  const parallaxY = (p - 0.5) * -18; // px
  const parallaxX = (p - 0.5) * 8;   // px
  const tilt = (p - 0.5) * 1.6;      // deg
  const float = Math.sin((window.scrollY || 0) / 210) * 1.6;

  const deviceStyle = {
    transform: `translate3d(${parallaxX}px, ${parallaxY + float}px, 0) rotateZ(${tilt}deg)`,
  };

  return (
    <section ref={sectionRef} className="dev-block" aria-label={title}>
      <div className={"dev-block-inner" + (flip ? " flip" : "")}>
        <div className="dev-copy">
		  
{eyebrow && <p className="dev-eyebrow">{eyebrow}</p>}
          <h2>{title}</h2>
          <p className="dev-lede">{desc}</p>

          <div className="dev-points" role="list">
            {bullets.map((b) => (
              <div className="dev-point" role="listitem" key={b.t}>
                <div className="dot" />
                <div>
                  <h3>{b.t}</h3>
                  <p>{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dev-visual" aria-hidden="true">
          <div className="device-shell">
            <div className="glow" />
            <img
              className="device-img"
              src={imgSrc}
              alt=""
              style={deviceStyle}
              draggable="false"
            />
            <div className="shine" />
          </div>

          <div className="dev-caption">
            <div className="cap-title">{captionTitle}</div>
            <div className="cap-sub">{captionBody}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DevelopmentPage() {
  const casingRef = useRef(null);
  const explodedRef = useRef(null);

  return (
    <>
      <Navbar />

      <main className="dev">
        <header className="dev-hero" aria-label="Development header">
          <div className="dev-hero-inner">
            <p className="dev-hero-kicker">Development</p>
            <h1>What we’re building</h1>
            <p className="dev-hero-sub">
              A snapshot of the engineering work in progress.
            </p>
          </div>
        </header>

        <DeviceShowcase
          sectionRef={explodedRef}
          eyebrow="Exploded Package"
          title="All in One"
          desc="Our compact model demonstrated in a narrow package."
          bullets={[
            { t: "Small Form Factor", d: "93% reduction in size compared to existing models." },
            { t: "Easy Installation", d: "USB-C data transfer cable for simple setup." },
            { t: "Low Profile", d: "Setup in any chairside location." },
          ]}
          imgSrc={explodedRender}
          captionTitle="Enclosure CAD (concept)"
          captionBody="High-contrast render for readability; lighting kept intentionally subtle."
        />

        <DeviceShowcase
          sectionRef={casingRef}
          eyebrow="Casing render"
          title="Smooth Integration"
          desc="Designed to seamlessly integrate into existing workflow."
          bullets={[
            { t: "Simplicity", d: "Clutter-free profile for quick adaptation." },
            { t: "Compatibility", d: "Ability to accept existing wire-feed" },
            { t: "Stealth", d: "Runs while generating minimal noise." },
          ]}
          imgSrc={casingRender}
          captionTitle="Rendering"
          captionBody="Rendering of device casing."
          flip
        />
         
        <section className="dev-shot">
          <div className="dev-shot-inner">
            <p className="dev-eyebrow">Screenshot</p>
            <h2>Application Preview</h2>
            <p className="dev-lede">
             Current UI capture from software development.
            </p>

            <div className="shot-shell">
              <img
                className="shot-img"
                src={appScreenshot}
                alt="Application screenshot"
                draggable="false"
              />
            </div>

            
          </div>
        </section>

      </main>
    </>
  );
}

export default DevelopmentPage;
