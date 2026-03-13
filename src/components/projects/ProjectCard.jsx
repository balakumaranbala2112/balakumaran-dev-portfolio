// src/components/projects/ProjectCard.jsx
// Richer card: image → title → description → tech tags → action links
// Each project in projectsData should have:
//   { id, title, description, tech, img, github, live, link }

import { Link } from "react-router-dom";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaArrowRight,
} from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const techList = project.tech
    ? project.tech
        .split(",")
        .map((t) => t.trim())
        .slice(0, 4)
    : [];

  return (
    <article className="pc-card">
      {/* ── IMAGE ──────────────────────────────────────── */}
      <div className="pc-image">
        <img src={project.img} alt={project.title} loading="lazy" />
        <div className="pc-image__overlay">
          {project.link && (
            <Link
              to={project.link}
              className="pc-overlay-btn"
              aria-label={`View case study for ${project.title}`}
            >
              View Case Study <FaArrowRight />
            </Link>
          )}
        </div>
      </div>

      {/* ── CONTENT ────────────────────────────────────── */}
      <div className="pc-body">
        {/* title row */}
        <div className="pc-title-row">
          <h3 className="pc-title">{project.title}</h3>
          <div className="pc-link-btns">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="pc-icon-btn"
                aria-label="GitHub repository"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="pc-icon-btn pc-icon-btn--live"
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <FaArrowUpRightFromSquare />
              </a>
            )}
          </div>
        </div>

        {/* description */}
        {project.description && (
          <p className="pc-desc">{project.description}</p>
        )}

        {/* tech tags */}
        {techList.length > 0 && (
          <div className="pc-tags">
            {techList.map((t) => (
              <span key={t} className="pc-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
