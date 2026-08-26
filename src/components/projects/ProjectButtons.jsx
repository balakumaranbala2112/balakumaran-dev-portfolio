import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaArrowUpRightFromSquare, FaArrowRight } from "react-icons/fa6";
import "@/styles/components/projects/ProjectButtons.css";

export default function ProjectButtons({ github, liveDemo, slug, showDetails = true, size = "medium" }) {
  return (
    <div className={`project-buttons project-buttons--${size}`}>
      {liveDemo && liveDemo !== "#" && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="pj-btn pj-btn--primary"
          aria-label="View Live Demo (opens in new tab)"
        >
          <span>Live Demo</span>
          <FaArrowUpRightFromSquare className="pj-btn-icon" />
        </a>
      )}

      {github && github !== "#" && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="pj-btn pj-btn--secondary"
          aria-label="View GitHub Repository (opens in new tab)"
        >
          <FaGithub className="pj-btn-icon" />
          <span>GitHub</span>
        </a>
      )}

      {showDetails && slug && (
        <Link
          to={`/projects/${slug}`}
          className="pj-btn pj-btn--outline"
          aria-label={`View full details for project ${slug}`}
        >
          <span>View Details</span>
          <FaArrowRight className="pj-btn-icon pj-btn-arrow" />
        </Link>
      )}
    </div>
  );
}
