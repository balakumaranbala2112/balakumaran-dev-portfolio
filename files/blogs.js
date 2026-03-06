// functions/blogs.js
// ─────────────────────────────────────────────────────────────
// GET /getBlogs          → all blog posts (your own articles)
// GET /getBlogById?id=   → single post by slug or doc id
// ─────────────────────────────────────────────────────────────

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { corsHandler } = require("./utils/cors");

if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();

exports.getBlogs = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    try {
      const snapshot = await db
        .collection("blogs")
        .orderBy("publishedAt", "desc")
        .get();

      const blogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return res.status(200).json({ blogs });
    } catch (err) {
      console.error("getBlogs error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});

exports.getBlogById = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { id } = req.query;
    if (!id) return res.status(400).json({ error: "id is required" });

    try {
      // Try by slug field first
      let snap = await db
        .collection("blogs")
        .where("id", "==", id)
        .limit(1)
        .get();

      if (snap.empty) {
        const doc = await db.collection("blogs").doc(id).get();
        if (!doc.exists) {
          return res.status(404).json({ error: "Blog not found" });
        }
        return res.status(200).json({ id: doc.id, ...doc.data() });
      }

      const doc = snap.docs[0];
      return res.status(200).json({ id: doc.id, ...doc.data() });
    } catch (err) {
      console.error("getBlogById error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});
