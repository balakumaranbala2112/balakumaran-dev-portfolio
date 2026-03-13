// src/pages/Projects.jsx
// Redesigned for HR clarity:
//  • Compact inline header — title + live count on one row
//  • Search + filters tight below header, not buried after a hero
//  • Projects grid visible above the fold on every screen
//  • Cleaner empty state and GitHub CTA

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

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 800);
    return () => clearTimeout(t);
  }, []);

  const filteredProjects = projects.filter((p) => {
    const q = searchTerm.toLowerCase();
    const matchSearch =
      p.title.toLowerCase().includes(q) || p.tech.toLowerCase().includes(q);
    const matchFilter =
      filterTech === "all" || p.tech.toLowerCase().includes(filterTech);
    return matchSearch && matchFilter;
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterTech]);

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
    <div className="pj-page">
      {/* ══ COMPACT PAGE HEADER ═════════════════════════════ */}
      <div className="pj-topbar">
        <div className="pj-topbar__left">
          {/* eyebrow label */}
          <span className="pj-badge">
            <span className="pj-badge__dot" />
            Portfolio
          </span>
          <h1 className="pj-heading">
            Projects
            <span className="pj-heading__accent">.</span>
          </h1>
          <p className="pj-subheading">
            Full-stack applications built with real-world engineering practices.
          </p>
        </div>

        {/* live count — immediately tells HR how many projects */}
        <div className="pj-topbar__stat">
          {loading ? (
            <span className="pj-stat-skeleton" />
          ) : (
            <>
              <span className="pj-stat-number">{projects.length}</span>
              <span className="pj-stat-label">Projects</span>
            </>
          )}
        </div>
      </div>

      {/* ══ TOOLBAR (search + filters) ═════════════════════ */}
      <div className="pj-toolbar-wrap">
        <ProjectsToolbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterTech={filterTech}
          setFilterTech={setFilterTech}
        />

        {/* result count — only when filtered */}
        {!loading && (searchTerm || filterTech !== "all") && (
          <div className="pj-results-row">
            <span className="pj-results-text">
              <strong>{filteredProjects.length}</strong> of {projects.length}{" "}
              projects
            </span>
            <button className="pj-clear-btn" onClick={clearFilters}>
              Clear filters ×
            </button>
          </div>
        )}
      </div>

      {/* ══ GRID ════════════════════════════════════════════ */}
      <main className="pj-grid-section">
        <div className="pj-grid">
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
          <div className="pj-empty">
            <div className="pj-empty__icon">
              <FaBoxOpen />
            </div>
            <h3>No projects found</h3>
            <p>
              Nothing matches{" "}
              {searchTerm ? (
                <>
                  <strong>"{searchTerm}"</strong>
                </>
              ) : (
                "your filter"
              )}
              .
            </p>
            <button className="pj-empty__btn" onClick={clearFilters}>
              <FaMagnifyingGlass /> Clear &amp; show all
            </button>
          </div>
        )}
      </main>

      {/* ══ GITHUB CTA ══════════════════════════════════════ */}
      <section className="pj-cta">
        <div className="pj-cta__inner">
          <div>
            <p className="pj-cta__label">Open Source</p>
            <h2 className="pj-cta__title">More on GitHub</h2>
            <p className="pj-cta__sub">
              Explore full repos, commit history, and experiments.
            </p>
          </div>
          <a
            href="https://github.com/balakumaranbala2112"
            target="_blank"
            rel="noreferrer"
            className="pj-cta__btn"
          >
            <FaGithub /> Visit GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
