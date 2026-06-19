import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/index";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
.glass-navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 60px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.045);
  backdrop-filter: blur(32px) saturate(200%);
  -webkit-backdrop-filter: blur(32px) saturate(200%);
  border-bottom: 0.5px solid rgba(255,255,255,0.09);
  box-shadow: 0 1px 40px rgba(0,0,0,0.45), inset 0 0.5px 0 rgba(255,255,255,0.12);
}

/* ── Hamburger ── */
.glass-hamburger {
  width: 36px !important; height: 36px !important;
  border-radius: 10px !important;
  border: 0.5px solid rgba(255,255,255,0.11) !important;
  background: transparent !important;
  cursor: pointer;
  display: flex !important; align-items: center !important; justify-content: center !important;
  flex-direction: column; gap: 5px;
  padding: 0 !important;
  flex-shrink: 0;
  margin-right: 16px;
  transition: background 0.18s ease, transform 0.14s ease, border-color 0.18s ease !important;
}
.glass-hamburger:hover { background: rgba(255,255,255,0.08) !important; border-color: rgba(255,255,255,0.22) !important; }
.glass-hamburger:active { transform: scale(0.89) !important; background: rgba(255,255,255,0.12) !important; }
.glass-hamburger span {
  display: block; width: 15px; height: 1.5px;
  background: rgba(255,255,255,0.78);
  border-radius: 2px;
  transition: transform 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease, width 0.22s ease;
  transform-origin: center;
  pointer-events: none;
}
.glass-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.glass-hamburger.open span:nth-child(2) { opacity: 0; width: 0; }
.glass-hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

/* ── Brand ── */
.glass-brand {
  font-size: 15.5px; font-weight: 700;
  color: rgba(255,255,255,0.92);
  letter-spacing: -0.4px;
  display: flex; align-items: center; gap: 9px;
  text-decoration: none;
  flex-shrink: 0;
  user-select: none;
  transition: opacity 0.18s ease;
}
.glass-brand:hover { opacity: 0.72; }

