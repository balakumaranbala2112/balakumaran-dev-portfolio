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
