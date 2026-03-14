import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import projects from "@/data/selectedProjects.json";
import campusLink from "@/assets/images/projects/campuslink.png";
import "../../styles/components/home/FeaturedProject.css";

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
