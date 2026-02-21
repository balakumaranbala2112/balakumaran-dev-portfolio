// src/components/Footer.jsx
// Full footer — matches the 2026 portfolio aesthetic.
// Update hrefs, social URLs, and email to your real values.

import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowUpLong,
} from "react-icons/fa6";
import "@/styles/components/Footer.css";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/balakumaranbala2112",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/yourusername",
    icon: <FaXTwitter />,
  },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer">
      {/* ── TOP RULE ────────────────────────────────────────── */}
      <div className="footer__rule" aria-hidden="true" />

      <div className="footer__inner">
        {/* ── LEFT — brand + tagline ───────────────────────── */}
        <div className="footer__brand-col">
          <NavLink to="/" className="footer__brand">
            Balakumaran
          </NavLink>
          <p className="footer__tagline">
            Building scalable web products with
            <br />
            clean code and purposeful design.
          </p>
          <a href="mailto:balakumaran@example.com" className="footer__email">
            balakumaran@example.com
          </a>
        </div>

        {/* ── CENTER — nav links ───────────────────────────── */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <span className="footer__nav-label">Pages</span>
          <ul className="footer__nav-list">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <NavLink to={l.path} className="footer__nav-link">
                  {l.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── RIGHT — social + scroll-to-top ──────────────── */}
        <div className="footer__social-col">
          <span className="footer__nav-label">Connect</span>
          <div className="footer__socials">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="footer__social-link"
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ──────────────────────────────────────── */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} Balakumaran K. — crafted with care.
        </p>
        <button
          className="footer__top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUpLong />
          Back to top
        </button>
      </div>
    </footer>
  );
}