.glass-brand-mark {
  width: 26px; height: 26px;
  border-radius: 8px;
  background: linear-gradient(135deg, #a78bfa 0%, #6366f1 60%, #4f46e5 100%);
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 12px rgba(99,102,241,0.45);
  flex-shrink: 0;
}
.glass-brand-mark svg {
  width: 13px; height: 13px;
  fill: rgba(255,255,255,0.95);
}

/* ── Desktop nav center ── */
.glass-nav-center {
  flex: 1;
  display: flex; align-items: center; justify-content: center; gap: 1px;
}

.glass-nav-link {
  font-size: 13px; font-weight: 500;
  color: rgba(255,255,255,0.52);
  padding: 6px 12px; border-radius: 8px;
  cursor: pointer; text-decoration: none;
  display: flex; align-items: center; gap: 4px;
  letter-spacing: -0.1px; user-select: none;
  transition: color 0.18s ease, background 0.18s ease, transform 0.14s ease !important;
  background: transparent !important; border: none !important;
  font-family: inherit;
}
.glass-nav-link:hover { color: rgba(255,255,255,0.92) !important; background: rgba(255,255,255,0.07) !important; }
.glass-nav-link:active { transform: scale(0.93) !important; color: rgba(255,255,255,0.92) !important; }

/* ── Mega menu ── */
.glass-mega-wrap { position: relative; }
.glass-mega-menu {
  position: absolute;
  top: calc(100% + 14px); left: 50%;
  transform: translateX(-50%) translateY(-10px);
  width: 520px;
  background: rgba(9,9,18,0.96);
  backdrop-filter: blur(40px) saturate(220%);
  -webkit-backdrop-filter: blur(40px) saturate(220%);
  border: 0.5px solid rgba(255,255,255,0.10);
  border-radius: 20px;
  box-shadow:
    0 20px 80px rgba(0,0,0,0.65),
    0 0 0 0.5px rgba(255,255,255,0.04),
    inset 0 0.5px 0 rgba(255,255,255,0.14);
  padding: 14px;
  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 3px;
  opacity: 0; pointer-events: none;
  transition: opacity 0.24s ease, transform 0.24s cubic-bezier(0.4,0,0.2,1);
  z-index: 200;
}
.glass-mega-menu.open {
  opacity: 1; pointer-events: all;
  transform: translateX(-50%) translateY(0);
}

.glass-mega-item {
  display: flex; align-items: flex-start; gap: 10px;
  padding: 10px; border-radius: 11px; cursor: pointer; text-decoration: none;
  transition: background 0.16s ease, transform 0.13s ease;
}
.glass-mega-item:hover { background: rgba(255,255,255,0.06); }
.glass-mega-item:active { transform: scale(0.95); background: rgba(255,255,255,0.10); }

.glass-mega-icon {
  width: 32px; height: 32px; border-radius: 9px;
  background: rgba(255,255,255,0.06);
  border: 0.5px solid rgba(255,255,255,0.08);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  transition: background 0.16s ease;
}
.glass-mega-item:hover .glass-mega-icon { background: rgba(99,102,241,0.18); border-color: rgba(99,102,241,0.30); }

/* ── Single CTA button ── */
.glass-cta {
  font-size: 13px !important; font-weight: 600 !important;
  color: #1a1a1a !important;
  padding: 7px 18px !important; border-radius: 10px !important;
  border: none !important;
  background: #fffff0 !important;
  cursor: pointer; font-family: inherit; letter-spacing: -0.1px; user-select: none;
  box-shadow: 0 0 0 1px rgba(255,255,240,0.4), 0 2px 16px rgba(255,255,240,0.25), inset 0 0.5px 0 rgba(255,255,255,0.5) !important;
  transition: filter 0.18s ease, transform 0.13s ease, box-shadow 0.18s ease !important;
  position: relative; overflow: hidden;
  flex-shrink: 0;
}
.glass-cta::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 60%);
  pointer-events: none;
}
.glass-cta:hover {
  filter: brightness(0.90) !important;
  box-shadow: 0 0 0 1px rgba(255,255,240,0.5), 0 4px 22px rgba(255,255,240,0.35), inset 0 0.5px 0 rgba(255,255,255,0.5) !important;
}
.glass-cta:active {
  transform: scale(0.91) !important;
  filter: brightness(0.82) !important;
  box-shadow: 0 0 0 1px rgba(255,255,240,0.3), 0 1px 8px rgba(255,255,240,0.2) !important;
}

/* ── Overlay ── */
.glass-overlay {
  position: fixed; inset: 0; z-index: 180;
  background: rgba(0,0,0,0);
  pointer-events: none;
  transition: background 0.34s ease;
}
.glass-overlay.open { background: rgba(0,0,0,0.55); pointer-events: all; }

/* ── Sidebar ── */
.glass-sidebar {
  position: fixed; top: 0; left: 0;
  z-index: 190;
  width: 272px; height: 100vh;
  background: rgba(8,8,18,0.96);
  backdrop-filter: blur(40px) saturate(220%);
  -webkit-backdrop-filter: blur(40px) saturate(220%);
  border-right: 0.5px solid rgba(255,255,255,0.10);
  box-shadow: 12px 0 60px rgba(0,0,0,0.60), inset -0.5px 0 0 rgba(255,255,255,0.05);
  transform: translateX(-100%);
  transition: transform 0.36s cubic-bezier(0.4,0,0.2,1);
  display: flex; flex-direction: column;
  overflow: hidden;
}
.glass-sidebar.open { transform: translateX(0); }

.glass-sidebar-header {
  height: 60px;
  display: flex; align-items: center; padding: 0 16px; gap: 12px;
  border-bottom: 0.5px solid rgba(255,255,255,0.07);
  flex-shrink: 0;
}

.glass-sidebar-close {
  width: 28px !important; height: 28px !important;
  border-radius: 8px !important;
  border: 0.5px solid rgba(255,255,255,0.10) !important;
  background: transparent !important;
  cursor: pointer;
  display: flex !important; align-items: center !important; justify-content: center !important;
  color: rgba(255,255,255,0.45);
  padding: 0 !important;
  transition: background 0.16s ease, transform 0.13s ease, color 0.16s ease !important;
  flex-shrink: 0;
}
.glass-sidebar-close:hover { background: rgba(255,255,255,0.08) !important; color: rgba(255,255,255,0.90) !important; }
.glass-sidebar-close:active { transform: scale(0.86) !important; }

