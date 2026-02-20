// src/pages/Blogs.jsx
// ─────────────────────────────────────────────────────────────
// Writing page with:
//  - Your own articles (internal links → BlogDetail)
//  - External feed section (Medium, Dev.to, LinkedIn cards)
//  - Category filter + search
// ─────────────────────────────────────────────────────────────

import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { blogsData, externalPosts } from "@/data/blogsData";
import "@/styles/pages/blog.css";

const CATEGORIES = ["All", "React", "Backend", "System Design", "Frontend"];

const PLATFORM_META = {
  medium: {
    label: "Medium",
    icon: "fa-brands fa-medium",
    color: "#000000",
    bg: "rgba(0,0,0,0.06)",
  },
  devto: {
    label: "Dev.to",
    icon: "fa-brands fa-dev",
    color: "#3b49df",
    bg: "rgba(59,73,223,0.07)",
  },
  linkedin: {
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    color: "#0a66c2",
    bg: "rgba(10,102,194,0.07)",
  },
};

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");

  /* ── filter own articles ── */
  const filteredOwn = useMemo(() => {
    return blogsData.filter((b) => {
      const matchCat =
        activeCategory === "All" || b.category === activeCategory;
      const matchSearch =
        b.title.toLowerCase().includes(search.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  /* ── filter external posts ── */
  const filteredExternal = useMemo(() => {
    return externalPosts.filter((p) => {
      const matchPlatform =
        platformFilter === "all" || p.platform === platformFilter;
      const matchSearch =
        search === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase());
      return matchPlatform && matchSearch;
    });
  }, [platformFilter, search]);

  return (
    <div className="bl-page">
      {/* ══ HEADER ════════════════════════════════════════════ */}
      <section className="bl-header">
        <div className="bl-container">
          <div className="bl-header-inner">
            <div className="bl-eyebrow">Writing & Thoughts</div>
            <h1 className="bl-title">
              Ideas worth
              <br />
              <span className="bl-title-accent">putting on paper.</span>
            </h1>
            <p className="bl-subtitle">
              Tutorials, technical deep-dives, and honest thoughts on software
              engineering. Also published on Medium, Dev.to &amp; LinkedIn.
            </p>
          </div>

          {/* FILTER BAR */}
          <div className="bl-filter-bar">
            <div className="bl-categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`bl-cat-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="bl-search-wrap">
              <i className="fa-solid fa-magnifying-glass" />
              <input
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button
                  className="bl-search-clear"
                  onClick={() => setSearch("")}
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ OWN ARTICLES ════════════════════════════════════ */}
      <section className="bl-list">
        <div className="bl-container">
          {filteredOwn.length === 0 ? (
            <div className="bl-empty">
              <i className="fa-solid fa-pen-nib" />
              <p>No articles match your search.</p>
            </div>
          ) : (
            filteredOwn.map((blog, i) => (
              <article
                key={blog.id}
                className="bl-row"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* DATE COLUMN */}
                <div className="bl-date">
                  <span className="bl-month">{blog.date.month}</span>
                  <span className="bl-day">{blog.date.day}</span>
                  <span className="bl-year">{blog.date.year}</span>
                </div>

                {/* CONTENT COLUMN */}
                <div className="bl-content">
                  <div className="bl-meta">
                    <span className="bl-tag">{blog.category}</span>
                    <span className="bl-dot-sep" />
                    <span className="bl-readtime">
                      <i className="fa-regular fa-clock" /> {blog.readTime}
                    </span>
                  </div>

                  <Link to={`/blogs/${blog.id}`} className="bl-title-link">
                    <h2>{blog.title}</h2>
                  </Link>

                  <p className="bl-excerpt">{blog.excerpt}</p>

                  <Link to={`/blogs/${blog.id}`} className="bl-read-link">
                    Read Article <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      {/* ══ EXTERNAL PLATFORM FEED ════════════════════════════ */}
      <section className="bl-external">
        <div className="bl-container">
          <div className="bl-section-head">
            <div className="bl-section-label">Also published on</div>
            <h2 className="bl-section-title">Across the web</h2>
            <p className="bl-section-sub">
              I write regularly on Medium, Dev.to, and LinkedIn. Here's a
              curated feed.
            </p>

            {/* PLATFORM TABS */}
            <div className="bl-platform-tabs">
              {[
                {
                  key: "all",
                  label: "All Platforms",
                  icon: "fa-solid fa-layer-group",
                },
                { key: "medium", label: "Medium", icon: "fa-brands fa-medium" },
                { key: "devto", label: "Dev.to", icon: "fa-brands fa-dev" },
                {
                  key: "linkedin",
                  label: "LinkedIn",
                  icon: "fa-brands fa-linkedin-in",
                },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`bl-platform-tab ${platformFilter === tab.key ? "active" : ""}`}
                  onClick={() => setPlatformFilter(tab.key)}
                >
                  <i className={tab.icon} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* PLATFORM CARDS GRID */}
          <div className="bl-ext-grid">
            {filteredExternal.map((post, i) => {
              const meta = PLATFORM_META[post.platform];
              return (
                <a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bl-ext-card"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {/* platform badge */}
                  <div
                    className="bl-ext-platform"
                    style={{ color: meta.color, background: meta.bg }}
                  >
                    <i className={meta.icon} />
                    {meta.label}
                  </div>

                  <h3 className="bl-ext-title">{post.title}</h3>
                  <p className="bl-ext-excerpt">{post.excerpt}</p>

                  <div className="bl-ext-footer">
                    <div className="bl-ext-tags">
                      {post.tags.map((t) => (
                        <span key={t} className="bl-ext-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="bl-ext-meta">
                      <span>{post.date}</span>
                      <span className="bl-dot-sep" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="bl-ext-arrow">
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* PLATFORM PROFILE LINKS */}
          <div className="bl-platform-links">
            <p>Follow me on these platforms for new articles every week</p>
            <div className="bl-platform-btns">
              <a
                href="https://medium.com/@yourusername"
                target="_blank"
                rel="noreferrer"
                className="bl-platform-btn medium"
              >
                <i className="fa-brands fa-medium" /> Medium
              </a>
              <a
                href="https://dev.to/yourusername"
                target="_blank"
                rel="noreferrer"
                className="bl-platform-btn devto"
              >
                <i className="fa-brands fa-dev" /> Dev.to
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="bl-platform-btn linkedin"
              >
                <i className="fa-brands fa-linkedin-in" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
