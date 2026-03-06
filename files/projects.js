// functions/projects.js
// ─────────────────────────────────────────────────────────────
// GET /getProjects         → returns all projects (paginated)
// GET /getProjectById?id=1 → returns single project
// ─────────────────────────────────────────────────────────────

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { corsHandler } = require("./utils/cors");

if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();

// ── GET /getProjects ──────────────────────────────────────────
exports.getProjects = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    try {
      const { category, page = "1", limit = "9" } = req.query;
      const pageNum = Math.max(1, parseInt(page));
      const limitNum = Math.min(20, Math.max(1, parseInt(limit)));

      let query = db.collection("projects").orderBy("order", "asc");

      if (category && category !== "All") {
        query = query.where("category", "==", category);
      }

      const snapshot = await query.get();
      const all = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Paginate
      const total = all.length;
      const start = (pageNum - 1) * limitNum;
      const items = all.slice(start, start + limitNum);

      return res.status(200).json({
        projects: items,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum),
      });
    } catch (err) {
      console.error("getProjects error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});

// ── GET /getProjectById ───────────────────────────────────────
exports.getProjectById = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: "id is required" });
    }

    try {
      // Try by Firestore doc id first, then by numeric `id` field
      let doc = await db.collection("projects").doc(id).get();

      if (!doc.exists) {
        const snap = await db
          .collection("projects")
          .where("id", "==", parseInt(id))
          .limit(1)
          .get();
        if (snap.empty) {
          return res.status(404).json({ error: "Project not found" });
        }
        doc = snap.docs[0];
      }

      return res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (err) {
      console.error("getProjectById error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});
