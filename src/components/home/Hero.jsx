import React from "react";
import { FaArrowDown, FaArrowRight, FaGithub } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import TerminalHero from "./TerminalHero";
import "../../styles/components/hero.css";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        {/* Left Content */}
        <div className="hero__content">
          <p className="hero__intro">
            HELLO, I'M <div className="hero__highlight"> BK 👋</div>
          </p>

          <h1 className="hero__title">
            Full-Stack <br />
            <span className="hero__title-accent">MERN</span> Developer
          </h1>

          <p className="hero__description">
            Building scalable React-based web applications with clean UI
            architecture and reusable components. Developing secure REST APIs
            with Node.js/Express, MongoDB integration, and authentication
            (JWT/Firebase).
          </p>

          <div className="hero__actions">
            <a
              href="/projects"
              className="hero__btn hero__btn--primary"
              rel="noreferrer"
            >
              <span className="hero__btn-text">View Projects</span>
              <FaArrowRight className="hero__btn-icon" />
            </a>

            <a
              href="/projects"
              target="_blank"
              className="hero__btn hero__btn--secondary"
              rel="noreferrer"
            >
              <span className="hero__btn-text">RESUME</span>
              <HiDocumentDownload className="hero__btn-icon" />
            </a>
          </div>
          <p className="tagline">
            Building real-world MERN products • Open for Internship / Full-Time
            Opportunities
          </p>
        </div>

        {/* Right Terminal — hidden on tablet and mobile via CSS */}
        <div className="hero__terminal">
          <TerminalHero />
        </div>
      </div>

      {/* ScrollDown — hidden on mobile via CSS */}
      <div className="hero__scroll">
        <ScrollDown />
      </div>
    </section>
  );
};

export default Hero;
