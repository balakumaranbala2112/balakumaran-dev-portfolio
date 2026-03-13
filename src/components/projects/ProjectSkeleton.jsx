// src/components/projects/ProjectSkeleton.jsx
const ProjectSkeleton = () => (
  <div className="pc-card pc-card--skeleton" aria-hidden="true">
    <div className="pc-image pc-sk-img" />
    <div className="pc-body">
      <div className="pc-sk-line pc-sk-line--title" />
      <div className="pc-sk-line pc-sk-line--desc" />
      <div className="pc-sk-line pc-sk-line--desc2" />
      <div className="pc-sk-tags">
        <div className="pc-sk-tag" />
        <div className="pc-sk-tag" />
        <div className="pc-sk-tag" />
      </div>
    </div>
  </div>
);

export default ProjectSkeleton;
