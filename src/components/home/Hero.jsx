import React from "react";
import { FaArrowDown, FaGithub } from "react-icons/fa";
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
            Hi, I'm <span className="hero__highlight">BK 👋</span>
          </p>

          <h1 className="hero__title">
            Software Engineer & <br />
            <span className="hero__title-accent">Full-Stack Developer.</span>
          </h1>

          <p className="hero__description">
            Building scalable React apps with reusable components, clean UI
            architecture, and optimized performance.
          </p>

          <div className="hero__actions">
            <a
              href="/projects"
              className="hero__btn hero__btn--primary"
              rel="noreferrer"
            >
              <span className="hero__btn-text">View Projects</span>
              <FaArrowDown className="hero__btn-icon" />
            </a>

            <a
              href="https://github.com/balakumaranbala2112"
              target="_blank"
              className="hero__btn hero__btn--secondary"
              rel="noreferrer"
            >
              <span className="hero__btn-text">GitHub</span>
              <FaGithub className="hero__btn-icon" />
            </a>
          </div>
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
