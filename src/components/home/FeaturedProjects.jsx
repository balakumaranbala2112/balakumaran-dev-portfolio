import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import campusLink from "@/assets/images/projects/campuslink.png";
import "../../styles/components/home/FeaturedProject.css";

// const projects = [
//   {
//     id: 1,
//     num: "01",
//     title: "CampusLink",
//     label: "EdTech Platform",
//     description:
//       "A comprehensive learning platform allowing students to collaborate, ask questions, and share resources in subject-specific rooms. Features real-time forums and AI-assisted content sorting.",
//     image: campusLink,
//     tech: ["React", "Node.js", "MongoDB", "Socket.io"],
//     links: { liveLink: "#", githubLink: "#" },
//   },
//   {
//     id: 2,
//     num: "02",
//     title: "LiveLife",
//     label: "Health & Wellness",
//     description:
//       "A habit-tracking and wellness app that combines daily check-ins, streak motivation, and data-driven insights to help users build sustainable routines.",
//     image: campusLink,
//     tech: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
//     links: { liveLink: "#", githubLink: "#" },
//   },
//   {
//     id: 3,
//     num: "03",
//     title: "Portfolio 2026",
//     label: "Personal Brand",
//     description:
//       "This very portfolio — hand-crafted without UI libraries. Custom CSS architecture, dark/light theming, scroll animations, and a perfect Lighthouse score.",
//     image: campusLink,
//     tech: ["React", "CSS Modules", "Vite", "Animations"],
//     links: { liveLink: "#", githubLink: "#" },
//   },
// ];

// import bankImg from "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80";
// import campusImg from "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80";
// import aiImg from "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80";

// ✅ Just use the URL directly as a string value
const projects = [
  {
    id: 1,
    num: "01",
    title: "FraudShield",
    label: "FinTech · ML",
    description: "An intelligent bank transaction monitoring system...",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tech: ["React", "Node.js", "Python", "XGBoost", "Flask", "MongoDB"],
    links: { liveLink: "#", githubLink: "#" },
  },
  {
    id: 2,
    num: "02",
    title: "CampusConnect",
    label: "EdTech Platform",
    description: "A collaborative platform for college students...",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    links: { liveLink: "#", githubLink: "#" },
  },
  {
    id: 3,
    num: "03",
    title: "AskAI",
    label: "AI · Productivity",
    description: "A minimalist AI chat interface powered by the Gemini API...",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    tech: ["React", "Gemini API", "Node.js", "Express"],
    links: { liveLink: "#", githubLink: "#" },
  },
];

/* ── IntersectionObserver scroll reveal ──────────────────────── */

function useScrollReveal(selector = ".fp-row") {
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
}

export default function FeaturedProjects() {
  useScrollReveal(".fp-row");

  return (
    <section className="fp-section">
      <div className="fp-container">
        {/* ── HEADER ──────────────────────────────────────────── */}
        <div className="fp-header">
          <span className="fp-eyebrow">Featured Work</span>
          <h2 className="fp-heading">
            Selected <span className="fp-heading-accent"> Projects.</span>
          </h2>
        </div>

        {/* ── PROJECT ROWS ────────────────────────────────────── */}
        <div className="fp-rows">
          {projects.map((project, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div
                key={project.id}
                className={`fp-row${isReverse ? " fp-row--reverse" : ""}`}
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
                    {/* blue shimmer overlay on hover */}
                    <div className="fp-img-overlay" aria-hidden="true" />
                  </div>
                  {/* floating label badge */}
                  <div className="fp-label-badge">{project.label}</div>
                </div>

                {/* CONTENT */}
                <div className="fp-content">
                  <div className="fp-accent-line" aria-hidden="true" />

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
                      aria-label={`View ${project.title} live`}
                    >
                      View Live <FaArrowUpRightFromSquare />
                    </a>
                    <a
                      href={project.links.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="fp-link-github"
                      aria-label={`${project.title} source code on GitHub`}
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

        {/* ── CTA ─────────────────────────────────────────────── */}
        <div className="fp-cta">
          <Link to="/projects" className="fp-cta-btn">
            View All Projects <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
