// DevelopmentPage.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "./Navbar.jsx";
import "./DevelopmentPage.css";

// 1) “CAD box / casing” render
import casingRender from "../assets/ok-asset1.png";

// 2) Exploded view (placeholder for now)
//    Replace this import with your real exploded-view image when you have it.
import explodedRender from "../assets/ok-asset1.png";

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
          <p className="dev-eyebrow">{eyebrow}</p>
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
          sectionRef={casingRef}
          eyebrow="Enclosure"
          title="Casing concept (box)"
          desc="Early enclosure work focused on clean lines, manufacturable geometry, and a form factor that makes integration straightforward."
          bullets={[
            { t: "Manufacturable geometry", d: "Designed with realistic tolerances and assembly in mind." },
            { t: "Integration-first", d: "Clear mounting/IO intent so internal systems can evolve without redoing the shell." },
            { t: "Iterative refinement", d: "Fast revisions driven by fit, function, and visual clarity." },
          ]}
          imgSrc={casingRender}
          captionTitle="Enclosure CAD (concept)"
          captionBody="High-contrast render for readability; lighting kept intentionally subtle."
        />

        <DeviceShowcase
          sectionRef={explodedRef}
          eyebrow="CAD — Exploded view"
          title="Exploded assembly (coming next)"
          desc="Next up is an exploded view to communicate how the system stacks together—fast to understand, easy to iterate."
          bullets={[
            { t: "Assembly clarity", d: "Shows how parts relate without a wall of text." },
            { t: "Revision-friendly", d: "Makes it obvious what changes impact what." },
            { t: "Documentation-ready", d: "Useful for internal notes and external demos." },
          ]}
          imgSrc={explodedRender}
          captionTitle="Exploded view (placeholder)"
          captionBody="Swap this image when your exploded render is ready."
          flip
        />

        <section className="dev-section" aria-label="Next steps">
          <div className="dev-section-inner">
            <h2>Next steps</h2>
            <div className="cards">
              <article className="card">
                <h3>More visuals</h3>
                <p>Additional CAD snapshots, exploded assemblies, and quick turn variations.</p>
              </article>
              <article className="card">
                <h3>Motion</h3>
                <p>Subtle scroll-driven animation and short loops to highlight key mechanisms.</p>
              </article>
              <article className="card">
                <h3>Technical notes</h3>
                <p>Short, concrete write-ups: what changed, why it changed, and what’s next.</p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default DevelopmentPage;

