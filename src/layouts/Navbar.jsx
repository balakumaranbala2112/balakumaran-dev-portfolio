import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useTheme from "@/hooks/useTheme";
import "../styles/components/layouts/Navbar.css";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaUserAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaCopyright,
  FaAngleDoubleLeft,
  FaWhatsapp,
} from "react-icons/fa";

import { IoHomeSharp } from "react-icons/io5";
import { MdWork, MdContactMail } from "react-icons/md";

/* || Navigation Links */
const NAV_LINKS = [
  { name: "Home", path: "/", icon: <IoHomeSharp /> },
  { name: "About", path: "/about", icon: <FaUserAlt /> },
  { name: "Projects", path: "/projects", icon: <MdWork /> },
  { name: "Resume", path: "/resume", icon: <MdWork /> },
  { name: "Contact", path: "/contact", icon: <MdContactMail /> },
];

/* || Social Links */
const SOCIAL_LINKS = [
  {
    icon: <FaGithub />,
    url: "https://github.com/balakumaranbala2112",
    label: "GitHub",
  },
  {
    icon: <FaLinkedinIn />,
    url: "https://linkedin.com/in/balakumaran2112",
    label: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://twitter.com/",
    label: "Twitter",
  },
];

const getWhatsAppUrl = () => {
  const hour = new Date().getHours();
  let greeting = "Hello";
  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  const message = `${greeting}! I visited your portfolio and would love to connect.`;
  return `https://wa.me/919597437868?text=${encodeURIComponent(message)}`;
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">
          {/* LOGO */}
          <NavLink to="/" className="navbar__brand">
            Balakumaran
          </NavLink>

          {/* Desktop Navigation */}

          <nav className="navbar__nav">
            <ul className="navbar__list">
              {NAV_LINKS.map((link) => (
                <li key={link.path} className="navbar__item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "navbar__link navbar__link--active"
                        : "navbar__link"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="navbar__actions">
            {/* WhatsApp Contact */}
            <a
              className="navbar__btn navbar__btn--whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact on WhatsApp"
            >
              <FaWhatsapp />
            </a>

            {/* Theme Toggle */}
            <button
              className="navbar__btn navbar__btn--theme"
              aria-label="Toggle Theme"
              type="button"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="navbar__btn navbar__btn--menu"
              onClick={toggleMenu}
              aria-label="Toggle Mobile Menu"
              type="button"
            >
              {menuOpen ? <FaAngleDoubleLeft /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--active" : ""}`}
      >
        {/* Mobile Header */}
        <div className="navbar__mobile-header">
          <h2 className="navbar__mobile-logo navbar__brand">Balakumaran</h2>

          <div className="navbar__mobile-actions">
            {/* WhatsApp Contact */}
            <a
              className="navbar__btn navbar__btn--whatsapp"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              aria-label="Contact on WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>

            <button
              className="navbar__btn navbar__btn--theme"
              aria-label="Toggle Theme"
              type="button"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button
              className="navbar__btn navbar__btn--close"
              onClick={toggleMenu}
              aria-label="Close Menu"
              type="button"
            >
              <FaAngleDoubleLeft size={23} />
            </button>
          </div>
        </div>

        {/* Mobile Greeting */}
        <div className="navbar__mobile-greeting">
          <p className="navbar__mobile-title">HELLO 👋</p>
          <p className="navbar__mobile-subtitle">
            Explore my portfolio sections!
          </p>
        </div>

        {/* Mobile Navigation */}
        <nav className="navbar__mobile-nav">
          <ul className="navbar__mobile-list">
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="navbar__mobile-item">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__mobile-link navbar__mobile-link--active"
                      : "navbar__mobile-link"
                  }
                  onClick={closeMenu}
                >
                  <span className="navbar__mobile-icon">{link.icon}</span>
                  <span className="navbar__mobile-text">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="navbar__social">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              className="navbar__social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Footer */}
        <p className="navbar__footer">
          <FaCopyright /> {new Date().getFullYear()} Balakumaran K. All rights
          reserved.
        </p>
      </aside>
    </>
  );
};

export default Navbar;
