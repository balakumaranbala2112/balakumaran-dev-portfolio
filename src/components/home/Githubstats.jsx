// src/components/home/GitHubStats.jsx
//
// Sections:
//   1. Stat cards  — Repos · Stars · Followers · Top Language
//   2. Language breakdown — animated CSS bar chart
//   3. Contribution heatmap — ghchart.ssh.surf embed (no auth needed)
//   4. Top repositories — 4 most-starred repos

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { useGitHubStats } from "@/hooks/useGitHubStats";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import "@/styles/components/home/GitHubStats.css";

const USERNAME = "balakumaranbala2112";

// Colour palette for language bars — cycles through 6 distinct hues
const LANG_COLORS = [
  {
    bg: "rgba(37,99,235,0.15)",
    border: "rgba(37,99,235,0.4)",
    text: "var(--primary)",
  }, // blue
  {
    bg: "rgba(13,148,136,0.12)",
    border: "rgba(13,148,136,0.35)",
    text: "#0d9488",
  }, // teal
  {
    bg: "rgba(124,58,237,0.12)",
    border: "rgba(124,58,237,0.35)",
    text: "#7c3aed",
  }, // purple
  {
    bg: "rgba(234,88,12,0.12)",
    border: "rgba(234,88,12,0.35)",
    text: "#ea580c",
  }, // orange
  {
    bg: "rgba(5,150,105,0.12)",
    border: "rgba(5,150,105,0.35)",
    text: "#059669",
  }, // green
  {
    bg: "rgba(217,70,239,0.12)",
    border: "rgba(217,70,239,0.35)",
    text: "#d946ef",
  }, // pink
];

// ── Skeleton placeholder shown while fetching ──────────────────
function Skeleton({ className = "" }) {
  return <div className={`ghs-skeleton ${className}`} aria-hidden="true" />;
}

// ── Single stat card ───────────────────────────────────────────
function StatCard({ icon, value, label, loading }) {
  return (
    <div className="ghs-stat">
      <div className="ghs-stat__icon" aria-hidden="true">
        {icon}
      </div>
      {loading ? (
        <Skeleton className="ghs-skeleton--val" />
      ) : (
        <div className="ghs-stat__value">{value}</div>
      )}
      <div className="ghs-stat__label">{label}</div>
    </div>
  );
}

// ── Language bar row ───────────────────────────────────────────
function LangBar({ name, pct, index, visible }) {
  const c = LANG_COLORS[index % LANG_COLORS.length];
  return (
    <div className="ghs-lang">
      <div className="ghs-lang__meta">
        <span
          className="ghs-lang__dot"
          style={{ background: c.text }}
          aria-hidden="true"
        />
        <span className="ghs-lang__name">{name}</span>
        <span className="ghs-lang__pct">{pct}%</span>
      </div>
      <div
        className="ghs-lang__track"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="ghs-lang__fill"
          style={{
            width: visible ? `${pct}%` : "0%",
            background: c.text,
            transitionDelay: `${index * 80}ms`,
          }}
        />
      </div>
    </div>
  );
}

// ── Repo card ──────────────────────────────────────────────────
function RepoCard({ repo, index }) {
  const updatedDate = new Date(repo.updatedAt).toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="ghs-repo"
      style={{ "--delay": `${index * 0.08}s` }}
      aria-label={`View ${repo.name} on GitHub`}
    >
      <div className="ghs-repo__head">
        <FaGithub className="ghs-repo__icon" aria-hidden="true" />
        <span className="ghs-repo__name">{repo.name}</span>
        <FaArrowUpRightFromSquare
          className="ghs-repo__arrow"
          aria-hidden="true"
        />
      </div>

      {repo.description && <p className="ghs-repo__desc">{repo.description}</p>}

      <div className="ghs-repo__foot">
        {repo.lang && (
          <span className="ghs-repo__lang">
            <span className="ghs-repo__lang-dot" aria-hidden="true" />
            {repo.lang}
          </span>
        )}
        <span className="ghs-repo__meta">
          <FaStar aria-hidden="true" /> {repo.stars}
        </span>
        <span className="ghs-repo__meta">
          <FaCodeBranch aria-hidden="true" /> {repo.forks}
        </span>
        <span className="ghs-repo__updated">Updated {updatedDate}</span>
      </div>
    </a>
  );
}

