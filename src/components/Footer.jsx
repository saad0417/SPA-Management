import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/index";


import {
  EnvelopeIcon,
  ArrowUpRightIcon,
} from "@heroicons/react/24/solid";

// ─────────────────────────────────────────────────────────────────────────────
// Styles — shares the same glass language as NavbarGlass
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
.glass-footer {
  position: relative;
  background: rgba(255,255,255,0.02);
  backdrop-filter: blur(32px) saturate(200%);
  -webkit-backdrop-filter: blur(32px) saturate(200%);
  border-top: 0.5px solid rgba(255,255,255,0.09);
  box-shadow: inset 0 0.5px 0 rgba(255,255,255,0.06), 0 -1px 40px rgba(0,0,0,0.45);
  overflow: hidden;
  padding: 64px 24px 0;
}

/* Cinematic ambient glow — the signature element */
.glass-footer::before {
  content: '';
  position: absolute;
  top: -180px; left: 50%;
  width: 720px; height: 360px;
  transform: translateX(-50%);
  background: radial-gradient(ellipse at center, rgba(99,102,241,0.16) 0%, rgba(99,102,241,0.05) 45%, transparent 75%);
  pointer-events: none;
  filter: blur(10px);
}

.glass-footer-inner {
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
}

/* ── Top: brand (left) + socials (right) ── */
.glass-footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 0.5px solid rgba(255,255,255,0.08);
  flex-wrap: wrap;
}

.glass-footer-brand {
  display: flex; flex-direction: column; gap: 14px;
  max-width: 420px;
}

.glass-footer-brand-row {
  display: flex; align-items: center; gap: 10px;
  text-decoration: none;
}

.glass-footer-brand-mark {
  width: 30px; height: 30px;
  border-radius: 9px;
  background: linear-gradient(135deg, #a78bfa 0%, #6366f1 60%, #4f46e5 100%);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 14px rgba(99,102,241,0.45);
  flex-shrink: 0;
}
.glass-footer-brand-mark svg { width: 15px; height: 15px; fill: rgba(255,255,255,0.95); }

.glass-footer-brand-name {
  font-size: 16.5px; font-weight: 700;
  color: rgba(255,255,255,0.92);
  letter-spacing: -0.4px;
}

.glass-footer-tagline {
  font-size: 13px; line-height: 1.65;
  color: rgba(255,255,255,0.42);
  letter-spacing: -0.1px;
}

/* ── Socials ── */
.glass-footer-socials {
  display: flex; align-items: center; gap: 8px;
  flex-shrink: 0;
}

.glass-social-btn {
  width: 38px !important; height: 38px !important;
  border-radius: 10px !important;
  border: 0.5px solid rgba(255,255,255,0.11) !important;
  background: rgba(255,255,255,0.03) !important;
  cursor: pointer;
  display: flex !important; align-items: center !important; justify-content: center !important;
  color: rgba(255,255,255,0.55);
  padding: 0 !important;
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease, transform 0.13s ease !important;
}
.glass-social-btn:hover {
  background: rgba(99,102,241,0.16) !important;
  border-color: rgba(99,102,241,0.35) !important;
  color: rgba(255,255,255,0.95);
}
.glass-social-btn:active { transform: scale(0.88) !important; }

/* ── Bottom bar ── */
.glass-footer-bottom {
  display: flex; align-items: center; justify-content: space-between;
  padding: 22px 0;
  gap: 16px; flex-wrap: wrap;
}

.glass-footer-copyright {
  font-size: 12px; color: rgba(255,255,255,0.32);
  letter-spacing: -0.05px;
}

.glass-footer-legal {
  display: flex; align-items: center; gap: 22px;
}

.glass-footer-legal-link {
  font-size: 12px; font-weight: 500;
  color: rgba(255,255,255,0.38);
  text-decoration: none;
  transition: color 0.18s ease;
}
.glass-footer-legal-link:hover { color: rgba(255,255,255,0.85); }

/* ── Responsive ── */
@media (max-width: 767px) {
  .glass-footer { padding: 48px 18px 0; }
  .glass-footer-top { flex-direction: column; align-items: flex-start; gap: 24px; }
  .glass-footer-socials { align-self: flex-start; }
  .glass-footer-bottom { flex-direction: column; align-items: flex-start; padding: 20px 0 26px; }
  .glass-footer-legal { gap: 16px; flex-wrap: wrap; }
}
`;

// ─────────────────────────────────────────────────────────────────────────────
// Style injector
// ─────────────────────────────────────────────────────────────────────────────
function useStyles() {
  React.useEffect(() => {
    const id = "glass-footer-v1";
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const el = document.createElement("style");
    el.id = id;
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
}

// ─────────────────────────────────────────────────────────────────────────────
// Brand mark icon (matches navbar)
// ─────────────────────────────────────────────────────────────────────────────
function BrandMark() {
  return (
    <div className="glass-footer-brand-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Social icons (inline SVG, no external icon dependency needed)
// ─────────────────────────────────────────────────────────────────────────────
const socialIconStyle = { width: 15, height: 15, stroke: "currentColor", fill: "none", strokeWidth: 1.8 };

const SOCIALS = [
  {
    label: "X / Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "currentColor" }} aria-hidden="true">
        <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.5-7.2L4.4 22H1.3l8.1-9.3L1 2h7.3l5 6.6L18.9 2zm-1.2 18h1.9L7.4 4H5.4l12.3 16z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" style={socialIconStyle} aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "currentColor" }} aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.07.78 2.15v3.19c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" style={socialIconStyle} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Footer
// ─────────────────────────────────────────────────────────────────────────────
export default function FooterGlass() {
  const navigate = useNavigate();

  useStyles();
  const year = new Date().getFullYear();

  return (
    <footer className="glass-footer" aria-label="Site footer">
      <div className="glass-footer-inner">

        {/* Top: brand (left) + socials (right) */}
        <div className="glass-footer-top">
          <div className="glass-footer-brand">
            <Link className="glass-footer-brand-row" to="/" aria-label="Home">
              <BrandMark />
              <span className="glass-footer-brand-name">SPA</span>
            </Link>
            <p className="glass-footer-tagline">
              Experience exceptional care, soothing treatments, and a peaceful escape from everyday stress.
            </p>
          </div>

          <div className="glass-footer-socials">
            {SOCIALS.map(({ label, href, icon }, i) => (
              <Link key={i} to={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Button
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-social-btn"
                  aria-label={label}
                >
                  {icon}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="glass-footer-bottom">
          <span className="glass-footer-copyright">
            © {year} SPA. All rights reserved.
          </span>
          <div className="glass-footer-legal">
            <Link className="glass-footer-legal-link" to="/">Privacy</Link>
            <Link className="glass-footer-legal-link" to="/">Terms</Link>
            <Link className="glass-footer-legal-link" to="/">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}