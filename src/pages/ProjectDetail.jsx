// src/pages/ProjectDetail.jsx
// ─────────────────────────────────────────────────────────────
// Route: /projects/:slug or /projects/:id
// Reads from centralized projectsData
// MDN documentation + product case study style page.
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLightbulb,
  FaRocket,
  FaTriangleExclamation,
  FaBullseye,
  FaUserGroup,
  FaCheck
} from "react-icons/fa6";

import projectsData from "@/data/projectsData";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectArchitecture from "@/components/projects/ProjectArchitecture";
import FeatureCard from "@/components/projects/FeatureCard";
import TechBadge from "@/components/projects/TechBadge";
import ProjectGallery from "@/components/projects/ProjectGallery";

import "@/styles/pages/project-details.css";

const SECTIONS = [
  "overview",
  "architecture",
  "features",
  "tech",
  "gallery",
  "challenges",
  "learnings",
  "roadmap"
];

const SECTION_LABELS = {
  overview: "Overview & Problem",
  architecture: "System Architecture",
  features: "Key Features",
  tech: "Tech Stack",
  gallery: "Screens Gallery",
  challenges: "Engineering Challenges",
  learnings: "What I Learned",
  roadmap: "Future Roadmap"
};

/* ── ScrollSpy ──────────────────────────────────────────────── */
function useScrollSpy() {
  const activeRef = useRef(null);

  useEffect(() => {
    const handler = () => {
      let current = SECTIONS[0];
      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 180) {
          current = id;
        }
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

export default function ProjectDetail() {
  const { slug, id } = useParams();
  const currentIdentifier = slug || id;

  const project = projectsData.find(
    (p) =>
      p.slug === currentIdentifier ||
      String(p.id) === currentIdentifier ||
      (typeof p.id === "number" && p.id === Number(currentIdentifier))
  );

  useScrollSpy();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentIdentifier]);

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Project not found</h2>
        <p>The requested project case study could not be located.</p>
        <Link to="/projects" className="pd-btn primary">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  const {
    title,
    description,
    shortDescription,
    overview,
    problemStatement,
    targetUsers,
    goals,
    architecture,
    backend,
    frontend,
    database,
    authentication,
    deployment,
    features,
    technologies,
    techStack,
    gallery,
    challenges,
    learnings,
    futureImprovements,
    highlights,
    nextProject
  } = project;

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pd-page">
      {/* ══ HERO SECTION ═════════════════════════════════════ */}
      <div className="pd-hero-wrap">
        <div className="pd-container">
          <Link to="/projects" className="pd-back-link">
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>
        <ProjectHero project={project} />
      </div>

      {/* ══ MAIN CASE STUDY BODY ═════════════════════════════ */}
      <section className="pd-body">
        <div className="pd-container pd-grid">
          {/* STICKY TOC SIDEBAR */}
          <aside className="pd-sidebar">
            <div className="pd-sticky">
              <p className="pd-toc-label">Documentation Contents</p>
              <nav className="pd-toc-nav">
                <ul className="pd-toc">
                  {SECTIONS.map((s) => (
                    <li key={s}>
                      <button
                        className="pd-toc-link"
                        data-id={s}
                        onClick={() => scrollToSection(s)}
                      >
                        {SECTION_LABELS[s]}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {highlights && highlights.length > 0 && (
                <div className="pd-sidebar-highlights">
                  <h4 className="pd-highlights-title">Engineering Highlights</h4>
                  <ul className="pd-highlights-list">
                    {highlights.map((h, i) => (
                      <li key={i}>
                        <FaCheck className="pd-check-icon" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>

          {/* DOCUMENTATION CONTENT */}
          <div className="pd-content">
            {/* 1. OVERVIEW & PROBLEM STATEMENT */}
            <article id="overview" className="pd-section">
              <span className="pd-section-tag">01. Overview</span>
              <h2>Project Overview &amp; Problem Statement</h2>

              <p className="pd-lead-paragraph">{description || shortDescription}</p>

              {overview?.paragraphs &&
                overview.paragraphs.map((p, i) => (
                  <p key={i} className="pd-text-block">
                    {p}
                  </p>
                ))}

              {problemStatement && (
                <div className="pd-callout pd-callout--problem">
                  <div className="pd-callout__icon">
                    <FaTriangleExclamation />
                  </div>
                  <div>
                    <h4>{problemStatement.heading || "The Problem Statement"}</h4>
                    {problemStatement.paragraphs?.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              )}

              <div className="pd-two-col-box">
                {targetUsers && (
                  <div className="pd-info-card">
                    <div className="pd-info-card__header">
                      <FaUserGroup className="pd-info-card__icon" />
                      <h4>Target Audience</h4>
                    </div>
                    <p>{targetUsers}</p>
                  </div>
                )}

                {goals && goals.length > 0 && (
                  <div className="pd-info-card">
                    <div className="pd-info-card__header">
                      <FaBullseye className="pd-info-card__icon" />
                      <h4>Project Goals</h4>
                    </div>
                    <ul className="pd-bullets">
                      {goals.map((g, i) => (
                        <li key={i}>{g}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>

            {/* 2. SYSTEM ARCHITECTURE */}
            <article id="architecture" className="pd-section">
              <span className="pd-section-tag">02. Architecture</span>
              <h2>Technical Architecture &amp; System Design</h2>
              <ProjectArchitecture
                architecture={architecture}
                frontend={frontend}
                backend={backend}
                database={database}
                authentication={authentication}
                deployment={deployment}
              />
            </article>

            {/* 3. KEY FEATURES */}
            <article id="features" className="pd-section">
              <span className="pd-section-tag">03. Capability</span>
              <h2>{features?.heading || "Key Features & Capabilities"}</h2>
              {features?.items && features.items.length > 0 && (
                <div className="pd-features-grid">
                  {features.items.map((f, i) => (
                    <FeatureCard
                      key={i}
                      icon={f.icon}
                      title={f.title}
                      description={f.description}
                    />
                  ))}
                </div>
              )}
            </article>

            {/* 4. TECH STACK */}
            <article id="tech" className="pd-section">
              <span className="pd-section-tag">04. Technology</span>
              <h2>{technologies?.heading || techStack?.heading || "Technology Stack Breakdown"}</h2>
              <p className="pd-text-block">
                {technologies?.description || techStack?.description}
              </p>

              {technologies?.categories ? (
                <div className="pd-tech-categories">
                  {technologies.categories.map((cat, i) => (
                    <div key={i} className="pd-tech-category">
                      <h4 className="pd-tech-cat-title">{cat.name}</h4>
                      <div className="pd-tech-badge-group">
                        {cat.items.map((item, idx) => (
                          <TechBadge key={idx} tech={item} variant="pill" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="pd-tech-grid-flat">
                  {technologies?.items
                    ? technologies.items.map((t, i) => (
                        <TechBadge key={i} tech={t.label} icon={t.icon} variant="accent" />
                      ))
                    : techStack?.items?.map((t, i) => (
                        <TechBadge key={i} tech={t.label} icon={t.icon} variant="accent" />
                      ))}
                </div>
              )}
            </article>

            {/* 5. GALLERY & SCREENSHOTS */}
            {gallery && gallery.length > 0 && (
              <article id="gallery" className="pd-section">
                <span className="pd-section-tag">05. Screenshots</span>
                <h2>Application Screenshots &amp; UI Gallery</h2>
                <p className="pd-text-block">
                  Click any screen thumbnail below to launch the interactive high-resolution Lightbox view.
                </p>
                <ProjectGallery gallery={gallery} title={title} />
              </article>
            )}

            {/* 6. CHALLENGES & SOLUTIONS */}
            {challenges && (
              <article id="challenges" className="pd-section">
                <span className="pd-section-tag">06. Engineering</span>
                <h2>{challenges.heading || "Engineering Challenges & Solutions"}</h2>
                {challenges.paragraphs?.map((p, i) => (
                  <p key={i} className="pd-text-block">
                    {p}
                  </p>
                ))}

                {challenges.highlight && (
                  <div className="pd-callout pd-callout--fix">
                    <div className="pd-callout__icon">
                      <FaLightbulb />
                    </div>
                    <div>
                      <h4>{challenges.highlight.title}</h4>
                      <p>{challenges.highlight.body}</p>
                    </div>
                  </div>
                )}
              </article>
            )}

            {/* 7. WHAT I LEARNED */}
            {learnings && learnings.length > 0 && (
              <article id="learnings" className="pd-section">
                <span className="pd-section-tag">07. Reflections</span>
                <h2>What I Learned &amp; Engineering Takeaways</h2>
                <ul className="pd-learnings-list">
                  {learnings.map((item, i) => (
                    <li key={i}>
                      <span className="pd-learning-bullet">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {/* 8. FUTURE ROADMAP */}
            {futureImprovements && futureImprovements.length > 0 && (
              <article id="roadmap" className="pd-section">
                <span className="pd-section-tag">08. Roadmap</span>
                <h2>Future Improvements &amp; Product Roadmap</h2>
                <div className="pd-roadmap-list">
                  {futureImprovements.map((imp, i) => (
                    <div key={i} className="pd-roadmap-item">
                      <div className="pd-roadmap-num">{String(i + 1).padStart(2, "0")}</div>
                      <div className="pd-roadmap-text">{imp}</div>
                    </div>
                  ))}
                </div>
              </article>
            )}
          </div>
        </div>
      </section>

      {/* ══ NEXT / PREV PROJECT FOOTER ═════════════════════ */}
      {nextProject && (
        <nav className="pd-next-nav" aria-label="Next project navigation">
          <div className="pd-container">
            <span className="pd-next-eyebrow">Explore Next Case Study</span>
            <Link
              to={`/projects/${nextProject.slug || nextProject.id}`}
              className="pd-next-link"
            >
              <span className="pd-next-title">{nextProject.label}</span>
              <FaArrowRight className="pd-next-arrow" />
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
