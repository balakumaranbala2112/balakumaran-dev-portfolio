# 🔥 Backend Setup Guide — bk-dev-portfolio

Complete setup guide to wire up Firebase backend to your portfolio.

---

## What Was Added

| File | Purpose |
|---|---|
| `functions/index.js` | Cloud Functions entry point |
| `functions/contact.js` | Contact form → Firestore + Email |
| `functions/projects.js` | Projects API (GET all, GET by id) |
| `functions/blogs.js` | Blogs API (GET all, GET by id) |
| `functions/utils/validate.js` | Input validation & sanitization |
| `functions/utils/cors.js` | CORS config (whitelist your domain) |
| `functions/package.json` | Functions dependencies |
| `src/services/firebase.js` | Firebase app init |
| `src/services/api.js` | All API call functions |
| `src/hooks/useProjects.js` | React hook for projects data |
| `src/hooks/useBlogs.js` | React hook for blogs data |
| `src/pages/Contact.jsx` | Updated — now calls real API |
| `firebase.json` | Firebase project config |
| `firestore.rules` | Security rules |
| `firestore.indexes.json` | Firestore indexes |
| `storage.rules` | Storage security rules |
| `scripts/seed-firestore.mjs` | One-time data seed script |
| `.env.example` | Environment variable template |

---

## Step 1 — Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project (or use existing)
3. Enable these services:
   - **Firestore Database** (start in production mode)
   - **Cloud Functions** (requires Blaze pay-as-you-go plan for email)
   - **Storage** (for project images and resume PDF)
4. Add a **Web App** → copy the config values

---

## Step 2 — Environment Variables

```bash
cp .env.example .env
```

Fill in your Firebase config values in `.env`.

---

## Step 3 — Install Dependencies

```bash
# Frontend Firebase SDK
npm install firebase

# Functions dependencies
cd functions
npm install
cd ..
```

---

## Step 4 — Gmail App Password (for contact form emails)

1. Go to your Google Account → Security → 2-Step Verification (enable it)
2. Then: Security → App Passwords → create one for "Mail"
3. Set it in Firebase Functions config:

```bash
firebase functions:config:set gmail.user="you@gmail.com" gmail.pass="your-16-char-app-password"
```

---

## Step 5 — Seed Firestore with Your Existing Data

```bash
# Download service account key:
# Firebase Console → Project Settings → Service Accounts → Generate New Key
# Save as: scripts/serviceAccountKey.json

npm install firebase-admin --save-dev
node scripts/seed-firestore.mjs
```

This pushes all your `projectsData.js` and `blogsData.js` into Firestore.

---

## Step 6 — Update CORS Whitelist

In `functions/utils/cors.js`, add your live domain:

```js
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "https://your-project-id.web.app",   // ← add this
  "https://yourdomain.com",              // ← and this if custom domain
];
```

---

## Step 7 — Local Development with Emulators

```bash
# Install Firebase CLI if you haven't
npm install -g firebase-tools
firebase login

# Start all emulators (Functions + Firestore + Hosting)
firebase emulators:start
```

Your app at `http://localhost:5173` will hit the local emulator automatically (the `.env` default points there).

---

## Step 8 — Deploy

```bash
# Build the frontend
npm run build

# Deploy everything
firebase deploy

# Or deploy individually
firebase deploy --only functions
firebase deploy --only hosting
firebase deploy --only firestore:rules
```

---

## Connecting Pages to Live Data

### Projects page
Replace the static import with the hook:

```jsx
// Before
import projectsData from "@/data/projectsData";

// After
import { useProjects } from "@/hooks/useProjects";

const { projects, loading, error, totalPages } = useProjects({
  category: activeFilter,
  page: currentPage,
});
```

### Project detail page
```jsx
import { useProject } from "@/hooks/useProjects";
import { useParams } from "react-router-dom";

const { id } = useParams();
const { project, loading, error } = useProject(id);
```

### Blogs page
```jsx
import { useBlogs } from "@/hooks/useBlogs";

const { blogs, loading, error } = useBlogs();
```

---

## Firestore Collections

| Collection | Description | Access |
|---|---|---|
| `projects` | All portfolio projects | Public read |
| `blogs` | Blog posts | Public read |
| `messages` | Contact form submissions | Functions only |
| `_rateLimits` | Rate limit tracking | Functions only |

---

## Adding a New Project (after initial seed)

Go to **Firebase Console → Firestore → projects** and add a document, or add it to `projectsData.js` and re-run the seed script.

---

## Cost Estimate

For a portfolio site, Firebase free tier (Spark) covers almost everything. Cloud Functions for email sending requires Blaze (pay-as-you-go), but the cost is effectively $0 for a portfolio (first 2M invocations/month are free).
