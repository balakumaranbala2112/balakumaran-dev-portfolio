// src/components/FeaturedProjects.jsx
// ─────────────────────────────────────────────────────────────
// Design direction: Editorial-cinematic
//  • Giant ghost number watermark per row
//  • Image card lifts and clips on hover
//  • Blue accent line animates in from left on hover
//  • Staggered entrance animation per row
//  • Alternating layout (image-left / image-right) preserved
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import campusLink from "@/assets/images/projects/campuslink.png";
import "@/styles/components/FeaturedProject.css";

const projects = [
  {
    id: 1,
    num: "01",
    title: "CampusLink",
    label: "EdTech Platform",
    description:
      "A comprehensive learning platform allowing students to collaborate, ask questions, and share resources in subject-specific rooms. Features real-time forums and AI-assisted content sorting.",
    image: campusLink,
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    links: { liveLink: "#", githubLink: "#" },
  },
  {
    id: 2,
    num: "02",
    title: "LiveLife",
    label: "Health & Wellness",
    description:
      "A habit-tracking and wellness app that combines daily check-ins, streak motivation, and data-driven insights to help users build sustainable routines.",
    image: campusLink,
    tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
    links: { liveLink: "#", githubLink: "#" },
  },
  {
    id: 3,
    num: "03",
    title: "Portfolio 2026",
    label: "Personal Brand",
    description:
      "This very portfolio — hand-crafted without UI libraries. Custom CSS architecture, dark/light theming, scroll animations, and a perfect Lighthouse score.",
    image: campusLink,
    tech: ["React", "CSS Modules", "Vite", "Animations"],
    links: { liveLink: "#", githubLink: "#" },
  },
];

/* ── IntersectionObserver scroll reveal ────────────────────── */
function useScrollReveal(selector = ".fp-row") {
  const ref = useRef(null);
  useEffect(() => {
    const rows = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fp-row--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, [selector]);
  return ref;
}

export default function FeaturedProjects() {
  useScrollReveal(".fp-row");

  return (
    <section className="fp-section">
      <div className="fp-container">
        {/* ── HEADER ────────────────────────────────────────── */}
        <div className="fp-header">
          <span className="fp-eyebrow">Featured Work</span>
          <h2 className="fp-heading">
            Selected
            <br />
            <span className="fp-heading-accent">Projects.</span>
          </h2>
        </div>

        {/* ── PROJECT ROWS ──────────────────────────────────── */}
        <div className="fp-rows">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div
                key={project.id}
                className={`fp-row ${isReverse ? "fp-row--reverse" : ""}`}
              >
                {/* ghost number watermark */}
                <span className="fp-ghost-num" aria-hidden="true">
                  {project.num}
                </span>

                {/* IMAGE */}
                <div className="fp-img-block">
                  <div className="fp-img-wrap">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                    {/* overlay shimmer on hover */}
                    <div className="fp-img-overlay" />
                  </div>
                  {/* floating label badge */}
                  <div className="fp-label-badge">{project.label}</div>
                </div>

                {/* CONTENT */}
                <div className="fp-content">
                  {/* accent line */}
                  <div className="fp-accent-line" />

                  <div className="fp-num-small">{project.num}</div>

                  <h3 className="fp-title">{project.title}</h3>

                  <p className="fp-desc">{project.description}</p>

                  <div className="fp-tech">
                    {project.tech.map((t) => (
                      <span key={t} className="fp-tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="fp-links">
                    <a
                      href={project.links.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="fp-link-live"
                    >
                      View Live <FaArrowUpRightFromSquare />
                    </a>
                    <a
                      href={project.links.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="fp-link-github"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                      Source
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ───────────────────────────────────────────── */}
        <div className="fp-cta">
          <Link to="/projects" className="fp-cta-btn">
            View All Projects <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
