<div align="center">

# ✦ Balakumaran K — Dev Portfolio

**Full-Stack MERN Developer · Chennai, India · Open to Work**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-Visit_Portfolio-2563eb?style=for-the-badge&logoColor=white)](https://your-firebase-domain.web.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/balakumaran2112)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/balakumaranbala2112)

![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Hosting-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3_Custom_Properties-1572B6?style=flat-square&logo=css3&logoColor=white)

[![Top Language](https://img.shields.io/github/languages/top/balakumaranbala2112/balakumaran-dev-portfolio?style=flat-square&color=2563eb)](https://github.com/balakumaranbala2112/balakumaran-dev-portfolio)
[![Repo Size](https://img.shields.io/github/repo-size/balakumaranbala2112/balakumaran-dev-portfolio?style=flat-square&color=2563eb)](https://github.com/balakumaranbala2112/balakumaran-dev-portfolio)
[![Last Commit](https://img.shields.io/github/last-commit/balakumaranbala2112/balakumaran-dev-portfolio?style=flat-square&color=2563eb)](https://github.com/balakumaranbala2112/balakumaran-dev-portfolio/commits)
[![License](https://img.shields.io/github/license/balakumaranbala2112/balakumaran-dev-portfolio?style=flat-square&color=2563eb)](LICENSE)

---

*A fast, fully responsive developer portfolio built with React 19 and Vite 7 —
featuring live GitHub stats, dark mode, contact form via EmailJS, and lazy-loaded pages.*

</div>

---

## 📸 Preview

<div align="center">

> **[🔗 View Live →](https://your-firebase-domain.web.app)**

| Light Mode | Dark Mode |
|:---:|:---:|
| *(add screenshot)* | *(add screenshot)* |

</div>

---

## 📋 Table of Contents

- [✦ About](#-about)
- [🚀 Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📄 Pages](#-pages)
- [⚡ Getting Started](#-getting-started)
- [🔑 Environment Variables](#-environment-variables)
- [🌐 Deployment](#-deployment)
- [📁 Project Structure](#-project-structure)
- [🤝 Connect](#-connect)

---

## ✦ About

This is my personal developer portfolio — built from scratch, not a template. Every component, animation, and layout decision was written by hand to reflect how I actually build production software.

The goal was simple: **make a portfolio that feels like a product**, not a résumé in a browser tab. It should load fast, work on any screen size, and give a recruiter or hiring manager everything they need in under 30 seconds.

> **Currently open to full-time roles and internships** in full-stack or backend development, targeting companies like Zoho, TCS, Wipro, and Infosys as a 2026 fresher.

---

## 🚀 Features

**Performance**
- ⚡ Vite 7 build with manual chunk splitting (`vendor`, `icons`, `emailjs`)
- 🦥 All pages lazy-loaded via `React.lazy` + `Suspense`
- 🖼 Images use `loading="lazy"` and `.webp` format where possible
- 🔤 Google Fonts loaded with `preconnect` + `preload` — no render-blocking

**UI / UX**
- 🌙 Dark mode with system-preference detection (`prefers-color-scheme`) + manual toggle, persisted in `localStorage`
- 📱 Fully responsive — tested at 380px, 480px, 640px, 768px, 1024px, 1280px+
- 🎞 Scroll-triggered fade-in animations on every section via `IntersectionObserver`
- 🔤 Three-font system: Space Grotesk (headings) · DM Sans (body) · JetBrains Mono (code)
- 🎨 CSS custom properties for every colour, spacing, and shadow token — zero hardcoded values

**Sections & Pages**
- 🖥 Terminal-style animated hero on the Home page
- 📊 Live GitHub stats — repos, stars, top languages, contribution heatmap — fetched at runtime with 30-min `sessionStorage` cache
- 📬 Contact form powered by EmailJS with full client-side validation
- 📄 Resume page with download link
- 🗂 Projects page with command-palette search, tag filtering, and pagination
- 🧑‍💻 About page with skills grid, education timeline, and hobbies

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite 7 |
| **Routing** | React Router 7 |
| **Styling** | Pure CSS with custom properties (no Tailwind) |
| **Icons** | react-icons v5 |
| **Contact Form** | EmailJS Browser SDK v4 |
| **GitHub Data** | GitHub REST API v3 (unauthenticated) |
| **Code Highlighting** | PrismJS |
| **Hosting** | Firebase Hosting |
| **CI/CD** | GitHub Actions → Firebase deploy on push to `main` |

---

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Home** | Hero, About preview, Stats, Featured projects, GitHub activity, Hire Me CTA |
| `/about` | **About** | Full bio, skills grid, education timeline, hobbies |
| `/projects` | **Projects** | All projects with search, tag filter, pagination |
| `/projects/:id` | **Project Detail** | Full case study — overview, features, tech stack, challenges, outcome |
| `/resume` | **Resume** | Inline resume viewer + PDF download |
| `/contact` | **Contact** | EmailJS contact form + socials sidebar |

---

## ⚡ Getting Started

**Prerequisites:** Node.js 18+ and Git

```bash
# 1. Clone the repository
git clone https://github.com/balakumaranbala2112/balakumaran-dev-portfolio.git

# 2. Navigate into the project
cd balakumaran-dev-portfolio

# 3. Install dependencies
npm install

# 4. Copy the environment template and fill in your keys
cp .env.example .env.local

# 5. Start the dev server
npm run dev
# → http://localhost:5173
```

**Other commands:**

```bash
npm run build      # Production build → /dist
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the project root. This file is gitignored — **never commit it**.

```env
# EmailJS — get these from https://emailjs.com
VITE_EMAIL_SERVICE_ID=service_xxxxxxx
VITE_EMAIL_TEMPLATE_ID=template_xxxxxxx
VITE_EMAIL_PUBLIC_KEY=your_public_key_here
```

> **How to get EmailJS credentials:**
> 1. Sign up at [emailjs.com](https://emailjs.com)
> 2. Create an Email Service (Gmail works fine)
> 3. Create an Email Template — use `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}` as variables
> 4. Copy the Service ID, Template ID, and Public Key into your `.env.local`

The GitHub stats section uses the **public GitHub API** — no token needed. If you hit the 60 req/hr rate limit, add a personal access token:

```env
# Optional — raises rate limit from 60 to 5000 requests/hour
VITE_GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

---

## 🌐 Deployment

This project deploys to **Firebase Hosting** automatically on every push to `main` via GitHub Actions.

**Manual deploy:**

```bash
# Make sure .env.local is present, then:
npm run build
firebase deploy --only hosting
```

**First-time setup:**

```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # select "dist" as public directory, SPA: yes
```

> ⚠️ **Important:** Always run `npm run build` locally before `firebase deploy`. Vite bakes your `.env.local` values into the bundle at build time — if you skip the build step, your contact form will break in production.

---

## 📁 Project Structure

```
balakumaran-dev-portfolio/
├── public/
│   ├── balakumaran.svg        # favicon
│   └── resume.pdf             # downloadable resume
│
├── src/
│   ├── assets/
│   │   └── images/            # profile photo, project screenshots
│   │
│   ├── components/
│   │   ├── home/              # Hero, AboutPreview, Stats, FeaturedProjects,
│   │   │                      # GitHubStats, Testimonials, HireMe, ContactMini
│   │   ├── about/             # AboutHero, Skills, Timeline, Hobbies
│   │   ├── projects/          # ProjectCard, ProjectsToolbar, ProjectSkeleton, Pagination
│   │   └── PageLoader.jsx
│   │
│   ├── data/
│   │   ├── projectsData.json  # all projects (for /projects page)
│   │   ├── selectedProjects.json  # featured 3 (for home page)
│   │   └── caseStudies.js     # detailed case study content
│   │
│   ├── hooks/
│   │   ├── useInView.js       # IntersectionObserver scroll animation
│   │   ├── useTheme.jsx       # dark/light mode toggle + persistence
│   │   └── useGitHubStats.js  # GitHub API fetch with sessionStorage cache
│   │
│   ├── layouts/
│   │   ├── MainLayout.jsx     # Navbar + Outlet + Footer
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectDetail.jsx
│   │   ├── Resume.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   │
│   ├── routes/
│   │   └── router.jsx         # createBrowserRouter — all routes lazy-loaded
│   │
│   ├── styles/
│   │   ├── base/              # variables.css, globals.css, reset.css, typography.css
│   │   ├── components/        # per-component CSS files
│   │   └── pages/             # per-page CSS files
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .env.local                 # ← you create this (gitignored)
├── .env.example               # template with variable names
├── firebase.json
├── .firebaserc
└── vite.config.js
```

---

## 🤝 Connect

I'm actively looking for my first full-time or internship role in full-stack / backend development.

<div align="center">

| Platform | Link |
|---|---|
| 📧 **Email** | [bkumaran2112@gmail.com](mailto:bkumaran2112@gmail.com) |
| 💼 **LinkedIn** | [linkedin.com/in/balakumaran2112](https://linkedin.com/in/balakumaran2112) |
| 🐙 **GitHub** | [github.com/balakumaranbala2112](https://github.com/balakumaranbala2112) |
| 🌐 **Portfolio** | [your-firebase-domain.web.app](https://your-firebase-domain.web.app) |

</div>

---

<div align="center">

**If you found this useful, a ⭐ on the repo goes a long way — thank you!**

Made with focus and too much coffee by [Balakumaran K](https://github.com/balakumaranbala2112) · Chennai, India 🇮🇳

[⬆ Back to top](#-balakumaran-k--dev-portfolio)

</div>
