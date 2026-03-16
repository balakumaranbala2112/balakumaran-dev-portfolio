// src/components/home/HireMe.jsx
//
// Full-width "Hire Me" CTA banner.
// Drop on: Home page (before Footer), Resume page (bottom).
// Two CTAs: primary → /contact, secondary → resume PDF.

import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "@/hooks/useInView";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";
import { HiDocumentDownload } from "react-icons/hi";
import "@/styles/components/home/HireMe.css";

const RESUME_URL = "/resume.pdf"; // update to your actual hosted PDF path
const EMAIL = "bkumaran2112@gmail.com";

const QUICK_LINKS = [
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
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: <FaEnvelope />,
  },
];

const HireMe = () => {
  const ref = useRef(null);
  const inView = useInView(ref, 0.12);

  return (
    <section
      className={`hire ${inView ? "hire--visible" : ""}`}
      ref={ref}
      aria-label="Open to work — hire me"
    >
      {/* Decorative grid pattern overlay */}
      <div className="hire__grid-bg" aria-hidden="true" />

      <div className="hire__container">
        {/* ── LEFT COLUMN ────────────────────────────────────── */}
        <div className="hire__left">
          {/* Available badge */}
          <div
            className="hire__badge"
            aria-label="Currently available for work"
          >
            <span className="hire__badge-dot" aria-hidden="true" />
            Available for Work
          </div>

          {/* Headline */}
          <h2 className="hire__heading">
            Let's build something
            <br />
            <span className="hire__heading-accent">great together.</span>
          </h2>

          {/* Subtext */}
          <p className="hire__body">
            I'm actively looking for full-time roles as a fresher in{" "}
            <strong> Full-Stack </strong> or{" "}
            <strong>Backend development</strong>. If you're hiring,
            collaborating, or just want to talk tech — my inbox is always open.
          </p>

          {/* Skills chips */}
          <div className="hire__chips" aria-label="Key skills">
            {[
              "React 19",
              "Node.js",
              "Express",
              "MongoDB",
              "REST APIs",
              "JWT Auth",
              "Firebase",
              "Git",
            ].map((skill) => (
              <span className="hire__chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN ───────────────────────────────────── */}
        <div className="hire__right">
          <div className="hire__card">
            {/* Card eyebrow */}
            <p className="hire__card-eye">Ready to join your team</p>

            {/* Primary CTA */}
            <Link to="/contact" className="hire__cta hire__cta--primary">
              <FaEnvelope aria-hidden="true" />
              Get in Touch
              <FaArrowRight className="hire__cta-arrow" aria-hidden="true" />
            </Link>

            {/* Secondary CTA */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hire__cta hire__cta--secondary"
            >
              <HiDocumentDownload aria-hidden="true" />
              Download Resume
            </a>

            {/* Divider */}
            <div className="hire__divider">
              <span>or find me on</span>
            </div>

            {/* Social row */}
            <div className="hire__socials">
              {QUICK_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="hire__social"
                  aria-label={l.label}
                >
                  {l.icon}
                  <span>{l.label}</span>
                </a>
              ))}
            </div>

            {/* Direct email */}
            <a
              href={`mailto:${EMAIL}`}
              className="hire__email-link"
              aria-label="Send email directly"
            >
              {EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
