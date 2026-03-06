// src/services/firebase.js
// ─────────────────────────────────────────────────────────────
// Firebase app initialization
//
// SETUP:
//  1. Go to Firebase Console → Project Settings → Your Apps → Web App
//  2. Copy the firebaseConfig object
//  3. Create a .env file in project root with these values:
//
//     VITE_FIREBASE_API_KEY=...
//     VITE_FIREBASE_AUTH_DOMAIN=...
//     VITE_FIREBASE_PROJECT_ID=...
//     VITE_FIREBASE_STORAGE_BUCKET=...
//     VITE_FIREBASE_MESSAGING_SENDER_ID=...
//     VITE_FIREBASE_APP_ID=...
//     VITE_FUNCTIONS_BASE_URL=https://<region>-<project-id>.cloudfunctions.net
//
//  4. Add .env to .gitignore (already there typically)
// ─────────────────────────────────────────────────────────────

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Cloud Functions base URL
// e.g. "https://us-central1-bk-dev-portfolio.cloudfunctions.net"
export const FUNCTIONS_URL =
  import.meta.env.VITE_FUNCTIONS_BASE_URL ||
  "http://127.0.0.1:5001/bk-dev-portfolio/us-central1";
