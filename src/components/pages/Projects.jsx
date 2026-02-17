import { useState } from "react";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import "../../styles/pages/projects.css";
import { FaArrowLeft } from "react-icons/fa6";

const projectsData = [
  {
    id: 1,
    title: "StudyBuddy.AI",
    tech: "React • Node.js • MongoDB • Socket.io",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/studybuddy",
  },
  {
    id: 2,
    title: "Modern Book Store",
    tech: "Firebase • Stripe • React • Redux",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/bookstore",
  },
  {
    id: 3,
    title: "Task Flow Pro",
    tech: "Next.js • TypeScript • Tailwind",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/taskflow",
  },
  {
    id: 4,
    title: "Weather Forecast",
    tech: "OpenWeather API • JavaScript • CSS Grid",
    img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/weather",
  },
  {
    id: 5,
    title: "Portfolio 2026",
    tech: "React • CSS • Animations • Responsive UI",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/portfolio",
  },
  {
    id: 6,
    title: "Realtime Chat App",
    tech: "MERN • Socket.io • JWT • REST API",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/chatapp",
  },
  {
    id: 7,
    title: "Expense Tracker",
    tech: "React • Context API • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/expense",
  },
  {
    id: 8,
    title: "Expense Tracker",
    tech: "React • Context API • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/expense",
  },
  {
    id: 9,
    title: "Expense Tracker",
    tech: "React • Context API • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/expense",
  },
  {
    id: 10,
    title: "Expense Tracker",
    tech: "React • Context API • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/expense",
  },
  {
    id: 11,
    title: "Expense Tracker",
    tech: "React • Context API • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/expense",
  },
  {
    id: 12,
    title: "Expense Tracker",
    tech: "React • Context API • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/expense",
  },
  {
    id: 13,
    title: "Expense Tracker",
    tech: "React • Context API • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/project-details/expense",
  },
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;

  const totalPages = Math.ceil(projectsData.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const currentProjects = projectsData.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="projects-page">
      {/* HEADER */}
      <section className="page-header section-pad">
        <div className="container">
          <h1>
            Selected Works<div className="dot"></div>
          </h1>
          <p>
            A collection of projects where I’ve focused on engineering
            performance, clean UI, and scalable backend architecture.
          </p>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="gallery-section">
        <div className="container gallery-grid">
          {currentProjects.map((project) => (
            <a key={project.id} href={project.link} className="gallery-item">
              <div className="image-wrapper">
                <img src={project.img} alt={project.title} />

                <div className="overlay">
                  <span className="view-text">
                    View Case Study <FaArrowRight />
                  </span>
                </div>
              </div>

              <div className="content-wrapper">
                <div className="flex-row">
                  <h3>{project.title}</h3>
                  <FaArrowRight className="arrow-icon" />
                </div>

                <p className="tech-stack">{project.tech}</p>
              </div>
            </a>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination container">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
          >
            <FaArrowLeft />
          </button>

          <div className="page-numbers">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;

              return (
                <button
                  key={pageNum}
                  className={`page-number ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                  onClick={() => goToPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>

      {/* GITHUB CTA */}
      <section className="github-cta section-pad">
        <div className="container">
          <h2>Want to see more code?</h2>
          <p>
            Explore my repositories to see how I write clean, maintainable code.
          </p>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="btn outline"
          >
            <FaGithub /> Visit GitHub Profile
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
