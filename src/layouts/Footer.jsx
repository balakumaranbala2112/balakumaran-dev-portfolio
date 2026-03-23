// src/components/layouts/Footer.jsx

import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/components/layouts/Footer.css";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Resume", path: "/resume" },
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
    href: "https://linkedin.com/in/balakumaran2112",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/balakumaran_dev",
    icon: <FaXTwitter />,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__rule" />

      {/* copyright */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {new Date().getFullYear()} Balakumaran K
        </p>
      </div>
    </footer>
  );
}
