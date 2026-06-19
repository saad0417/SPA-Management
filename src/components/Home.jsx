import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./index";
import { DotGridSpotlight } from "@/components/index";

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
/* ── Font ─── */

@font-face {
  font-family: 'Lecturis';
  src: url('/fonts/FHLecturisTest-Light.woff2') format('woff2'),
       url('/fonts/FHLecturisTest-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Lecturis';
  src: url('/fonts/FHLecturisTest-Regular.woff2') format('woff2'),
       url('/fonts/FHLecturisTest-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Lecturis';
  src: url('/fonts/FHLecturisTest-Bold.woff2') format('woff2'),
       url('/fonts/FHLecturisTest-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

.glass-hero {
  position: relative;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  padding-top: clamp(96px, 18vh, 180px);
  overflow: hidden;
  text-align: center;
}

/* Ambient cinematic glow behind the heading */
.glass-hero::before {
  content: '';
  position: absolute;
  top: -120px; left: 50%;
  width: 900px; height: 480px;
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 45%, transparent 75%);
  filter: blur(20px);
  pointer-events: none;
}

.glass-hero-eyebrow {
  font-size: 12px; font-weight: 600;
  color: rgba(167,162,255,0.85);
  letter-spacing: 2px; text-transform: uppercase;
  margin-bottom: 18px;
  padding: 6px 14px;
  border-radius: 999px;
  border: 0.5px solid rgba(99,102,241,0.30);
  background: rgba(99,102,241,0.08);
}

.glass-hero-title {
  position: relative;
  font-family: 'Lecturis', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 700;
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  line-height: 1.08;
  letter-spacing: -1.2px;
  color: rgba(255,255,255,0.96);
  margin: 0 0 18px;
  max-width: 880px;
}

.glass-hero-subtitle {
  font-size: clamp(14px, 1.6vw, 17px);
  line-height: 1.65;
  color: rgba(255,255,255,0.46);
  max-width: 540px;
  margin: 0 0 36px;
  letter-spacing: -0.1px;
}

.glass-hero-cta {
  font-family: inherit;
  font-size: 14.5px !important; font-weight: 600 !important;
  color: #fff !important;
  padding: 13px 30px !important; border-radius: 12px !important;
  border: none !important;
  background: linear-gradient(135deg, #7c6fff 0%, #6366f1 55%, #5046e4 100%) !important;
  cursor: pointer; letter-spacing: -0.1px; user-select: none;
  box-shadow: 0 0 0 1px rgba(99,102,241,0.4), 0 4px 28px rgba(99,102,241,0.40), inset 0 0.5px 0 rgba(255,255,255,0.28) !important;
  transition: filter 0.18s ease, transform 0.13s ease, box-shadow 0.18s ease !important;
  position: relative; overflow: hidden;
}
.glass-hero-cta::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 60%);
  pointer-events: none;
}
.glass-hero-cta:hover {
  filter: brightness(1.12) !important;
  box-shadow: 0 0 0 1px rgba(99,102,241,0.5), 0 6px 36px rgba(99,102,241,0.55), inset 0 0.5px 0 rgba(255,255,255,0.28) !important;
}
.glass-hero-cta:active {
  transform: scale(0.93) !important;
  filter: brightness(0.95) !important;
}

/* ── Responsive ── */
@media (max-width: 767px) {
  .glass-hero { padding-top: clamp(64px, 14vh, 100px); padding-bottom: 48px; }
  .glass-hero-title { letter-spacing: -0.6px; }
  .glass-hero-subtitle { padding: 0 8px; }
}

@media (max-width: 420px) {
  .glass-hero-eyebrow { font-size: 11px; padding: 5px 12px; }
  .glass-hero-cta { width: 100%; padding: 13px 0 !important; }
}
`;

// ─────────────────────────────────────────────────────────────────────────────
// Style injector
// ─────────────────────────────────────────────────────────────────────────────
function useStyles() {
  React.useLayoutEffect(() => {
    const id = "glass-hero-v1";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
}

// ─────────────────────────────────────────────────────────────────────────────
// Home / Hero
// ─────────────────────────────────────────────────────────────────────────────
export default function Home() {
  useStyles();
  const navigate = useNavigate();

  return (
    <section className="glass-hero" aria-label="Welcome" style={{ position: "relative" }}>
      <DotGridSpotlight
        dotColor="rgba(255,255,255,0.06)"
        activeDotColor="rgba(124,111,255,0.9)"
        spacing={22}
        interactionRadius={160}
      />

      {/* existing content needs to sit above the canvas */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h1 className="glass-hero-title">Welcome to SPA</h1>
        <p className="glass-hero-subtitle">
          Creating moments of relaxation and renewal through expert care, luxurious treatments, and a commitment to wellness.
        </p>
        <Button className="glass-hero-cta" onClick={() => navigate("/login")}>
          Get Started
        </Button>
      </div>
    </section>
  );
}