.glass-sidebar-body {
  flex: 1; overflow-y: auto; padding: 10px 8px;
  scrollbar-width: none;
}
.glass-sidebar-body::-webkit-scrollbar { display: none; }

.glass-sidebar-label {
  font-size: 10px; font-weight: 600;
  color: rgba(255,255,255,0.22);
  letter-spacing: 1px; text-transform: uppercase;
  padding: 0 10px; margin: 16px 0 5px;
}
.glass-sidebar-label:first-child { margin-top: 6px; }

.glass-s-link {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px;
  cursor: pointer; text-decoration: none;
  color: rgba(255,255,255,0.55);
  font-size: 13px; font-weight: 500;
  transition: background 0.16s ease, color 0.16s ease, transform 0.13s ease;
  user-select: none;
}
.glass-s-link:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.92); }
.glass-s-link:active { transform: scale(0.97); background: rgba(255,255,255,0.10); }
.glass-s-link.active {
  background: rgba(99,102,241,0.15);
  color: rgba(167,162,255,0.95);
  box-shadow: inset 0 0 0 0.5px rgba(99,102,241,0.25);
}

.glass-s-accordion {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 10px; border-radius: 10px; cursor: pointer;
  color: rgba(255,255,255,0.55);
  font-size: 13px; font-weight: 500;
  width: 100%; background: transparent; border: none; font-family: inherit;
  transition: background 0.16s ease, color 0.16s ease, transform 0.13s ease;
  user-select: none;
}
.glass-s-accordion:hover { background: rgba(255,255,255,0.06); color: rgba(255,255,255,0.92); }
.glass-s-accordion:active { transform: scale(0.97); }

.glass-s-sub {
  overflow: hidden; max-height: 0;
  transition: max-height 0.30s cubic-bezier(0.4,0,0.2,1), opacity 0.24s ease;
  opacity: 0;
}
.glass-s-sub.open { max-height: 420px; opacity: 1; }

.glass-s-sub-item {
  display: flex; align-items: center;
  padding: 6px 10px 6px 36px; border-radius: 8px;
  cursor: pointer; text-decoration: none;
  color: rgba(255,255,255,0.38);
  font-size: 12.5px; font-weight: 500;
  transition: background 0.15s ease, color 0.15s ease, transform 0.12s ease;
}
.glass-s-sub-item:hover { background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.80); }
.glass-s-sub-item:active { transform: scale(0.97); }

.glass-sidebar-footer {
  padding: 14px 8px;
  border-top: 0.5px solid rgba(255,255,255,0.06);
  flex-shrink: 0;
}

/* Footer single CTA */
.glass-sb-cta {
  font-size: 13px !important; font-weight: 600 !important;
  color: #1a1a1a !important;
  padding: 10px 16px !important; border-radius: 11px !important;
  border: none !important; width: 100% !important;
  background: #fffff0 !important;
  cursor: pointer; font-family: inherit;
  box-shadow: 0 0 0 1px rgba(255,255,240,0.35), 0 2px 16px rgba(255,255,240,0.22), inset 0 0.5px 0 rgba(255,255,255,0.5) !important;
  transition: filter 0.18s ease, transform 0.13s ease, box-shadow 0.18s ease !important;
  position: relative; overflow: hidden;
}
.glass-sb-cta::before {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, transparent 60%);
  pointer-events: none;
}
.glass-sb-cta:hover {
  filter: brightness(0.85) !important;
  box-shadow: 0 0 0 1px rgba(255,255,240,0.5), 0 4px 24px rgba(255,255,240,0.32), inset 0 0.5px 0 rgba(255,255,255,0.5) !important;
}
.glass-sb-cta:active {
  transform: scale(0.94) !important;
  filter: brightness(0.82) !important;
}

