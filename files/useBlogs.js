// src/hooks/useBlogs.js
// ─────────────────────────────────────────────────────────────
// Fetches blog posts from Firebase Cloud Functions
// Drop-in replacement for the static blogsData import
// ─────────────────────────────────────────────────────────────

import { useState, useEffect } from "react";
import { fetchBlogs, fetchBlogById } from "@/services/api";

// ── All blogs ─────────────────────────────────────────────────
export function useBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBlogs();
        if (!cancelled) setBlogs(data.blogs);
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
  }, []);

  return { blogs, loading, error };
}

// ── Single blog post ─────────────────────────────────────────
export function useBlog(id) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchBlogById(id);
        if (!cancelled) setBlog(data);
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

  return { blog, loading, error };
}
