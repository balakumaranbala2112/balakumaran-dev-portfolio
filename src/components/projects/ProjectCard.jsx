import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={project.link}
      className="gallery-item"
      aria-label={`View case study for ${project.title}`}
    >
      {/* IMAGE */}
      <div className="image-wrapper">
        <img src={project.img} alt={project.title} loading="lazy" />

        {/* OVERLAY */}
        <div className="overlay">
          <span className="view-text">
            View Case Study <FaArrowRight />
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="content-wrapper">
        <div className="flex-row">
          <h3>{project.title}</h3>
          <FaArrowRight className="arrow-icon" />
        </div>

        <p className="tech-stack">{project.tech}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
