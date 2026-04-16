# Convert Portfolio to PWA

Convert the Vite + React portfolio at `d:\PROJECTS\bk-dev-portfolio` into a fully compliant Progressive Web App.

## What Makes a Proper PWA

A proper PWA requires:
1. **Web App Manifest** — describes name, icons, colors, display mode
2. **Service Worker** — enables offline support & caching strategies
3. **HTTPS** (already ensured by Firebase Hosting)
4. **Installable** — meets all browser criteria for "Add to Home Screen"
5. **Offline fallback** — works (at least partially) without internet

## Proposed Changes

---

### 1. Install `vite-plugin-pwa`

The cleanest approach for a Vite app. It auto-generates the service worker and links the manifest.

```
npm install -D vite-plugin-pwa
```

---

### 2. PWA Icons

#### [NEW] `public/pwa-192.png` & `public/pwa-512.png`
Generated from the existing `balakumaran.svg` logo. These are required for installability.

---

### 3. Web App Manifest (auto-generated via plugin config)

Will be configured inside `vite.config.js`. Key manifest fields:
- `name`: "Balakumaran K | Portfolio"
- `short_name`: "BK Portfolio"  
- `theme_color`: "#0f172a"
- `background_color`: "#0f172a"
- `display`: "standalone"
- `orientation`: "portrait"
- `start_url`: "/"
- `icons`: 192px & 512px PNG

---

### 4. Service Worker Strategy

Using `vite-plugin-pwa`'s built-in **Workbox** with:
- **Network-first** for API/Firebase calls (always fresh data when online)
- **Cache-first** for static assets (JS, CSS, fonts, images)
- **Offline fallback page** for navigation requests when offline

---

### 5. Offline Fallback Page

#### [NEW] `public/offline.html`
A minimal offline page shown when the user navigates to a page while offline.

---

### 6. Update `vite.config.js`

#### [MODIFY] `vite.config.js`
Add `VitePWA` plugin with full Workbox configuration.

---

### 7. Update `index.html`

#### [MODIFY] `index.html`
- Add `<link rel="manifest" href="/manifest.webmanifest" />` (auto-added by plugin, but confirm)
- Add `<link rel="apple-touch-icon" href="/pwa-192.png" />` for iOS
- Ensure `theme-color` meta is present (already done ✅)

---

### 8. Register Service Worker in React

#### [MODIFY] `src/main.jsx`
- Remove the stray `debugger;` statement (this is a bug)
- Add service worker registration using the plugin's virtual module `virtual:pwa-register`

---

## Verification Plan

### Automated / Dev Tool Checks
- Run `npm run build && npm run preview`
- Open Chrome DevTools → **Application** tab → check:
  - Manifest loads correctly
  - Service Worker is registered and activated
  - Lighthouse PWA audit score: target **100**

### Manual Verification
- Click the install icon in the browser address bar → app installs
- Go offline in DevTools Network tab → navigate to app → offline page shows
- On Android Chrome: "Add to Home Screen" prompt appears
