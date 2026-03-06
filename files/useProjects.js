// src/hooks/useProjects.js
// ─────────────────────────────────────────────────────────────
// Fetches projects from Firebase Cloud Functions
// Drop-in replacement for the static projectsData import
// ─────────────────────────────────────────────────────────────

import { useState, useEffect, useCallback } from "react";
import { fetchProjects, fetchProjectById } from "@/services/api";

// ── All projects (paginated + filterable) ─────────────────────
export function useProjects({ category = "All", page = 1, limit = 9 } = {}) {
  const [projects, setProjects] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchProjects({ category, page, limit });
      setProjects(data.projects);
      setTotal(data.total);
      setTotalPages(data.totalPages);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [category, page, limit]);

  useEffect(() => {
    load();
  }, [load]);

  return { projects, total, totalPages, loading, error, refetch: load };
}

// ── Single project ────────────────────────────────────────────
export function useProject(id) {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProjectById(id);
        if (!cancelled) setProject(data);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return { project, loading, error };
}
