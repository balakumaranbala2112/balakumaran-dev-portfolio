// src/hooks/useGitHubStats.js
//
// Fetches GitHub profile + repos for a given username.
// Caches the result in sessionStorage for 30 minutes so we
// don't hammer the 60 req/hour unauthenticated rate limit.
//
// Returns:
//   { data, loading, error }
//
//   data = {
//     profile:   { name, bio, avatar_url, public_repos, followers, html_url }
//     repos:     raw array (all public repos, up to 100)
//     stats: {
//       totalStars   number
//       totalForks   number
//       topLanguages Array<{ name, count, pct }>  (top 6, sorted by count)
//       topRepos     Array<{ name, stars, lang, url, description }> (top 4 by stars)
//       totalRepos   number
//       followers    number
//     }
//   }

import { useState, useEffect } from "react";

const CACHE_KEY = (u) => `gh_stats_${u}`;
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

function readCache(username) {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY(username));
    if (!raw) return null;
    const { ts, data } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return data;
  } catch {
    return null;
  }
}

function writeCache(username, data) {
  try {
    sessionStorage.setItem(
      CACHE_KEY(username),
      JSON.stringify({ ts: Date.now(), data }),
    );
  } catch {
    // sessionStorage full or unavailable — skip silently
  }
}

function deriveStats(repos) {
  const langs = {};
  let totalStars = 0;
  let totalForks = 0;

  for (const r of repos) {
    totalStars += r.stargazers_count ?? 0;
    totalForks += r.forks_count ?? 0;
    if (r.language) {
      langs[r.language] = (langs[r.language] ?? 0) + 1;
    }
  }

  const totalLangRepos = Object.values(langs).reduce((a, b) => a + b, 0);
  const topLanguages = Object.entries(langs)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({
      name,
      count,
      pct: Math.round((count / totalLangRepos) * 100),
    }));

  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4)
    .map((r) => ({
      name: r.name,
      description: r.description,
      stars: r.stargazers_count,
      forks: r.forks_count,
      lang: r.language,
      url: r.html_url,
      updatedAt: r.updated_at,
    }));

  return { totalStars, totalForks, topLanguages, topRepos };
}

export function useGitHubStats(username) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    if (!username) return;

    const cached = readCache(username);
    if (cached) {
      setState({ data: cached, loading: false, error: null });
      return;
    }

    let cancelled = false;

    async function fetch_() {
      try {
        const BASE = "https://api.github.com";
        const headers = { Accept: "application/vnd.github+json" };

        const [profileRes, reposRes] = await Promise.all([
          fetch(`${BASE}/users/${username}`, { headers }),
          fetch(`${BASE}/users/${username}/repos?per_page=100&sort=updated`, {
            headers,
          }),
        ]);

        if (!profileRes.ok) throw new Error(`GitHub API ${profileRes.status}`);
        if (!reposRes.ok)
          throw new Error(`GitHub Repos API ${reposRes.status}`);

        const [profile, repos] = await Promise.all([
          profileRes.json(),
          reposRes.json(),
        ]);

        const stats = deriveStats(repos);

        const data = {
          profile: {
            name: profile.name || profile.login,
            bio: profile.bio,
            avatar_url: profile.avatar_url,
            public_repos: profile.public_repos,
            followers: profile.followers,
            following: profile.following,
            html_url: profile.html_url,
            created_at: profile.created_at,
          },
          repos,
          stats: {
            ...stats,
            totalRepos: profile.public_repos,
            followers: profile.followers,
          },
        };

        if (!cancelled) {
          writeCache(username, data);
          setState({ data, loading: false, error: null });
        }
      } catch (err) {
        if (!cancelled) {
          setState({ data: null, loading: false, error: err.message });
        }
      }
    }

    fetch_();
    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}
