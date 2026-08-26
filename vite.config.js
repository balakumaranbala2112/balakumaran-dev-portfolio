import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["pwa-192.png", "pwa-512.png", "offline.html"],
      manifest: {
        name: "Balakumaran K | Portfolio",
        short_name: "BK Portfolio",
        description:
          "Full-Stack MERN Developer from Ariyalur, India. Building scalable React apps, REST APIs, and MongoDB backends.",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        categories: ["portfolio", "developer", "technology"],
        screenshots: [
          {
            src: "/og-preview.png",
            sizes: "1200x630",
            type: "image/png",
            form_factor: "wide",
            label: "Portfolio Homepage",
          },
        ],
      },
      workbox: {
        // Precache core built assets (skip large images handled by runtime cache)
        globPatterns: ["**/*.{js,css,html,ico,woff2,woff}", "**/*.png"],
        globIgnores: ["**/campuslink*.png"],
        // Raise limit to accommodate larger assets (default is 2MB)
        maximumFileSizeToCacheInBytes: 6 * 1024 * 1024, // 6 MB
        // Skip waiting so new SW activates immediately
        skipWaiting: true,
        clientsClaim: true,
        // Offline fallback for navigation requests
        navigateFallback: "/offline.html",
        navigateFallbackDenylist: [/^\/api/, /\.pdf$/, /^https:\/\/drive\.google\.com/],
        runtimeCaching: [
          // Google Fonts — cache-first, long TTL
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          // Firebase / API — network-first, always fresh
          {
            urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "firebase-cache",
              networkTimeoutSeconds: 10,
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          // EmailJS — network-only (don't cache POST requests)
          {
            urlPattern: /^https:\/\/api\.emailjs\.com\/.*/i,
            handler: "NetworkOnly",
          },
          // Images — stale-while-revalidate for fast loads
          {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
