// src/pages/ProjectDetail.jsx
// ─────────────────────────────────────────────────────────────
// Route: /projects/:id  (id is a number e.g. /projects/1)
// Reads from projectsData — no other file needed per project.
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import projectsData from "@/data/projectsData";
import "@/styles/pages/project-details.css";

const SECTIONS = ["overview", "features", "tech", "challenges", "outcome"];
const SECTION_LABELS = {
  overview: "Overview",
  features: "Key Features",
  tech: "Tech Stack",
  challenges: "Challenges",
  outcome: "Outcome",
};

/* ── scroll-spy ─────────────────────────────────────────────── */
function useScrollSpy() {
  const activeRef = useRef(null);
  useEffect(() => {
    const handler = () => {
      let current = SECTIONS[0];
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) current = id;
      });
      if (current !== activeRef.current) {
        activeRef.current = current;
        document.querySelectorAll(".pd-toc-link").forEach((a) => {
          a.classList.toggle("active", a.dataset.id === current);
        });
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function ProjectDetail() {
  const { id } = useParams();
  // id from URL is a string — convert to number to match projectsData
  const project = projectsData.find((p) => p.id === Number(id));

  useScrollSpy();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  /* ── 404 ── */
  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Project not found.</h2>
        <Link to="/projects" className="pd-btn primary">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const {
    title,
    subtitle,
    heroImg,
    liveUrl,
    githubUrl,
    meta,
    overview,
    features,
    techStack,
    challenges,
    outcome,
    nextProject,
  } = project;

  const scrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="pd-page">
      {/* ══ HERO ═════════════════════════════════════════════ */}
      <section className="pd-hero">
        <div className="pd-container">
          <Link to="/projects" className="pd-back-link">
            <i className="fa-solid fa-arrow-left" />
            Back to Projects
          </Link>

          <div className="pd-hero-content">
            <h1 className="pd-hero-title">{title}</h1>
            <p className="pd-hero-subtitle">{subtitle}</p>

            <div className="pd-hero-actions">
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="pd-btn primary"
              >
                View Live Demo{" "}
                <i className="fa-solid fa-arrow-up-right-from-square" />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="pd-btn outline"
              >
                <i className="fa-brands fa-github" /> Source Code
              </a>
            </div>
          </div>
        </div>

        <div className="pd-container pd-hero-img-wrap">
          <img src={heroImg} alt={title} />
        </div>
      </section>

      {/* ══ BODY ═════════════════════════════════════════════ */}
      <section className="pd-body">
        <div className="pd-container pd-grid">
          {/* SIDEBAR */}
          <aside className="pd-sidebar">
            <div className="pd-sticky">
              <p className="pd-toc-label">Contents</p>
              <ul className="pd-toc">
                {SECTIONS.map((s) => (
                  <li key={s}>
                    <button
                      className="pd-toc-link"
                      data-id={s}
                      onClick={() => scrollTo(s)}
                    >
                      {SECTION_LABELS[s]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* CONTENT */}
          <div className="pd-content">
            {/* OVERVIEW */}
            <div id="overview" className="pd-section">
              <h2>{overview.heading}</h2>
              {overview.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="pd-stat-row">
                {meta.map((m) => (
                  <div className="pd-stat" key={m.label}>
                    <span className="pd-stat-label">{m.label}</span>
                    <span className="pd-stat-value">{m.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            <div id="features" className="pd-section">
              <h2>{features.heading}</h2>
              <ul className="pd-feature-list">
                {features.items.map((f) => (
                  <li key={f.title} className="pd-feature-item">
                    <div className="pd-feature-icon">
                      <i className={f.icon} />
                    </div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* TECH STACK */}
            <div id="tech" className="pd-section">
              <h2>{techStack.heading}</h2>
              <p>{techStack.description}</p>
              <div className="pd-tech-grid">
                {techStack.items.map((t) => (
                  <div className="pd-tech-card" key={t.label}>
                    <i className={t.icon} />
                    <span>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CHALLENGES */}
            <div id="challenges" className="pd-section">
              <h2>{challenges.heading}</h2>
              {challenges.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="pd-highlight">
                <h4>{challenges.highlight.title}</h4>
                <p>{challenges.highlight.body}</p>
              </div>
            </div>

            {/* OUTCOME */}
            <div id="outcome" className="pd-section">
              <h2>{outcome.heading}</h2>
              {outcome.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {outcome.img && (
                <img
                  src={outcome.img}
                  alt={outcome.imgAlt}
                  className="pd-inline-img"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ NEXT PROJECT ════════════════════════════════════ */}
      {nextProject && (
        <section className="pd-next">
          <div className="pd-container">
            <p className="pd-next-label">Next Project</p>
            <Link to={`/projects/${nextProject.id}`} className="pd-next-title">
              {nextProject.label}
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
