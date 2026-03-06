// src/services/api.js
// ─────────────────────────────────────────────────────────────
// All Cloud Function API calls — one source of truth
// Import and use these in your hooks / components
// ─────────────────────────────────────────────────────────────

import { FUNCTIONS_URL } from "./firebase";

// ── Helper ────────────────────────────────────────────────────
async function apiFetch(path, options = {}) {
  const res = await fetch(`${FUNCTIONS_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Request failed");
  return data;
}

// ── Contact ───────────────────────────────────────────────────

/**
 * Submit contact form
 * @param {{ name, email, subject, message }} fields
 * @returns {{ success: boolean, id: string, message: string }}
 */
export async function submitContactForm(fields) {
  return apiFetch("/sendMessage", {
    method: "POST",
    body: JSON.stringify(fields),
  });
}

// ── Projects ──────────────────────────────────────────────────

/**
 * Fetch paginated projects
 * @param {{ category?: string, page?: number, limit?: number }} params
 * @returns {{ projects: [], total: number, page: number, totalPages: number }}
 */
export async function fetchProjects({ category, page = 1, limit = 9 } = {}) {
  const params = new URLSearchParams({ page, limit });
  if (category && category !== "All") params.set("category", category);
  return apiFetch(`/getProjects?${params}`);
}

/**
 * Fetch single project by id
 * @param {string|number} id
 * @returns {Object} project
 */
export async function fetchProjectById(id) {
  return apiFetch(`/getProjectById?id=${id}`);
}

// ── Blogs ─────────────────────────────────────────────────────

/**
 * Fetch all blog posts
 * @returns {{ blogs: [] }}
 */
export async function fetchBlogs() {
  return apiFetch("/getBlogs");
}

/**
 * Fetch single blog post by slug or id
 * @param {string} id
 * @returns {Object} blog post
 */
export async function fetchBlogById(id) {
  return apiFetch(`/getBlogById?id=${id}`);
}
