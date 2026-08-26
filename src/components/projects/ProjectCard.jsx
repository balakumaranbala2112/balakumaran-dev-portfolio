// src/components/projects/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProjectButtons from "./ProjectButtons";
import TechBadge from "./TechBadge";
import "@/styles/components/projects/ProjectCard.css";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const {
    id,
    slug,
    title,
    description,
    shortDescription,
    subtitle,
    coverImage,
    img,
    tech,
    technologies,
    github,
    githubUrl,
    liveDemo,
    liveUrl,
    status,
    features
  } = project;

  const displaySlug = slug || String(id);
  const displayImage = coverImage || img;
  const displayDesc = shortDescription || subtitle || description;
  const githubLink = github || githubUrl;
  const liveLink = liveDemo || liveUrl;

  // Extract technology badges
  const techList = technologies?.items
    ? technologies.items.map((t) => t.label).slice(0, 5)
    : tech
    ? tech
        .split(/[•·,]/)
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 5)
    : [];

  // Top feature highlights (up to 2)
  const topFeatures = features?.items?.slice(0, 2) || [];

  return (
    <article className="project-card">
      {/* ── CARD THUMBNAIL ───────────────────────────────── */}
      <div className="project-card__media">
        <Link to={`/projects/${displaySlug}`} className="project-card__img-link">
          <img
            src={displayImage}
            alt={`${title} thumbnail`}
            loading="lazy"
            className="project-card__img"
          />
          <div className="project-card__overlay">
            <span className="project-card__overlay-btn">View Case Study →</span>
          </div>
        </Link>
        {status && (
          <span className="project-card__status-tag">
            {status}
          </span>
        )}
      </div>

      {/* ── CARD CONTENT ─────────────────────────────────── */}
      <div className="project-card__content">
        <h3 className="project-card__title">
          <Link to={`/projects/${displaySlug}`}>{title}</Link>
        </h3>

        <p className="project-card__desc">{displayDesc}</p>

        {/* Feature Highlights */}
        {topFeatures.length > 0 && (
          <div className="project-card__features">
            {topFeatures.map((f, idx) => (
              <div key={idx} className="project-card__feature-item">
                <span className="project-card__feature-bullet">•</span>
                <span className="project-card__feature-text">{f.title}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technology Stack Pills */}
        {techList.length > 0 && (
          <div className="project-card__tech">
            {techList.map((t, idx) => (
              <TechBadge key={idx} tech={t} />
            ))}
          </div>
        )}

        {/* Action Buttons: GitHub, Live Demo, View Details */}
        <div className="project-card__actions">
          <ProjectButtons
            github={githubLink}
            liveDemo={liveLink}
            slug={displaySlug}
            showDetails={true}
            size="small"
          />
        </div>
      </div>
    </article>
  );
}
