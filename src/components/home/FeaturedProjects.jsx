import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import projectsData from "@/data/projectsData";
import HomeProjectCard from "./HomeProjectCard";
import "@/styles/components/home/FeaturedProject.css";

export default function FeaturedProjects() {
  // Display top 3 production featured projects automatically
  const latestProjects = projectsData.slice(0, 3);

  return (
    <section className="fp-section" id="featured-projects">
      <div className="fp-container">
        {/* ── HEADER ──────────────────────────────────────────── */}
        <div className="fp-header">
          <span className="fp-eyebrow">FEATURED PROJECTS</span>
          <h2 className="fp-heading">
            Featured <span className="fp-heading-accent">Projects.</span>
          </h2>
          <p className="fp-subheading">
            Production-oriented full-stack applications &amp; systems built with modern security, real-time WebSockets, and clean architecture.
          </p>
        </div>

        {/* ── PROJECTS GRID ───────────────────────────────────── */}
        <div className="latest-projects-grid">
          {latestProjects.map((project, idx) => (
            <HomeProjectCard
              key={project.id || project.slug}
              project={project}
              index={idx}
            />
          ))}
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
