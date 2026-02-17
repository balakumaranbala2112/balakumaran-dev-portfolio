import "../../styles/components/FeaturedProject.css";
import campusLink from "../../assets/images/projects/campuslink.png";
import { FaGithub,FaArrowRight } from "react-icons/fa";
const projects = [
  {
    id: 1,
    num: "01",
    title: "CampuLink",
    description:
      "A comprehensive learning platform allowing students to collaborate, ask questions, and share resources. Features real-time forums and AI-assisted content sorting.",
    image: campusLink,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      liveLink: "#",
      githubLink: "#",
    },
  },
  {
    id: 2,
    num: "02",
    title: "LiveLife",
    description:
      "A comprehensive learning platform allowing students to collaborate, ask questions, and share resources. Features real-time forums and AI-assisted content sorting.",
    image: campusLink,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      liveLink: "#",
      githubLink: "#",
    },
  },
  {
    id: 3,
    num: "03",
    title: "Portfolio",
    description:
      "A comprehensive learning platform allowing students to collaborate, ask questions, and share resources. Features real-time forums and AI-assisted content sorting.",
    image: campusLink,
    tech: ["React", "Node.js", "MongoDB", "Express"],
    links: {
      liveLink: "#",
      githubLink: "#",
    },
  },
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects">
      <div className="featured__container">
        {/* Header */}
        <div className="featured__header">
          <h3 className="featured__header-label">Featured Work</h3>
          <h2 className="featured__header-title">Selected Projects</h2>
        </div>

        {/* Project Rows */}
        <div className="featured__rows">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`featured__row ${
                index % 2 !== 0 ? "featured__row--reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="featured__img-wrapper">
                <img src={project.image} alt={project.title} />
              </div>

              {/* Content */}
              <div className="featured__content">
                <span className="featured__num">{project.num}</span>
                <h3 className="featured__title">{project.title}</h3>
                <p className="featured__desc">{project.description}</p>

                <div className="featured__tech">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="featured__tech-tag">
                      {techItem}
                    </span>
                  ))}
                </div>

                <div className="featured__links">
                  <a
                    href={project.links.liveLink}
                    className="featured__link-live"
                  >
                    View Live <FaArrowRight />
                  </a>

                  <a
                    href={project.links.githubLink}
                    className="featured__link-github"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="featured__cta">
          <a href="/projects" className="btn btn--primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
