// src/components/about/AboutHero.jsx
// Layout: image LEFT | content RIGHT  (mirrors home hero)
// No stats band, no watermark, tight top padding matches navbar

import "../../styles/components/about/AboutHero.css";
import AboutImg from "@/assets/images/profile/profile-about.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiMongodb, SiReact, SiNodedotjs } from "react-icons/si";

const STACK = [
  { icon: <SiReact />, label: "React", color: "#61dafb" },
  { icon: <SiNodedotjs />, label: "Node.js", color: "#5fa04e" },
  { icon: <SiMongodb />, label: "MongoDB", color: "#47a248" },
];

const AboutHero = () => (
  <section className="ah-section">
    <div className="ah-bg-dots" aria-hidden="true" />
    <div className="ah-bg-glow" aria-hidden="true" />

    <div className="ah-container">
      <div className="ah-grid">
        {/* ══ LEFT — IMAGE ══════════════════════════════════ */}
        <div className="ah-image-col">
          <div className="ah-frame-wrap">
            {/* viewfinder corner brackets */}
            <span className="ah-corner ah-corner--tl" aria-hidden="true" />
            <span className="ah-corner ah-corner--tr" aria-hidden="true" />
            <span className="ah-corner ah-corner--bl" aria-hidden="true" />
            <span className="ah-corner ah-corner--br" aria-hidden="true" />

            {/* animated scan line */}
            <div className="ah-scan-line" aria-hidden="true" />

            <div className="ah-photo">
              <img src={AboutImg} alt="Balakumaran K" draggable="false" />
              <div className="ah-photo-overlay" aria-hidden="true" />
            </div>

            {/* available chip */}
            <div className="ah-img-tag">
              <span className="ah-img-tag-dot" />
              Available for hire
            </div>

            {/* projects chip */}
            <div className="ah-img-stat">
              <span className="ah-img-stat-n">3+</span>
              <span className="ah-img-stat-l">Projects</span>
            </div>
          </div>
        </div>

        {/* ══ RIGHT — CONTENT ═══════════════════════════════ */}
        <div className="ah-content">
          {/* monospace label */}
          {/* <div className="ah-section-label">
            <span className="ah-label-line" aria-hidden="true" />
            <span className="ah-label-text">ABOUT_ME.md</span>
          </div> */}

          {/* eyebrow badge */}
          <span className="ah-badge">
            <span className="ah-badge-dot" />
            Who I Am
          </span>

          {/* headline */}
          <h1 className="ah-title">
            Architecting
            <span className="ah-mark">the Future</span>
            <span className="ah-title-dim">Web.</span>
          </h1>

          <p className="ah-lead">
            I'm <strong>Balakumaran</strong>, a Full-Stack Developer from
            Ariyalur. I solve complex problems with clean, scalable solutions
            built on the MERN stack.
          </p>

          <p className="ah-body">
            My journey started with a curiosity for how things work on the
            internet. Today I build production-ready web apps that care deeply
            about performance, accessibility, and maintainable architecture.
          </p>

          {/* stack chips */}
          {/* <div className="ah-stack">
            <span className="ah-stack-label">Core Stack</span>
            <div className="ah-stack-chips">
              {STACK.map((s) => (
                <div
                  key={s.label}
                  className="ah-chip"
                  style={{ "--chip-c": s.color }}
                >
                  <span className="ah-chip-icon">{s.icon}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </div> */}

          {/* location */}
          <div className="ah-location">
            <FaMapMarkerAlt />
            Ariyalur, Tamil Nadu, India
          </div>

          {/* signature */}
          <div className="ah-signature">Balakumaran.</div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutHero;
