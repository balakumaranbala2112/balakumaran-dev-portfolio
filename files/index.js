// functions/index.js
// ─────────────────────────────────────────────────────────────
// Entry point — registers all Cloud Functions
// ─────────────────────────────────────────────────────────────

const { sendMessage } = require("./contact");
const { getProjects, getProjectById } = require("./projects");
const { getBlogs, getBlogById } = require("./blogs");

module.exports = {
  // Contact form → saves to Firestore + emails you
  sendMessage,

  // Projects (public read)
  getProjects,
  getProjectById,

  // Blogs (public read)
  getBlogs,
  getBlogById,
};
