import React from "react";
import "@/styles/components/projects/TechBadge.css";

export default function TechBadge({ tech, variant = "default", icon }) {
  return (
    <span className={`tech-badge tech-badge--${variant}`}>
      {icon && <i className={`${icon} tech-badge-icon`} aria-hidden="true" />}
      <span>{tech}</span>
    </span>
  );
}
