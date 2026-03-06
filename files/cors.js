// functions/utils/cors.js
// ─────────────────────────────────────────────────────────────
// CORS handler — only allows requests from your portfolio domain
// Update ALLOWED_ORIGINS before deploying to production
// ─────────────────────────────────────────────────────────────

const cors = require("cors");

const ALLOWED_ORIGINS = [
  // Add your Firebase Hosting domain here after deployment
  // e.g. "https://bk-dev-portfolio.web.app"
  //      "https://yourdomain.com"
  "http://localhost:5173", // Vite dev server
  "http://localhost:4173", // Vite preview
];

exports.corsHandler = cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. curl, Postman, server-to-server)
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.includes(origin)) return callback(null, true);
    return callback(new Error(`CORS blocked: ${origin}`));
  },
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: false,
});
