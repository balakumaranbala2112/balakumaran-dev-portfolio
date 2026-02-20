import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

import projectsData from "@/data/projectsData";
import ProjectCard from "@/components/projects/ProjectCard";
import Pagination from "@/components/projects/Pagination";
import ProjectSkeleton from "@/components/projects/ProjectSkeleton";
import ProjectsToolbar from "@/components/projects/ProjectsToolbar";

import "@/styles/pages/projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // SEARCH + FILTER STATE
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTech, setFilterTech] = useState("all");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // ✅ Backend-ready async fetch simulation
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 800); // simulate API delay
  }, []);

  // ✅ Filter Logic
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      filterTech === "all"
        ? true
        : project.tech.toLowerCase().includes(filterTech);

    return matchesSearch && matchesFilter;
  });

  // Reset pagination when filtering
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterTech]);

  // Pagination after filtering
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  // Scroll on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="projects-page">
      {/* HEADER */}
      <section className="page-header section-pad">
        <div className="container">
          <h1>
            Selected Works <span className="dot">.</span>
          </h1>
          <p>
            Search, filter, and explore projects built with scalable engineering
            practices.
          </p>
        </div>
      </section>

      {/* TOOLBAR */}
      <ProjectsToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterTech={filterTech}
        setFilterTech={setFilterTech}
      />

      {/* GRID */}
      <section className="gallery-section">
        <div className="container gallery-grid">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <ProjectSkeleton key={i} />
              ))
            : currentProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
        </div>

        {/* PAGINATION */}
        {!loading && totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}

        {/* EMPTY STATE */}
        {!loading && filteredProjects.length === 0 && (
          <p className="container" style={{ marginTop: "40px" }}>
            No projects match your search.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="github-cta section-pad">
        <div className="container">
          <h2>Want to see more code?</h2>
          <p>Explore full repositories and real-world implementations.</p>

          <a
            href="https://github.com/balakumaranbala2112"
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
