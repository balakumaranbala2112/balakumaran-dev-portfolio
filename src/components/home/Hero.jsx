import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaReact, FaNodeJs, FaChevronDown } from "react-icons/fa6";
import { HiDocumentDownload } from "react-icons/hi";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiSocketdotio,
} from "react-icons/si";
import {
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineCodeBracket,
} from "react-icons/hi2";

import AboutImage from "@/assets/images/profile/profile-about.webp";
import "../../styles/components/home/Hero.css";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/balakumaranbala2112",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/balakumaran2112",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
  {
    href: "https://twitter.com/balakumaran_dev",
    icon: <FaXTwitter />,
    label: "Twitter",
  },
];

const TECH_STACK = [
  { icon: <FaReact />, name: "React 19", color: "#61DAFB" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#539E43" },
  { icon: <SiExpress />, name: "Express", color: "#888888" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiSocketdotio />, name: "Socket.IO", color: "#010101" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
];

const STATS = [
  { value: "3+", label: "Full-Stack Apps" },
  { value: "500+", label: "Git Commits" },
  { value: "Sub-50ms", label: "Real-Time Latency" },
];

const FLOATING_BADGES = [
  {
    icon: <HiOutlineCodeBracket />,
    title: "RESTful APIs",
    sub: "Express & Swagger",
    pos: "tl",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Auth & Security",
    sub: "JWT & OAuth 2.0",
    pos: "bl",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "Real-Time Systems",
    sub: "Socket.IO WebSockets",
    pos: "tr",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Lighting & Grid Effects */}
      <div className="hero__bg-glow hero__bg-glow--left" aria-hidden="true" />
      <div className="hero__bg-glow hero__bg-glow--right" aria-hidden="true" />
      <div className="hero__dots-pattern" aria-hidden="true" />

      <div className="hero__container">
        {/* ══ LEFT COLUMN: CONTENT ════════════════════════════ */}
        <div className="hero__content">
          {/* Eyebrow Status Badge */}
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            <span>AVAILABLE FOR FULL-STACK ROLES</span>
          </div>

          {/* Heading Group */}
          <div className="hero__header">
            <p className="hero__greeting">Hi, I'm</p>
            <h1 className="hero__name">
              Balakumaran K<span className="hero__accent-dot">.</span>
            </h1>
            <h2 className="hero__role">
              Full-Stack <span className="hero__role-highlight">MERN Developer</span>
            </h2>
          </div>

          {/* Description */}
          <p className="hero__desc">
            Building high-performance, production-ready web applications with{" "}
            <strong className="hero__text-bold">React 19</strong>,{" "}
            <strong className="hero__text-bold">Node.js</strong>,{" "}
            <strong className="hero__text-bold">MongoDB</strong>, and{" "}
            <strong className="hero__text-bold">Socket.IO</strong>. Specialized in secure REST APIs, role-based auth, and scalable architecture.
          </p>

          {/* Tech Stack Row */}
          <div className="hero__tech">
            <span className="hero__tech-title">CORE STACK</span>
            <div className="hero__tech-list">
              {TECH_STACK.map((t) => (
                <div key={t.name} className="hero__tech-pill">
                  <span className="hero__tech-icon" style={{ color: t.color }}>
                    {t.icon}
                  </span>
                  <span className="hero__tech-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="hero__actions">
            <Link to="/projects" className="hero__btn hero__btn--primary">
              <span>View Projects</span>
              <FaArrowRight className="hero__btn-arrow" />
            </Link>

            <a
              href="https://drive.google.com/file/d/1YeUtpNiEF3ctlVVGi9yn1ku6a8AhxIvN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__btn hero__btn--secondary"
            >
              <HiDocumentDownload className="hero__btn-icon" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Stats & Social Links */}
          <div className="hero__footer">
            <div className="hero__stats">
              {STATS.map((s, idx) => (
                <div key={idx} className="hero__stat-card">
                  <span className="hero__stat-number">{s.value}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="hero__socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__social-icon"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ══ RIGHT COLUMN: PROFILE & FLOATING CARDS ══════════ */}
        <div className="hero__visual">
          <div className="hero__portrait-wrapper">
            <div className="hero__portrait-frame">
              <img
                src={AboutImage}
                alt="Balakumaran K - Full-Stack Developer"
                className="hero__portrait-img"
              />
              <div className="hero__portrait-chip">
                <span className="hero__chip-pulse" />
                <span>Full-Stack MERN</span>
              </div>
            </div>

            {/* Floating Feature Badges */}
            {FLOATING_BADGES.map((b) => (
              <div key={b.title} className={`hero__badge hero__badge--${b.pos}`}>
                <span className="hero__badge-icon">{b.icon}</span>
                <div className="hero__badge-content">
                  <span className="hero__badge-title">{b.title}</span>
                  <span className="hero__badge-sub">{b.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a href="#featured-projects" className="hero__scroll-hint" aria-label="Scroll down to featured projects">
        <span>EXPLORE PROJECTS</span>
        <FaChevronDown className="hero__scroll-icon" />
      </a>
    </section>
  );
}
