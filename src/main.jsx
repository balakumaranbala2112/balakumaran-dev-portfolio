import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import base CSS in proper order
import "@/styles/base/reset.css";
import "@/styles/base/variables.css";
import "@/styles/base/globals.css";
import "@/styles/base/typography.css";
import "@/styles/base/utilities.css";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
