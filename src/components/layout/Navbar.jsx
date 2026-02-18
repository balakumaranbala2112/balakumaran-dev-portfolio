import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import useTheme from "../../hooks/useTheme";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaUserAlt,
  FaBlog,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaCopyright,
  FaAngleDoubleLeft,
} from "react-icons/fa";

import { IoHomeSharp } from "react-icons/io5";
import { MdWork, MdContactMail } from "react-icons/md";
import "../../styles/components/Navbar.css";

const NAV_LINKS = [
  { name: "Home", path: "/", icon: <IoHomeSharp /> },
  { name: "About", path: "/about", icon: <FaUserAlt /> },
  { name: "Projects", path: "/projects", icon: <MdWork /> },
  { name: "Blogs", path: "/blogs", icon: <FaBlog /> },
  { name: "Contact", path: "/contact", icon: <MdContactMail /> },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

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

  const closeMenu = () => {
    setMenuOpen(false);
  };

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
            <button
              className="navbar__btn navbar__btn--theme"
              aria-label="Toggle Theme"
              type="button"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>

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
            <button
              className="navbar__btn navbar__btn--theme"
              aria-label="Toggle Theme"
              type="button"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button
              className="navbar__btn"
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
          <a
            href="https://www.github.com/balakumaranbala2112"
            className="navbar__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/balakumaran2112"
            className="navbar__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="navbar__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
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

/* --------------------------------------------------------------------- */
