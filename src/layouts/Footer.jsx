import "@/styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Portfolio Footer
      </h2>

      <div className="footer__container">
        {/* BRAND */}
        <div className="footer__brand">
          <h3 className="footer__logo">Balakumaran.dev</h3>
          <p className="footer__tagline">
            Building scalable MERN applications with clean UI and secure backend
            systems.
          </p>
        </div>

        {/* QUICK LINKS */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__list">
            <li>
              <a href="/" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="footer__link">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* CONTACT */}
        <div className="footer__contact">
          <h4 className="footer__title">Contact</h4>
          <p className="footer__text">
            Email:{" "}
            <a className="footer__link" href="mailto:yourmail@gmail.com">
              yourmail@gmail.com
            </a>
          </p>
          <p className="footer__text">Location: India</p>
        </div>

        {/* NEWSLETTER CTA */}
        <div className="footer__newsletter">
          <h4 className="footer__title">Stay Updated</h4>
          <p className="footer__text">
            Get occasional updates about new projects and articles.
          </p>

          <form className="footer__form">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="footer__input"
            />

            <button type="submit" className="footer__btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* SOCIAL + COPYRIGHT */}
      <div className="footer__bottom">
        <div className="footer__social" aria-label="Social media links">
          <a
            href="https://github.com/"
            className="footer__social-link"
            aria-label="GitHub"
          >
            {/* GitHub SVG */}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.1-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 6.8c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.72 1.02 1.63 1.02 2.75 0 3.96-2.35 4.84-4.58 5.1.36.32.68.95.68 1.92v2.84c0 .27.18.59.69.48A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            {/* LinkedIn SVG */}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24V7.98h5V24H0zm7.5-16h4.78v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.05 0 5.98 3.33 5.98 7.66V24h-5v-6.98c0-1.67-.03-3.82-2.33-3.82-2.34 0-2.7 1.82-2.7 3.7V24h-5V8z" />
            </svg>
          </a>
        </div>

        <p className="footer__copy">
          © {new Date().getFullYear()} Balakumaran. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
