import React from "react";
import "@/styles/components/projects/FeatureCard.css";

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon-wrap">
        {icon ? (
          <i className={`${icon} feature-card__icon`} aria-hidden="true" />
        ) : (
          <div className="feature-card__dot" />
        )}
      </div>
      <div className="feature-card__content">
        <h4 className="feature-card__title">{title}</h4>
        <p className="feature-card__desc">{description}</p>
      </div>
    </div>
  );
}
