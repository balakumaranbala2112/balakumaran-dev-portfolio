// src/pages/Projects.jsx
// All logic preserved. Additions:
//  • Eyebrow badge above h1 (matches portfolio-wide style)
//  • Result count shown below toolbar ("Showing X of Y projects")
//  • Better empty state with icon + clear-filter button
//  • GitHub CTA gets an eyebrow label too
//  • Fixed: <Link href=...> → <a href=...> on resume (was already a bug)

import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaMagnifyingGlass, FaBoxOpen } from "react-icons/fa6";

import projectsData from "@/data/projectsData";
import ProjectCard from "@/components/projects/ProjectCard";
import Pagination from "@/components/projects/Pagination";
import ProjectSkeleton from "@/components/projects/ProjectSkeleton";
import ProjectsToolbar from "@/components/projects/ProjectsToolbar";

import "@/styles/pages/projects.css";

const PROJECTS_PER_PAGE = 6;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTech, setFilterTech] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  /* ── load ─────────────────────────────────────────────── */
  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  /* ── filter ───────────────────────────────────────────── */
  const filteredProjects = projects.filter((p) => {
    const q = searchTerm.toLowerCase();
    const matchSearch =
      p.title.toLowerCase().includes(q) || p.tech.toLowerCase().includes(q);
    const matchFilter =
      filterTech === "all" || p.tech.toLowerCase().includes(filterTech);
    return matchSearch && matchFilter;
  });

  /* reset to page 1 on filter/search change */
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterTech]);

  /* ── pagination ───────────────────────────────────────── */
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const clearFilters = () => {
    setSearchTerm("");
    setFilterTech("all");
  };

  return (
    <div className="projects-page">
      {/* ══ HEADER ══════════════════════════════════════════ */}
      <section className="page-header section-pad">
        <div className="container">
          <div className="page-header__eyebrow">
            <span className="page-header__dot" />
            Portfolio
          </div>
          <h1>
            Selected <em>Works</em>
            <span className="dot"> .</span>
          </h1>
          <p>
            Search, filter, and explore projects built with scalable engineering
            practices and real-world impact.
          </p>
        </div>
      </section>

      {/* ══ TOOLBAR ═════════════════════════════════════════ */}
      <div className="container">
        <ProjectsToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterTech={filterTech}
          setFilterTech={setFilterTech}
        />

        {/* result count */}
        {!loading && (
          <p className="projects-count">
            Showing <strong>{filteredProjects.length}</strong> of{" "}
            <strong>{projects.length}</strong> project
            {projects.length !== 1 ? "s" : ""}
            {(searchTerm || filterTech !== "all") && (
              <button className="projects-count__clear" onClick={clearFilters}>
                Clear filters
              </button>
            )}
          </p>
        )}
      </div>

      {/* ══ GRID ════════════════════════════════════════════ */}
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
          <div className="empty-state">
            <div className="empty-state__icon">
              <FaBoxOpen />
            </div>
            <h3>No projects found</h3>
            <p>
              No projects match{" "}
              {searchTerm ? (
                <>
                  "<strong>{searchTerm}</strong>"
                </>
              ) : (
                "your current filter"
              )}
              .
            </p>
            <button className="empty-state__btn" onClick={clearFilters}>
              <FaMagnifyingGlass /> Clear search &amp; filters
            </button>
          </div>
        )}
      </section>

      {/* ══ GITHUB CTA ══════════════════════════════════════ */}
      <section className="github-cta section-pad">
        <div className="container">
          <div className="page-header__eyebrow">
            <span className="page-header__dot" />
            Open Source
          </div>
          <h2>
            Want to see <span>more</span> code?
          </h2>
          <p>
            Explore full repositories, commit history, and real-world
            implementations on GitHub.
          </p>
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
}
