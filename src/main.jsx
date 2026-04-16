import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";

// Import base CSS in proper order
import "@/styles/base/reset.css";
import "@/styles/base/variables.css";
import "@/styles/base/globals.css";
import "@/styles/base/typography.css";
import "@/styles/base/utilities.css";

import App from "./App";

// Register service worker with auto-update
// Re-registers whenever a new SW is available
registerSW({
  onNeedRefresh() {
    // New content is available; SW will auto-update (registerType: 'autoUpdate')
    console.info("[PWA] New content available, updating…");
  },
  onOfflineReady() {
    console.info("[PWA] App is ready to work offline.");
  },
  onRegisterError(error) {
    console.error("[PWA] Service worker registration failed:", error);
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
