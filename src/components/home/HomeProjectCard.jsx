// src/components/home/HomeProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import "@/styles/components/home/HomeProjectCard.css";

export default function HomeProjectCard({ project, index }) {
  if (!project) return null;

  const {
    id,
    slug,
    title,
    subtitle,
    shortDescription,
    description,
    coverImage,
    img,
    heroImg,
    tech,
    technologies,
    github,
    githubUrl,
    liveDemo,
    liveUrl,
    status
  } = project;

  const displaySlug = slug || String(id);
  const displayImage = coverImage || heroImg || img;
  const displayDesc = shortDescription || subtitle || description;
  const githubLink = github || githubUrl;
  const liveLink = liveDemo || liveUrl;

  // Extract compact tech badges (up to 5)
  const techList = technologies?.items
    ? technologies.items.map((t) => t.label).slice(0, 5)
    : tech
    ? tech
        .split(/[•·,]/)
        .map((t) => t.trim())
        .filter(Boolean)
        .slice(0, 5)
    : [];

  const hasLiveDemo = liveLink && liveLink !== "#";
  const hasGithub = githubLink && githubLink !== "#";

  return (
    <article className="home-card">
      {/* ── 1. THUMBNAIL CONTAINER WITH STATUS BADGE ──────────── */}
      <div className="home-card__media">
        <Link to={`/projects/${displaySlug}`} className="home-card__img-link" tabIndex={-1}>
          <img
            src={displayImage}
            alt={`${title} project thumbnail`}
            loading="lazy"
            className="home-card__img"
          />
          <div className="home-card__overlay">
            <span className="home-card__overlay-btn">
              View Details <FaArrowRight className="home-card__arrow" />
            </span>
          </div>
        </Link>

        {status && (
          <span className="home-card__badge">
            <span className="home-card__badge-dot" />
            {status}
          </span>
        )}
      </div>

      {/* ── 2. CARD CONTENT ───────────────────────────────────── */}
      <div className="home-card__body">
        <h3 className="home-card__title">
          <Link to={`/projects/${displaySlug}`}>{title}</Link>
        </h3>

        {/* Short 1–2 line description */}
        {displayDesc && <p className="home-card__desc">{displayDesc}</p>}

        {/* Compact Tech Badges */}
        {techList.length > 0 && (
          <div className="home-card__tech" aria-label="Technologies used">
            {techList.map((t, idx) => (
              <span key={idx} className="home-card__tech-badge">
                {t}
              </span>
            ))}
          </div>
        )}

        {/* ── 3. ACTION BUTTONS ROW ────────────────────────────── */}
        <div className="home-card__actions">
          <div className="home-card__left-btns">
            {hasLiveDemo && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="home-card__btn home-card__btn--live"
                aria-label={`View ${title} live demo (opens in new tab)`}
              >
                <span>Live Demo</span>
                <FaArrowUpRightFromSquare className="home-card__btn-icon" />
              </a>
            )}

            {hasGithub && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="home-card__btn home-card__btn--github"
                aria-label={`View ${title} source code on GitHub (opens in new tab)`}
              >
                <FaGithub className="home-card__btn-icon" />
                <span>GitHub</span>
              </a>
            )}
          </div>

          <Link
            to={`/projects/${displaySlug}`}
            className="home-card__btn home-card__btn--detail"
            aria-label={`View details for ${title}`}
          >
            <span>View Details</span>
            <FaArrowRight className="home-card__arrow-icon" />
          </Link>
        </div>
      </div>
    </article>
  );
}

