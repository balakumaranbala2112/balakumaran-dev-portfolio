// scripts/seed-firestore.mjs
// ─────────────────────────────────────────────────────────────
// One-time seed script — pushes your existing static data
// (projectsData.js + blogsData.js) into Firestore
//
// USAGE:
//   1. npm install firebase-admin (if not already)
//   2. Download service account key from Firebase Console →
//      Project Settings → Service Accounts → Generate New Key
//      Save as scripts/serviceAccountKey.json
//   3. node scripts/seed-firestore.mjs
//
// SAFE TO RUN MULTIPLE TIMES — uses set() with merge:false
// so it will overwrite existing docs.
// ─────────────────────────────────────────────────────────────

import { readFileSync } from "fs";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";
import admin from "firebase-admin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const serviceAccount = JSON.parse(
  readFileSync(path.join(__dirname, "serviceAccountKey.json"), "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// ── Import your existing static data ────────────────────────
// We use dynamic import so this script works from the project root
const require = createRequire(import.meta.url);

// Adjust paths if needed
const { default: projectsData } = await import(
  "../src/data/projectsData.js"
).catch(() => {
  console.error(
    "Could not import projectsData. Check path in seed script."
  );
  process.exit(1);
});

const { blogsData } = await import("../src/data/blogsData.js").catch(() => {
  console.error("Could not import blogsData. Check path in seed script.");
  process.exit(1);
});

// ── Seed projects ─────────────────────────────────────────────
async function seedProjects() {
  console.log("Seeding projects...");
  const batch = db.batch();

  projectsData.forEach((project, index) => {
    const docRef = db.collection("projects").doc(String(project.id));
    batch.set(docRef, {
      ...project,
      order: index, // used for ordering in queries
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  });

  await batch.commit();
  console.log(`✓ Seeded ${projectsData.length} projects`);
}

// ── Seed blogs ────────────────────────────────────────────────
async function seedBlogs() {
  console.log("Seeding blogs...");
  const batch = db.batch();

  blogsData.forEach((blog) => {
    const docRef = db.collection("blogs").doc(String(blog.id));
    // Convert date object to a timestamp-friendly format
    const publishedAt = blog.date
      ? new Date(
          `${blog.date.month} ${blog.date.day}, ${blog.date.year}`
        )
      : new Date();

    batch.set(docRef, {
      ...blog,
      publishedAt,
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  });

  await batch.commit();
  console.log(`✓ Seeded ${blogsData.length} blogs`);
}

// ── Run ───────────────────────────────────────────────────────
try {
  await seedProjects();
  await seedBlogs();
  console.log("\n✅ Firestore seeded successfully!");
  process.exit(0);
} catch (err) {
  console.error("Seed failed:", err);
  process.exit(1);
}
