import { useEffect, useRef, useState } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import "../../styles/components/projects/ProjectToolBar.css";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "React", value: "react" },
  { label: "MERN", value: "mern" },
  { label: "Firebase", value: "firebase" },
  { label: "Next.js", value: "next" },
];

const ProjectsToolbar = ({
  searchTerm,
  setSearchTerm,
  filterTech,
  setFilterTech,
}) => {
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  /* ⌘K / Ctrl+K shortcut — focus the search */
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        setSearchTerm("");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [setSearchTerm]);

  return (
    <div className="toolbar-wrap">
      {/* ── SEARCH BOX ─────────────────────────── */}
      <div
        className={`toolbar-search${focused ? " toolbar-search--focused" : ""}`}
      >
        {/* leading icon */}
        <span className="toolbar-search__icon">
          <FaMagnifyingGlass />
        </span>

        <input
          ref={inputRef}
          type="text"
          placeholder="Search projects by name or technology…"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="toolbar-search__input"
          spellCheck={false}
          autoComplete="off"
        />

        {/* trailing — clear button OR keyboard hint */}
        <span className="toolbar-search__trail">
          {searchTerm ? (
            <button
              className="toolbar-search__clear"
              onClick={() => {
                setSearchTerm("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
            >
              <FaXmark />
            </button>
          ) : (
            <kbd className="toolbar-kbd">
              <span>⌘</span>
              <span>K</span>
            </kbd>
          )}
        </span>
      </div>

      {/* ── FILTER CHIPS ───────────────────────── */}
      <div
        className="toolbar-chips"
        role="group"
        aria-label="Filter by technology"
      >
        {FILTERS.map(({ label, value }) => (
          <button
            key={value}
            className={`chip${filterTech === value ? " chip--active" : ""}`}
            onClick={() => setFilterTech(value)}
          >
            {filterTech === value && <span className="chip__dot" />}
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectsToolbar;
