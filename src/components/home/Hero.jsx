import { FaArrowRight, FaGithub, FaLinkedinIn, FaNodeJs } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AboutImage from "@/assets/images/profile/profile-about.webp";
import "../../styles/components/home/Hero.css";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiMongodb } from "react-icons/si";

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

const STATS = [
  { n: "3", suffix: "+", label: "Projects" },
  { n: "500", suffix: "+", label: "Commits" },
  { n: "1", suffix: "+", label: "Yr. Learning" },
];

const Hero = () => (
  <section className="hero">
    <div className="hero__bg-glow" aria-hidden="true" />
    <div className="hero__bg-dots" aria-hidden="true" />

    <div className="hero__container">
      {/* ══ LEFT CONTENT ═══════════════════════════════════ */}
      <div className="hero__content">
        {/* OTW badge */}
        <div className="hero__otw">
          <span className="hero__otw-dot">
            <span className="hero__otw-ring" aria-hidden="true" />
          </span>
          Open to Work
          <span className="hero__otw-divider" aria-hidden="true" />
          Available Now
        </div>

        {/* intro */}
        <p className="hero__intro">
          HELLO, I'M <span className="hero__hi">BK 👋</span>
        </p>

        {/* title */}
        <h1 className="hero__title">
          Full-Stack
          <br />
          <mark className="hero__mark">MERN</mark> Developer
        </h1>

        {/* desc */}
        <p className="hero__desc">
          I design and build full-stack web apps using MongoDB, Express, React,
          and Node. Focused on performance, clean architecture, and real-world
          impact.
        </p>

        {/* stats */}
        <div className="hero__stats">
          {STATS.map((s) => (
            <div key={s.label} className="hero__stat">
              <span className="hero__stat-n">
                {s.n}
                <span className="hero__stat-sfx">{s.suffix}</span>
              </span>
              <span className="hero__stat-l">{s.label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero__actions">
          <Link to="/projects" className="hero__btn hero__btn--solid">
            View My Projects
            <FaArrowRight className="hero__btn-ico" />
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hero__btn hero__btn--ghost"
          >
            <HiDocumentDownload className="hero__btn-ico" />
            Download Resume
          </a>
        </div>

        {/* follow */}
        <div className="hero__follow">
          <span className="hero__follow-label">FOLLOW ME ON</span>
          <span className="hero__follow-rule" aria-hidden="true" />
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
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__orbit" />
        <div className="hero__orbit hero__orbit--lg" />

        <div className="hero__frame">
          <img
            src={AboutImage}
            alt="Balakumaran K"
            className="hero__img"
            draggable="false"
          />

          <div className="hero__frame-chip">
            <span className="hero__chip-dot" />
            MERN Stack
          </div>
        </div>

        <div className="hero__pill hero__pill--tl">
          <GrReactjs />
        </div>
        <div className="hero__pill hero__pill--tr">
          <FaNodeJs />
        </div>
        <div className="hero__pill hero__pill--br">
          <SiMongodb />
        </div>
        <div className="hero__pill hero__pill--br">
          <SiExpress />
        </div>
      </div>
    </div>

    {/* ══ MOBILE PROFILE CARD (shown only on mobile) ═══════
        A compact horizontal card: photo left | identity right
        Appears ABOVE the main content on small screens.
    ════════════════════════════════════════════════════════ */}
    <div className="hero__mobile-card" aria-hidden="true">
      <div className="hero__mc-photo">
        <img src={AboutImage} alt="" draggable="false" />
      </div>
      <div className="hero__mc-info">
        <p className="hero__mc-name">Balakumaran K</p>
        <p className="hero__mc-role">MERN Stack Developer</p>
        <div className="hero__mc-socials">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hero__mc-soc"
              aria-label={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      {/* availability badge inside card */}
      <div className="hero__mc-avail">
        <span className="hero__mc-avail-dot" />
        Open
      </div>
    </div>
  </section>
);

export default Hero;
