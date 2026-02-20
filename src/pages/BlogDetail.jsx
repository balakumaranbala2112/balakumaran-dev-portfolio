// src/pages/BlogDetail.jsx
// ─────────────────────────────────────────────────────────────
// Route: /blogs/:id
// Renders a full article from blogsData.
//
// Add to your router (App.jsx):
//   import BlogDetail from "@/pages/BlogDetail";
//   { path: "blogs/:id", element: <BlogDetail /> }
// ─────────────────────────────────────────────────────────────

import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import blogsData from "@/data/blogsData";
import "@/styles/pages/blog.css";

export default function BlogDetail() {
  const { id } = useParams();
  const article = blogsData.find((b) => b.id === id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [id]);

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(article?.title || "");
    const links = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      copy: null,
    };
    if (platform === "copy") {
      navigator.clipboard.writeText(window.location.href);
      return;
    }
    window.open(links[platform], "_blank", "width=600,height=400");
  };

  if (!article) {
    return (
      <div className="bd-not-found">
        <h2>Article not found.</h2>
        <Link to="/blogs" className="bd-back-link">
          ← All Articles
        </Link>
      </div>
    );
  }

  const { title, category, date, readTime, content, nextArticle } = article;

  return (
    <div className="bd-page">
      {/* ══ BACK LINK ════════════════════════════════════════ */}
      <div className="bd-container">
        <Link to="/blogs" className="bd-back">
          <i className="fa-solid fa-arrow-left" />
          All Articles
        </Link>
      </div>

      {/* ══ ARTICLE HEADER ═══════════════════════════════════ */}
      <header className="bd-header">
        <div className="bd-container bd-header-inner">
          <div className="bd-meta-top">
            <span className="bd-tag-pill">{category}</span>
            <span className="bd-dot-sep" />
            <span>
              {date.month} {date.day}, {date.year}
            </span>
            <span className="bd-dot-sep" />
            <span>
              <i className="fa-regular fa-clock" /> {readTime}
            </span>
          </div>

          <h1 className="bd-article-title">{title}</h1>

          <p className="bd-lead">{content.leadText}</p>

          <div className="bd-author-row">
            <div className="bd-avatar">BK</div>
            <div className="bd-author-info">
              <strong>Balakumaran</strong>
              <span>Full Stack Developer</span>
            </div>
          </div>
        </div>
      </header>

      {/* ══ ARTICLE BODY ═════════════════════════════════════ */}
      <div className="bd-body bd-container">
        {content.sections.map((section, i) => (
          <div key={i} className="bd-section">
            {section.heading && (
              <h3 className="bd-section-heading">{section.heading}</h3>
            )}

            {section.body && <p>{section.body}</p>}

            {section.code && (
              <div className="bd-code-wrap">
                <div className="bd-code-header">
                  <div className="bd-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="bd-code-lang">JavaScript</span>
                  <button
                    className="bd-copy-btn"
                    onClick={() => navigator.clipboard.writeText(section.code)}
                    title="Copy code"
                  >
                    <i className="fa-regular fa-copy" /> Copy
                  </button>
                </div>
                <pre className="bd-pre">
                  <code>{section.code}</code>
                </pre>
              </div>
            )}

            {section.quote && (
              <blockquote className="bd-quote">{section.quote}</blockquote>
            )}
          </div>
        ))}

        {/* SHARE */}
        <div className="bd-share">
          <span className="bd-share-label">Share this article</span>
          <div className="bd-share-btns">
            <button
              onClick={() => handleShare("twitter")}
              title="Share on Twitter"
              className="bd-share-btn twitter"
            >
              <i className="fa-brands fa-x-twitter" />
            </button>
            <button
              onClick={() => handleShare("linkedin")}
              title="Share on LinkedIn"
              className="bd-share-btn linkedin"
            >
              <i className="fa-brands fa-linkedin-in" />
            </button>
            <button
              onClick={() => handleShare("copy")}
              title="Copy link"
              className="bd-share-btn copy"
            >
              <i className="fa-solid fa-link" />
            </button>
          </div>
        </div>
      </div>

      {/* ══ NEXT ARTICLE ═════════════════════════════════════ */}
      {nextArticle && (
        <section className="bd-next">
          <div className="bd-container">
            <p className="bd-next-label">Next Article</p>
            <Link to={`/blogs/${nextArticle.id}`} className="bd-next-title">
              {nextArticle.label}
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