// ── Main component ─────────────────────────────────────────────
const GitHubStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, 0.08);
  const { data, loading, error } = useGitHubStats(USERNAME);

  const stats = data?.stats;
  const profile = data?.profile;

  return (
    <section
      className={`ghs ${inView ? "ghs--visible" : ""}`}
      ref={ref}
      aria-label="GitHub activity"
    >
      <div className="ghs__container">
        {/* ── Header ──────────────────────────────────────────── */}
        <div className="ghs__header">
          <span className="ghs__label">Open Source</span>
          <h2 className="ghs__title">
            GitHub <span className="ghs__accent">Activity</span>
          </h2>
          <p className="ghs__sub">
            Live stats pulled from the GitHub API — repos, languages, and top
            projects.
          </p>
        </div>

        {/* ── Error state ──────────────────────────────────────── */}
        {error && (
          <div className="ghs__error" role="alert">
            <FaGithub aria-hidden="true" />
            <span>
              Could not load GitHub data —{" "}
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                view profile directly
              </a>
            </span>
          </div>
        )}

        {/* ── Body (shown even while loading via skeletons) ────── */}
        {!error && (
          <>
            {/* STAT CARDS */}
            <div className="ghs__stats">
              <StatCard
                icon={<FaGithub />}
                value={stats?.totalRepos}
                label="Public Repos"
                loading={loading}
              />
              <StatCard
                icon={<FaStar />}
                value={stats?.totalStars}
                label="Total Stars"
                loading={loading}
              />
              <StatCard
                icon={<FaCodeBranch />}
                value={stats?.followers}
                label="Followers"
                loading={loading}
              />
              <StatCard
                icon={<span className="ghs-stat__lang-icon">{"{}"}</span>}
                value={stats?.topLanguages?.[0]?.name ?? "—"}
                label="Top Language"
                loading={loading}
              />
            </div>

            {/* BOTTOM GRID: language bars + top repos */}
            <div className="ghs__grid">
              {/* LANGUAGE BREAKDOWN */}
              <div className="ghs__panel">
                <h3 className="ghs__panel-title">Languages</h3>
                {loading
                  ? Array.from({ length: 5 }).map((_, i) => (
                      <Skeleton key={i} className="ghs-skeleton--lang" />
                    ))
                  : stats?.topLanguages.map((l, i) => (
                      <LangBar
                        key={l.name}
                        name={l.name}
                        pct={l.pct}
                        index={i}
                        visible={inView}
                      />
                    ))}
              </div>

              {/* TOP REPOS */}
              <div className="ghs__panel ghs__panel--repos">
                <h3 className="ghs__panel-title">Top Repositories</h3>
                <div className="ghs__repos">
                  {loading
                    ? Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="ghs-skeleton--repo" />
                      ))
                    : stats?.topRepos.map((repo, i) => (
                        <RepoCard key={repo.name} repo={repo} index={i} />
                      ))}
                </div>
              </div>
            </div>

            {/* CONTRIBUTION HEATMAP */}
            <div className="ghs__heatmap-wrap">
              <h3 className="ghs__panel-title">Contribution Graph</h3>
              <p className="ghs__heatmap-note">
                Each square = one day · darker = more contributions
              </p>
              {/* ghchart.ssh.surf — free, no auth, just an img tag.
                  Blue variant (4f8ef7) matches --primary in dark mode. */}
              <div className="ghs__heatmap">
                <picture>
                  {/* Dark mode — blue tinted chart */}
                  <source
                    media="(prefers-color-scheme: dark)"
                    srcSet={`https://ghchart.ssh.surf/4f8ef7/${USERNAME}`}
                  />
                  {/* Light mode — default green chart */}
                  <img
                    src={`https://ghchart.ssh.surf/${USERNAME}`}
                    alt={`${USERNAME}'s GitHub contribution chart`}
                    className="ghs__heatmap-img"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget
                        .closest(".ghs__heatmap")
                        .classList.add("ghs__heatmap--failed");
                    }}
                  />
                </picture>
                {/* Fallback shown via CSS when img fails */}
                <div className="ghs__heatmap-fallback" aria-hidden="true">
                  <FaGithub />
                  <span>Heatmap unavailable — view on GitHub</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="ghs__cta">
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ghs__cta-btn"
              >
                <FaGithub aria-hidden="true" />
                View Full Profile
                <FaArrowUpRightFromSquare aria-hidden="true" />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubStats;
