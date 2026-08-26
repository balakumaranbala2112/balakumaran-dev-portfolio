import { FaArrowRight, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { FaXTwitter, FaReact, FaNodeJs } from "react-icons/fa6";
import {
  SiExpress,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { Link } from "react-router-dom";
import AboutImage from "@/assets/images/profile/profile-about.webp";
import "../../styles/components/home/Hero.css";
import {
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineCodeBracket,
  HiOutlineCommandLine,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

const SOCIAL_LINKS = [
  {
    href: "https://github.com/balakumaranbala2112",
    icon: <FaGithub />,
    label: "GitHub",
  },
  {
    href: "https://twitter.com/balakumaran_dev",
    icon: <FaXTwitter />,
    label: "Twitter",
  },
  {
    href: "https://linkedin.com/in/balakumaran2112",
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
  },
];

const TECH_STACK = [
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#539E43" },
  { icon: <SiExpress />, name: "Express", color: "#828282" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
];

const STATS = [
  { icon: <HiOutlineRocketLaunch />, value: "3+", label: "Projects" },
  { icon: <HiOutlineCommandLine />, value: "500+", label: "Commits" },
  { icon: <HiOutlineCpuChip />, value: "MERN", label: "Stack" },
];

const BADGES = [
  {
    icon: <HiOutlineCodeBracket />,
    title: "REST APIs",
    sub: "Scalable & Secure",
    pos: "tl",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Auth System",
    sub: "JWT & Role-based",
    pos: "bl",
  },
  {
    icon: <HiOutlineSparkles />,
    title: "AI Features",
    sub: "Smart Integrations",
    pos: "tr",
  },
];

const Hero = () => (
  <section className="hero">
    <div className="hero__bg-glow" aria-hidden="true" />
    <div className="hero__bg-glow-right" aria-hidden="true" />
    <div className="hero__dots-bg" aria-hidden="true" />
    <div className="hero__decor-dots hero__decor-dots--1" aria-hidden="true" />
    <div className="hero__decor-dots hero__decor-dots--2" aria-hidden="true" />


    <div className="hero__container">
      {/* ══ LEFT CONTENT ═══════════════════════════════════ */}
      <div className="hero__content">
        {/* greeting */}
        <p className="hero__greeting">Hi, I'm</p>

        {/* name */}
        <h1 className="hero__name">
          Balakumaran<span className="hero__name-dot">.</span>
        </h1>

        {/* role */}
        <p className="hero__role">
          Full Stack <span className="hero__role-accent">Developer</span>
        </p>

        {/* desc */}
        <p className="hero__desc">
          Building clean, scalable web apps with the MERN stack —
          secure auth, REST APIs, dashboards &amp; AI features.
        </p>

        {/* tech stack */}
        <div className="hero__tech">
          <span className="hero__tech-label">Tech Stack</span>
          <span className="hero__tech-divider" aria-hidden="true" />
          <div className="hero__tech-list">
            {TECH_STACK.map((t) => (
              <div key={t.name} className="hero__tech-item" title={t.name}>
                <span
                  className="hero__tech-icon"
                  style={{ color: t.color }}
                  aria-hidden="true"
                >
                  {t.icon}
                </span>
                <span className="hero__tech-name">{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="hero__actions">
          <Link
            to="/projects"
            className="hero__btn hero__btn--solid"
            aria-label="View projects"
          >
            View Projects
            <FaArrowRight className="hero__btn-ico" aria-hidden="true" />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero__btn hero__btn--ghost"
            aria-label="Download resume"
          >
            <HiDocumentDownload className="hero__btn-ico" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        {/* bottom row: stats + socials */}
        <div className="hero__bottom">
          {/* compact stats chips */}
          <div className="hero__chips">
            {STATS.map((s) => (
              <div key={s.label} className="hero__chip">
                <span className="hero__chip-icon" aria-hidden="true">
                  {s.icon}
                </span>
                <span className="hero__chip-value">{s.value}</span>
                <span className="hero__chip-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* social links */}
          <div className="hero__socials">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hero__soc"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ══ RIGHT — IMAGE ══════════════════════════════════ */}
      <div className="hero__visual">
        <div className="hero__dots-pattern" aria-hidden="true" />
        <div className="hero__visual-glow" aria-hidden="true" />

        <div className="hero__frame">
          <img
            src={AboutImage}
            alt="Balakumaran K - Full-Stack MERN Developer"
            className="hero__img"
            draggable="false"
            width="280"
            height="373"
          />
          <div className="hero__frame-chip">
            <span className="hero__chip-dot" aria-hidden="true" />
            MERN Stack
          </div>
        </div>

        {BADGES.map((b) => (
          <div key={b.title} className={`hero__badge hero__badge--${b.pos}`}>
            <span className="hero__badge-ico" aria-hidden="true">
              {b.icon}
            </span>
            <div className="hero__badge-text">
              <span className="hero__badge-title">{b.title}</span>
              <span className="hero__badge-sub">{b.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
