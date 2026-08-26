import React from "react";
import ProjectButtons from "./ProjectButtons";
import TechBadge from "./TechBadge";
import "@/styles/components/projects/ProjectHero.css";

export default function ProjectHero({ project }) {
  const {
    title,
    subtitle,
    shortDescription,
    coverImage,
    heroImg,
    status,
    role,
    timeline,
    github,
    githubUrl,
    liveDemo,
    liveUrl,
    technologies,
    tech,
    meta
  } = project;

  const displayImage = coverImage || heroImg;
  const githubLink = github || githubUrl;
  const liveLink = liveDemo || liveUrl;

  // Extract meta details
  const roleVal = role || meta?.find((m) => m.label === "Role")?.value || "Full Stack Developer";
  const timeVal = timeline || meta?.find((m) => m.label === "Timeline")?.value || "Production";
  const statusVal = status || "Completed";

  return (
    <header className="project-hero">
      <div className="project-hero__container">
        {/* Status Pill */}
        <div className="project-hero__meta-top">
          <span className="project-hero__status-badge">
            <span className="project-hero__status-dot" />
            {statusVal}
          </span>
          <span className="project-hero__divider">•</span>
          <span className="project-hero__meta-item">{roleVal}</span>
          <span className="project-hero__divider">•</span>
          <span className="project-hero__meta-item">{timeVal}</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="project-hero__title">{title}</h1>
        <p className="project-hero__subtitle">{subtitle || shortDescription}</p>

        {/* Action Buttons */}
        <div className="project-hero__actions">
          <ProjectButtons
            github={githubLink}
            liveDemo={liveLink}
            showDetails={false}
            size="large"
          />
        </div>

        {/* Tech Stack Badges */}
        <div className="project-hero__tech-stack">
          {technologies?.items ? (
            technologies.items.map((t, idx) => (
              <TechBadge key={idx} tech={t.label} icon={t.icon} variant="accent" />
            ))
          ) : tech ? (
            tech.split("•").map((t, idx) => (
              <TechBadge key={idx} tech={t.trim()} variant="accent" />
            ))
          ) : null}
        </div>

        {/* Cover Hero Image Frame */}
        {displayImage && (
          <div className="project-hero__img-frame">
            <img src={displayImage} alt={`${title} screenshot`} className="project-hero__img" />
          </div>
        )}
      </div>
    </header>
  );
}