/* ── Responsive ── */
.glass-desktop-only { display: flex; }
.glass-mobile-only  { display: none; }

@media (max-width: 767px) {
  .glass-desktop-only { display: none !important; }
  .glass-mobile-only  { display: flex !important; }
}
`;

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const MENU_ITEMS = [
  { title: "Products",       description: "Find the perfect solution.",       icon: SquaresPlusIcon, to: "/products" },
  { title: "About Us",       description: "Meet and learn about our team.",   icon: UserGroupIcon,   to: "/about" },
  { title: "Blog",           description: "Tips, articles and opinions.",     icon: Bars4Icon,       to: "/blog" },
  { title: "Services",       description: "Achieve your goals with us.",      icon: SunIcon,         to: "/services" },
  { title: "Support",        description: "Reach out for assistance.",        icon: GlobeAmericasIcon, to: "/support" },
  { title: "Contact",        description: "Get in touch anytime.",            icon: PhoneIcon,       to: "/contact" },
  { title: "News",           description: "Stay up to date.",                 icon: NewspaperIcon,   to: "/news" },
  { title: "Catalog",        description: "Explore our full catalog.",        icon: RectangleGroupIcon, to: "/catalog" },
  { title: "Special Offers", description: "Limited-time deals & bundles.",    icon: TagIcon,         to: "/offers" },
];

// ─────────────────────────────────────────────────────────────────────────────
// Style injector
// ─────────────────────────────────────────────────────────────────────────────
function useStyles() {
  React.useLayoutEffect(() => {
    const id = "glass-navbar-v3";
    if (document.getElementById(id)) return;
    const el = document.createElement("style");
    el.id = id;
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => el.remove();
  }, []);
}

// ─────────────────────────────────────────────────────────────────────────────
// Chevron
// ─────────────────────────────────────────────────────────────────────────────
function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      style={{
        width: 11, height: 11,
        stroke: "currentColor", fill: "none", strokeWidth: 2.5,
        transition: "transform 0.24s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0, marginLeft: "auto",
      }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Brand mark icon
// ─────────────────────────────────────────────────────────────────────────────
function BrandMark() {
  return (
    <div className="glass-brand-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Desktop Mega Menu
// ─────────────────────────────────────────────────────────────────────────────
function MegaMenu() {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    function outside(e) { if (ref.current && !ref.current.contains(e.target)) setOpen(false); }
    function esc(e) { if (e.key === "Escape") setOpen(false); }
    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("keydown", esc);
    };
  }, []);

  return (
    <div ref={ref} className="glass-mega-wrap">
      <Button
        className="glass-nav-link"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="true"
        aria-expanded={open}
      >
        Resources
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          style={{
            width: 11, height: 11,
            stroke: "currentColor", fill: "none", strokeWidth: 2.5,
            transition: "transform 0.24s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </Button>

      <div className={`glass-mega-menu${open ? " open" : ""}`} role="menu">
        {MENU_ITEMS.map(({ title, description, icon, to }, i) => (
          <Link
            key={i}
            // to={to}
            to="/"
            className="glass-mega-item"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            <div className="glass-mega-icon" aria-hidden="true">
              {React.createElement(icon, {
                style: { width: 14, height: 14, color: "rgba(255,255,255,0.58)" },
              })}
            </div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "rgba(255,255,255,0.86)", lineHeight: 1.3 }}>
                {title}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.34)", lineHeight: 1.4, marginTop: 2 }}>
                {description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar icons
// ─────────────────────────────────────────────────────────────────────────────
const iStyle = { width: 15, height: 15, stroke: "currentColor", fill: "none", strokeWidth: 1.8, flexShrink: 0, opacity: 0.70 };

const HomeIcon     = () => <svg viewBox="0 0 24 24" style={iStyle} aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const BookIcon     = () => <svg viewBox="0 0 24 24" style={iStyle} aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>;
const PhoneIconSm  = () => <svg viewBox="0 0 24 24" style={iStyle} aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.44 2 2 0 0 1 3.56 1.25h3a2 2 0 0 1 2 1.72 12.77 12.77 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45 12.77 12.77 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
const UserIcon     = () => <svg viewBox="0 0 24 24" style={iStyle} aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const SettingsIcon = () => <svg viewBox="0 0 24 24" style={iStyle} aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93A10 10 0 0 0 12 2a10 10 0 0 0-7.07 2.93 10 10 0 0 0 0 14.14A10 10 0 0 0 12 22a10 10 0 0 0 7.07-2.93 10 10 0 0 0 0-14.14z"/></svg>;

// ─────────────────────────────────────────────────────────────────────────────
// Sidebar
// ─────────────────────────────────────────────────────────────────────────────
function Sidebar({ open, onClose }) {
  const [accOpen, setAccOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <div
        className={`glass-overlay${open ? " open" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`glass-sidebar${open ? " open" : ""}`}
        id="glass-sidebar"
        aria-label="Navigation sidebar"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="glass-sidebar-header">
          <Button
            className="glass-sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <svg viewBox="0 0 24 24" style={{ width: 13, height: 13, stroke: "currentColor", fill: "none", strokeWidth: 2.5 }}>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Button>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <BrandMark />
            <span style={{ fontSize: 14.5, fontWeight: 700, color: "rgba(255,255,255,0.88)", letterSpacing: "-0.3px" }}>
              SPA
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="glass-sidebar-body">
          <div className="glass-sidebar-label">Navigation</div>

          <Link className="glass-s-link active" 
          to="/" 
          onClick={onClose}
          >
          <HomeIcon /> Home
          </Link>

          {/* Accordion */}
          <Button
            className="glass-s-accordion"
            onClick={() => setAccOpen(v => !v)}
            aria-expanded={accOpen}
          >
            <BookIcon />
            Resources
            <Chevron open={accOpen} />
          </Button>
          <div className={`glass-s-sub${accOpen ? " open" : ""}`}>
            {MENU_ITEMS.map(({ title, to }, i) => (
              <Link 
              key={i} 
              className="glass-s-sub-item" 
              // to={to} 
              to="/" 
              onClick={onClose}>
                {title}
              </Link>
            ))}
          </div>

          <Link className="glass-s-link" to="/" onClick={onClose}>
            <PhoneIconSm /> Contact Us
          </Link>

          <div className="glass-sidebar-label">Account</div>

          <Link className="glass-s-link" to="/" onClick={onClose}>
            <UserIcon /> Profile
          </Link>
          <Link className="glass-s-link" to="/" onClick={onClose}>
            <SettingsIcon /> Settings
          </Link>
        </div>

        {/* Footer — single CTA */}
        <div className="glass-sidebar-footer">
          <Link 
          to="/login" 
          onClick={onClose}
          >
            <Button className="glass-sb-cta">
              Get Started
            </Button>
          </Link>
        </div>
      </aside>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Navbar
