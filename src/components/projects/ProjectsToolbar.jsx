const ProjectsToolbar = ({
  searchTerm,
  setSearchTerm,
  filterTech,
  setFilterTech,
}) => {
  return (
    <div className="projects-toolbar container">
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* FILTER */}
      <select
        value={filterTech}
        onChange={(e) => setFilterTech(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Tech</option>
        <option value="react">React</option>
        <option value="mern">MERN</option>
        <option value="firebase">Firebase</option>
        <option value="next">Next.js</option>
      </select>
    </div>
  );
};

export default ProjectsToolbar;