// ─────────────────────────────────────────────────────────────────────────────
export default function NavbarGlass() {
  useStyles();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    function onResize() { if (window.innerWidth >= 768) setSidebarOpen(false); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <nav className="glass-navbar" aria-label="Main navigation">

        {/* Hamburger — left of brand */}
        <Button
          className={`glass-hamburger${sidebarOpen ? " open" : ""}`}
          onClick={() => setSidebarOpen(v => !v)}
          aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          aria-expanded={sidebarOpen}
          aria-controls="glass-sidebar"
        >
          <span /><span /><span />
        </Button>

        {/* Brand */}
        <Link className="glass-brand" to="/" aria-label="Home">
          <BrandMark />
          SPAAAAAA
        </Link>

        {/* Desktop center links */}
        <div className="glass-nav-center glass-desktop-only" role="menubar">
          <Link className="glass-nav-link" to="/" role="menuitem">Home</Link>
          <MegaMenu />
          <Link className="glass-nav-link" to="/contact" role="menuitem">Contact Us</Link>
        </div>

        {/* Single CTA
        <div className="glass-desktop-only" style={{ flexShrink: 0, marginLeft: 8 }}>
          <Button className="glass-cta" onClick={() => navigate("/login")}>
            Get Started
          </Button>
        </div> */}

      </nav>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}