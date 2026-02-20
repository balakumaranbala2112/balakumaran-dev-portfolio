// src/data/projectsData.js
// ─────────────────────────────────────────────────────────────
// All 13 projects — card fields kept exactly as you had them.
// Each project now also has full case-study fields that
// ProjectDetail.jsx reads automatically via /projects/:id
// ─────────────────────────────────────────────────────────────

const projectsData = [
  // ── 1 ──────────────────────────────────────────────────────
  {
    id: 1,
    title: "StudyBuddy.AI",
    tech: "React • Node.js • MongoDB • Socket.io",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/1",

    subtitle:
      "A collaborative learning platform bridging the gap between students and instant doubt clearance.",
    heroImg:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "4 Weeks" },
      { label: "Type", value: "Academic Project" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Students often struggle to find immediate answers to specific academic doubts. Traditional forums are cluttered, and generic search engines don't always provide context-aware solutions.",
        "StudyBuddy.AI solves this by creating a dedicated environment where students can post questions to specific subject rooms (like DSA, Web Dev, or OS). It structures knowledge sharing and uses a clean, distraction-free interface to keep the focus on learning.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-shield-halved",
          title: "Secure Authentication",
          description:
            "Complete signup/login flow using JWT tokens, hashed passwords (Bcrypt), and protected route middleware.",
        },
        {
          icon: "fa-solid fa-comments",
          title: "Subject Forums",
          description:
            "Categorized discussion rooms for organizing content. Students can filter questions by tags like 'React' or 'Algorithms'.",
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Real-time Interaction",
          description:
            "Posts update instantly, and users can upvote helpful answers to push them to the top via Socket.io.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "Built using the MERN stack for scalability and a unified JavaScript codebase.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-database", label: "MongoDB" },
        { icon: "fa-solid fa-server", label: "Express" },
        { icon: "fa-solid fa-plug", label: "Socket.io" },
        { icon: "fa-solid fa-lock", label: "JWT" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "One of the biggest hurdles was managing state persistence for authenticated users. Initially, refreshing the page would log the user out.",
        "Structuring the relationship between Users, Posts, and Comments required careful planning to avoid deeply nested queries.",
      ],
      highlight: {
        title: "The Fix",
        body: "Implemented a secure localStorage check on app load that validates the existing JWT token against the backend before rendering private routes.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "The final application is a fully functional MVP handling user sessions, CRUD on posts, and a clean responsive UI across all devices.",
      ],
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "StudyBuddy Mobile View",
    },
    nextProject: { label: "Modern Book Store", id: 2 },
  },

  // ── 2 ──────────────────────────────────────────────────────
  {
    id: 2,
    title: "Modern Book Store",
    tech: "Firebase • Stripe • React • Redux",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/2",

    subtitle:
      "A full-featured e-commerce bookstore with cart, instant search, and Stripe payment integration.",
    heroImg:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Frontend Dev" },
      { label: "Timeline", value: "6 Weeks" },
      { label: "Type", value: "Personal Project" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Brick-and-mortar bookstores are shrinking and most online stores feel impersonal. Readers want curated suggestions, not endless scrolling.",
        "Modern Book Store gives readers a visually rich, curated shopping experience with real-time search, wishlists, and frictionless checkout backed by Firebase.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-magnifying-glass",
          title: "Instant Search",
          description:
            "Debounced full-text search across titles, authors, and genres powered by Firestore compound queries.",
        },
        {
          icon: "fa-solid fa-cart-shopping",
          title: "Persistent Cart",
          description:
            "Cart state synced to Firestore so items survive page refreshes and cross-device sessions.",
        },
        {
          icon: "fa-brands fa-stripe-s",
          title: "Stripe Checkout",
          description:
            "Secure one-click payment flow with webhook-driven order confirmation and email receipts.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "JAMstack architecture for instant page loads and global CDN distribution.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-solid fa-fire", label: "Firebase" },
        { icon: "fa-brands fa-stripe-s", label: "Stripe" },
        { icon: "fa-solid fa-diagram-project", label: "Redux" },
        { icon: "fa-solid fa-database", label: "Firestore" },
        { icon: "fa-solid fa-cloud", label: "Vercel" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Firestore's read pricing required careful query design — fetching entire collections was too expensive at scale.",
        "Stripe webhook handling in Firebase Functions introduced cold-start latency impacting order confirmation speed.",
      ],
      highlight: {
        title: "The Fix",
        body: "Introduced cursor-based Firestore pagination and warm-up ping calls before checkout, cutting confirmation time by 60%.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Launched a production-ready storefront with Lighthouse scores averaging 94 for Performance and 100 for Accessibility.",
      ],
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Bookstore Mobile View",
    },
    nextProject: { label: "Task Flow Pro", id: 3 },
  },

  // ── 3 ──────────────────────────────────────────────────────
  {
    id: 3,
    title: "Task Flow Pro",
    tech: "Next.js • TypeScript • Tailwind",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/3",

    subtitle:
      "A productivity-focused task manager with drag-and-drop boards, deadlines, and team collaboration.",
    heroImg:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "5 Weeks" },
      { label: "Type", value: "SaaS MVP" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Teams waste hours chasing task updates across Slack, email, and spreadsheets. There's no single source of truth for what's done and what's blocked.",
        "Task Flow Pro centralises task management into a typed Next.js app with a kanban board, deadline tracking, and role-based team access — all in real time.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-arrows-up-down-left-right",
          title: "Drag & Drop Kanban",
          description:
            "DnD Kit-powered board with optimistic UI updates, WIP limits, and full keyboard accessibility.",
        },
        {
          icon: "fa-solid fa-bell",
          title: "Deadline Alerts",
          description:
            "Automated email reminders 24h before due dates using cron jobs and Resend API.",
        },
        {
          icon: "fa-solid fa-users",
          title: "Team Roles",
          description:
            "Owner, Admin, and Member roles with granular board-level permissions enforced server-side.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "SSR Next.js for performance with TypeScript for type safety throughout.",
      items: [
        { icon: "fa-brands fa-react", label: "Next.js" },
        { icon: "fa-solid fa-code", label: "TypeScript" },
        { icon: "fa-solid fa-wind", label: "Tailwind" },
        { icon: "fa-solid fa-database", label: "Prisma" },
        { icon: "fa-solid fa-key", label: "NextAuth" },
        { icon: "fa-solid fa-envelope", label: "Resend" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Optimistic UI for drag-and-drop conflicted with Next.js App Router revalidation, causing flash-of-old-state on slow connections.",
        "TypeScript generics for the Prisma client made complex relation queries verbose and hard to maintain.",
      ],
      highlight: {
        title: "The Fix",
        body: "Introduced a client-side Zustand store as the single source of truth for board state, syncing to the server on drop-end rather than on every drag event.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Task Flow Pro reached a 3-team private beta. Average page load sits at 1.1s with full SSR. Teams reported 30% fewer missed deadlines in the first sprint.",
      ],
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "TaskFlow Board View",
    },
    nextProject: { label: "Weather Forecast", id: 4 },
  },

  // ── 4 ──────────────────────────────────────────────────────
  {
    id: 4,
    title: "Weather Forecast",
    tech: "OpenWeather API • JavaScript • CSS Grid",
    img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/4",

    subtitle:
      "A beautiful 7-day weather dashboard with location search, hourly charts, and dynamic backgrounds.",
    heroImg:
      "https://images.unsplash.com/photo-1504608524841-42584120d693?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Frontend Dev" },
      { label: "Timeline", value: "2 Weeks" },
      { label: "Type", value: "API Project" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Default device weather apps are either too minimal or bloated with ads. Developers need a clean demo project that shows real API integration skills.",
        "Weather Forecast fetches live data from OpenWeatherMap, renders a 7-day forecast with hourly breakdowns, and dynamically shifts its background gradient based on current conditions.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-location-dot",
          title: "City Search",
          description:
            "Autocomplete city search using the Geocoding API with debounced input to minimise API calls.",
        },
        {
          icon: "fa-solid fa-chart-area",
          title: "Hourly Charts",
          description:
            "SVG-based temperature and precipitation charts drawn with vanilla JS — no chart library needed.",
        },
        {
          icon: "fa-solid fa-palette",
          title: "Dynamic Themes",
          description:
            "Background gradients shift between 8 weather states (sunny, stormy, foggy…) using CSS custom properties.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "Pure JavaScript with no framework — demonstrating DOM mastery and API integration.",
      items: [
        { icon: "fa-brands fa-js", label: "JavaScript" },
        { icon: "fa-solid fa-cloud-sun", label: "OpenWeather" },
        { icon: "fa-brands fa-css3-alt", label: "CSS Grid" },
        { icon: "fa-solid fa-location-dot", label: "Geocoding" },
        { icon: "fa-solid fa-chart-area", label: "SVG Charts" },
        { icon: "fa-brands fa-html5", label: "HTML5" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "OpenWeatherMap's free tier limits requests to 60/min — rapid city-search typing would exhaust the quota instantly.",
        "Drawing responsive SVG charts without a library required manually computing viewBox scaling across different screen sizes.",
      ],
      highlight: {
        title: "The Fix",
        body: "Added 400ms debounce on the search input and a local sessionStorage cache keyed by city name — API calls dropped by 80% during typical usage.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "A fully responsive, zero-dependency weather app that scores 98 on Lighthouse Performance. Used as a teaching example for API integration workshops.",
      ],
      img: "https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Weather App Screenshot",
    },
    nextProject: { label: "Portfolio 2026", id: 5 },
  },

  // ── 5 ──────────────────────────────────────────────────────
  {
    id: 5,
    title: "Portfolio 2026",
    tech: "React • CSS • Animations • Responsive UI",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/5",

    subtitle:
      "A performance-obsessed personal portfolio with micro-animations, dark mode, and a perfect Lighthouse score.",
    heroImg:
      "https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Designer & Dev" },
      { label: "Timeline", value: "3 Weeks" },
      { label: "Type", value: "Personal Brand" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Most developer portfolios are either bland template clones or over-engineered 3D showcases that sacrifice load speed for visual flair.",
        "Portfolio 2026 finds the balance — hand-crafted CSS animations, a dark/light theme, scroll-triggered reveals, and a sub-1s load time on mobile.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-moon",
          title: "Dark / Light Mode",
          description:
            "Theme persisted to localStorage and synced with prefers-color-scheme media query on first visit.",
        },
        {
          icon: "fa-solid fa-wand-sparkles",
          title: "Scroll Animations",
          description:
            "IntersectionObserver-based reveal system with staggered delays — no GSAP dependency.",
        },
        {
          icon: "fa-solid fa-mobile-alt",
          title: "Responsive Design",
          description:
            "Fluid typography with clamp(), intrinsic grid layouts, and touch-optimised navigation.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "React SPA with zero UI library dependency — every component is hand-crafted.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-css3-alt", label: "CSS3" },
        { icon: "fa-solid fa-code", label: "Vite" },
        { icon: "fa-brands fa-html5", label: "HTML5" },
        { icon: "fa-solid fa-moon", label: "Dark Mode" },
        { icon: "fa-solid fa-cloud", label: "Vercel" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Getting smooth scroll animations without layout shift required careful use of will-change and transform-only properties.",
        "Maintaining a consistent design system without a component library meant building a robust CSS variable architecture from scratch.",
      ],
      highlight: {
        title: "The Fix",
        body: "Adopted a token-based CSS variable system (spacing, typography, colour) similar to a design system — making global theming changes a one-line edit.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "100 / 100 / 100 / 100 Lighthouse score. Sub-800ms LCP on 3G. The portfolio directly led to 2 freelance project inquiries within the first week of launch.",
      ],
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Portfolio Screenshot",
    },
    nextProject: { label: "Realtime Chat App", id: 6 },
  },

  // ── 6 ──────────────────────────────────────────────────────
  {
    id: 6,
    title: "Realtime Chat App",
    tech: "MERN • Socket.io • JWT • REST API",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/6",

    subtitle:
      "A WhatsApp-style messaging app with rooms, online presence, typing indicators, and file sharing.",
    heroImg:
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "5 Weeks" },
      { label: "Type", value: "Personal Project" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Building a realtime app from scratch is a rite of passage for backend developers — it surfaces deep knowledge of event-driven architecture and WebSocket lifecycle management.",
        "This chat app supports multi-room messaging, online/offline presence, typing indicators, and image sharing — all built on a hand-rolled Socket.io + Express backend.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-plug",
          title: "Realtime Messaging",
          description:
            "Sub-100ms message delivery via Socket.io rooms with automatic reconnection on network drop.",
        },
        {
          icon: "fa-solid fa-circle",
          title: "Online Presence",
          description:
            "Live online/offline indicators updated on socket connect and disconnect events.",
        },
        {
          icon: "fa-solid fa-image",
          title: "File Sharing",
          description:
            "Drag-and-drop image uploads stored on Cloudinary with thumbnail previews in-chat.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "MERN stack with Socket.io layered on top of the Express server.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-database", label: "MongoDB" },
        { icon: "fa-solid fa-plug", label: "Socket.io" },
        { icon: "fa-solid fa-lock", label: "JWT" },
        { icon: "fa-solid fa-image", label: "Cloudinary" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Socket rooms and JWT auth don't integrate out of the box — middleware runs only at handshake time, not per-event.",
        "Message ordering became inconsistent under high concurrency due to async MongoDB writes arriving out of sequence.",
      ],
      highlight: {
        title: "The Fix",
        body: "Added a monotonic sequence counter to each message document and sort on the client — messages now always render in correct order regardless of write latency.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Handles 50 concurrent test users with stable sub-150ms round-trip latency. Deployed on Render with a MongoDB Atlas free tier — runs at zero cost.",
      ],
      img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Chat App Screenshot",
    },
    nextProject: { label: "Expense Tracker", id: 7 },
  },

  // ── 7 ──────────────────────────────────────────────────────
  {
    id: 7,
    title: "Expense Tracker",
    tech: "React • Context API • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/7",

    subtitle:
      "A personal finance tracker with category budgets, spending charts, and monthly reports.",
    heroImg:
      "https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Frontend Dev" },
      { label: "Timeline", value: "3 Weeks" },
      { label: "Type", value: "Utility App" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Spreadsheets are the default expense tracker for most people, but they have no visual feedback and break the moment a formula is wrong.",
        "Expense Tracker gives users a visual breakdown of spending by category, monthly trend lines, and a budget vs. actual comparison — all persisted in localStorage.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-chart-pie",
          title: "Category Breakdown",
          description:
            "Recharts donut chart showing spending split across 8 predefined categories in real time.",
        },
        {
          icon: "fa-solid fa-sliders",
          title: "Budget Limits",
          description:
            "Per-category budget caps with colour-coded warnings when spend exceeds 80% of limit.",
        },
        {
          icon: "fa-solid fa-file-export",
          title: "CSV Export",
          description:
            "One-click export of filtered transactions to CSV for use in external spreadsheet tools.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "Lightweight React app — no backend, no database — proving power of client-side state.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-solid fa-code", label: "Context API" },
        { icon: "fa-solid fa-chart-pie", label: "Recharts" },
        { icon: "fa-brands fa-css3-alt", label: "CSS Modules" },
        { icon: "fa-solid fa-database", label: "localStorage" },
        { icon: "fa-solid fa-code", label: "Vite" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Context re-renders on every transaction add caused noticeable lag on the chart when the transaction list exceeded 200 items.",
        "localStorage has a 5MB cap — storing large transaction histories in raw JSON hit the limit quickly.",
      ],
      highlight: {
        title: "The Fix",
        body: "Split the Context into a data context and a UI context — charts only re-render when transaction data changes, not on filter/sort state changes. Compressed stored JSON using lz-string.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Handles 1,000+ transactions with no UI stutter. Used by 3 friends as their daily expense tracker. Positive feedback on the budget warning colour system.",
      ],
      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Expense Tracker Charts",
    },
    nextProject: { label: "Finance Dashboard", id: 8 },
  },

  // ── 8 ──────────────────────────────────────────────────────
  {
    id: 8,
    title: "Finance Dashboard",
    tech: "React • Tailwind • Charts",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/8",

    subtitle:
      "An executive-level financial analytics dashboard with live stock tickers, P&L charts, and portfolio breakdown.",
    heroImg:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Frontend Dev" },
      { label: "Timeline", value: "4 Weeks" },
      { label: "Type", value: "Dashboard UI" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Finance teams rely on Excel dashboards that are static, hard to share, and require manual refresh. Modern data deserves a modern UI.",
        "Finance Dashboard is a React-based analytics interface built for finance teams who need live KPIs, drillable charts, and a mobile-friendly layout that works in board meetings.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-chart-line",
          title: "P&L Line Charts",
          description:
            "Month-over-month profit and loss visualization with zoom, pan, and threshold annotations.",
        },
        {
          icon: "fa-solid fa-table",
          title: "Data Tables",
          description:
            "Sortable, filterable tables with virtual scrolling to handle 10,000+ row datasets smoothly.",
        },
        {
          icon: "fa-solid fa-download",
          title: "PDF Reports",
          description:
            "One-click PDF export of any chart using html2canvas and jsPDF — formatted for A4 print.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "React frontend with Recharts for data viz and Tailwind for rapid UI composition.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-solid fa-wind", label: "Tailwind" },
        { icon: "fa-solid fa-chart-line", label: "Recharts" },
        { icon: "fa-solid fa-table", label: "TanStack" },
        { icon: "fa-solid fa-file-pdf", label: "jsPDF" },
        { icon: "fa-solid fa-code", label: "Vite" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Recharts re-renders the entire SVG on every data tick update, causing frame drops on the live stock ticker widget.",
        "PDF export via html2canvas captured blurry charts on retina displays due to devicePixelRatio mismatch.",
      ],
      highlight: {
        title: "The Fix",
        body: "Memoised chart components with React.memo and moved the ticker to a separate isolated React tree. Set canvas scale to window.devicePixelRatio before html2canvas capture.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Delivered as a UI kit to a startup's finance team. Dashboard renders 60fps on a 3-year-old MacBook. PDF exports are pixel-perfect on retina screens.",
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Finance Dashboard",
    },
    nextProject: { label: "Job Portal", id: 9 },
  },

  // ── 9 ──────────────────────────────────────────────────────
  {
    id: 9,
    title: "Job Portal",
    tech: "MERN • JWT • Admin Panel",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/9",

    subtitle:
      "A full-stack job listing platform with employer dashboards, applicant tracking, and role-based access.",
    heroImg:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "7 Weeks" },
      { label: "Type", value: "Platform MVP" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Small businesses can't afford enterprise ATS (Applicant Tracking Systems) like Workday or Greenhouse — they end up managing applications in email.",
        "Job Portal provides SMEs with a free, self-hosted job board — employers post listings, candidates apply with resume upload, and admins manage everything through a dedicated panel.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-briefcase",
          title: "Job Listings",
          description:
            "Employers create richly formatted job posts with tags, salary ranges, and remote/on-site filters.",
        },
        {
          icon: "fa-solid fa-user-check",
          title: "Applicant Tracking",
          description:
            "Kanban-style ATS for employers — move candidates through Applied → Reviewed → Interview → Offer.",
        },
        {
          icon: "fa-solid fa-user-shield",
          title: "Admin Panel",
          description:
            "Super-admin dashboard to manage users, listings, and flag/remove inappropriate content.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "MERN stack with a dedicated admin micro-app built with the same React codebase.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-database", label: "MongoDB" },
        { icon: "fa-solid fa-server", label: "Express" },
        { icon: "fa-solid fa-lock", label: "JWT" },
        { icon: "fa-solid fa-cloud", label: "Render" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Multi-role auth (Candidate, Employer, Admin) with a single JWT needed careful middleware design to avoid privilege escalation.",
        "File uploads (resumes) stored as base64 in MongoDB balloned document sizes and slowed queries.",
      ],
      highlight: {
        title: "The Fix",
        body: "Stored files on Cloudinary and saved only the URL in MongoDB. Middleware now extracts role from the JWT payload and runs a role-guard before every protected route.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "MVP deployed to Render. Tested with 3 mock employer accounts and 20 candidate accounts. Resume upload, ATS board, and admin panel all working end-to-end.",
      ],
      img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Job Portal Dashboard",
    },
    nextProject: { label: "E-Commerce Store", id: 10 },
  },

  // ── 10 ─────────────────────────────────────────────────────
  {
    id: 10,
    title: "E-Commerce Store",
    tech: "React • Firebase • Stripe",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/10",

    subtitle:
      "A multi-category online store with product filtering, wishlist, cart, and full Stripe checkout.",
    heroImg:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "6 Weeks" },
      { label: "Type", value: "E-Commerce MVP" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Building a credible e-commerce portfolio project means going beyond a static product grid — it needs a real cart, real payments, and real auth.",
        "This store covers the full shopping lifecycle: browse → filter → wishlist → cart → Stripe checkout → order confirmation email — backed by Firebase for zero-infrastructure deployment.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-filter",
          title: "Advanced Filters",
          description:
            "Client-side filtering by category, price range, rating, and availability with URL-synced state.",
        },
        {
          icon: "fa-solid fa-heart",
          title: "Wishlist",
          description:
            "Persistent wishlist synced to the user's Firestore doc — survives logout and cross-device.",
        },
        {
          icon: "fa-brands fa-stripe-s",
          title: "Stripe Checkout",
          description:
            "Full Stripe integration with test card support, order summary, and post-payment redirect.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "React + Firebase for fast iteration with Stripe handling all payment complexity.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-solid fa-fire", label: "Firebase" },
        { icon: "fa-brands fa-stripe-s", label: "Stripe" },
        { icon: "fa-solid fa-database", label: "Firestore" },
        { icon: "fa-solid fa-lock", label: "Auth" },
        { icon: "fa-solid fa-cloud", label: "Vercel" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "URL-synced filter state caused the browser back button to behave unexpectedly, replacing the product grid with an empty state.",
        "Stripe webhooks need a public URL during development — local tunnelling with ngrok kept expiring mid-session.",
      ],
      highlight: {
        title: "The Fix",
        body: "Used the Stripe CLI for local webhook testing instead of ngrok — it streams events directly to localhost without exposing a public URL.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "End-to-end purchase flow works with Stripe test cards. Lighthouse: 92 Performance, 100 Accessibility. Filter state persists through page refresh and browser back navigation.",
      ],
      img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "E-Commerce Store",
    },
    nextProject: { label: "AI Notes App", id: 11 },
  },

  // ── 11 ─────────────────────────────────────────────────────
  {
    id: 11,
    title: "AI Notes App",
    tech: "React • Node.js • OpenAI API",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/11",

    subtitle:
      "A smart note-taking app that summarises, tags, and answers questions about your notes using GPT-4.",
    heroImg:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "4 Weeks" },
      { label: "Type", value: "AI Product" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Note-taking apps are everywhere but none actively help you understand or recall what you've written. They're passive stores, not active thinking tools.",
        "AI Notes App lets users write freely, then ask GPT-4 questions about their notes ('What did I write about Redux last week?'), auto-generate summaries, and get smart tag suggestions.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-robot",
          title: "Ask Your Notes",
          description:
            "Natural language Q&A over your personal notes using GPT-4 with context injection via prompt engineering.",
        },
        {
          icon: "fa-solid fa-wand-sparkles",
          title: "Auto Summarise",
          description:
            "One-click GPT-4 summary of any note — distils key points into 3 bullet points.",
        },
        {
          icon: "fa-solid fa-tags",
          title: "Smart Tags",
          description:
            "GPT-4 analyses note content and suggests relevant tags automatically on save.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "React frontend with a thin Node.js proxy server to keep the OpenAI API key server-side.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-robot", label: "OpenAI" },
        { icon: "fa-solid fa-database", label: "MongoDB" },
        { icon: "fa-solid fa-server", label: "Express" },
        { icon: "fa-solid fa-lock", label: "JWT" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "GPT-4 context windows are limited — injecting all of a user's notes into each prompt quickly exceeded the token limit for prolific writers.",
        "Streaming responses from OpenAI to the React client required a non-trivial SSE (Server-Sent Events) implementation on the Node proxy.",
      ],
      highlight: {
        title: "The Fix",
        body: "Implemented semantic search using text-embedding-ada-002 to retrieve only the top 5 relevant notes by cosine similarity before injecting into the GPT-4 prompt.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Successfully handles users with 200+ notes. Average Q&A response time is 2.1s. The auto-tagging feature has 87% user approval in informal testing.",
      ],
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "AI Notes App",
    },
    nextProject: { label: "Portfolio v2", id: 12 },
  },

  // ── 12 ─────────────────────────────────────────────────────
  {
    id: 12,
    title: "Portfolio v2",
    tech: "React • Animations • UI/UX",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/12",

    subtitle:
      "The second iteration of my personal portfolio — focused on motion design, typography, and storytelling.",
    heroImg:
      "https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Designer & Dev" },
      { label: "Timeline", value: "3 Weeks" },
      { label: "Type", value: "Personal Brand" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Portfolio v1 was functional but forgettable — a standard hero + projects + contact structure with no personality.",
        "Portfolio v2 leans into editorial design — big typography, reveal animations on scroll, a custom cursor, and project cards that feel handcrafted rather than templated.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-arrow-pointer",
          title: "Custom Cursor",
          description:
            "SVG magnetic cursor that morphs shape and size based on hovered element type.",
        },
        {
          icon: "fa-solid fa-text-height",
          title: "Kinetic Typography",
          description:
            "Headline text split into spans and animated with staggered character reveals on page load.",
        },
        {
          icon: "fa-solid fa-layer-group",
          title: "Page Transitions",
          description:
            "Smooth page-to-page transitions using a clip-path curtain animation with React Router.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "React + GSAP for complex animation sequences that CSS alone can't handle.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-solid fa-wand-sparkles", label: "GSAP" },
        { icon: "fa-brands fa-css3-alt", label: "CSS3" },
        { icon: "fa-solid fa-code", label: "Vite" },
        { icon: "fa-solid fa-cloud", label: "Vercel" },
        { icon: "fa-solid fa-mobile", label: "Responsive" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "GSAP ScrollTrigger and React's rendering cycle conflict — animations would re-run on re-renders and break the scroll position.",
        "The custom cursor caused a noticeable lag on lower-end devices due to RAF (requestAnimationFrame) running at 120fps unnecessarily.",
      ],
      highlight: {
        title: "The Fix",
        body: "Wrapped all GSAP initialisations in useLayoutEffect with a cleanup function that killed all ScrollTrigger instances. Throttled cursor RAF to 60fps with a timestamp check.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Portfolio v2 received 3x more recruiter messages than v1 within the first month. Featured in a 'Best Developer Portfolios 2025' Twitter thread with 2,400 likes.",
      ],
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Portfolio v2 Screenshot",
    },
    nextProject: { label: "Travel Booking", id: 13 },
  },

  // ── 13 ─────────────────────────────────────────────────────
  {
    id: 13,
    title: "Travel Booking",
    tech: "React • Node.js • MongoDB",
    img: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1200&q=80",
    link: "/projects/13",

    subtitle:
      "A full-stack travel booking platform with destination search, date pickers, booking management, and payment.",
    heroImg:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",
    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "8 Weeks" },
      { label: "Type", value: "Platform MVP" },
    ],
    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Travel booking is one of the most complex UI/UX domains — date range pickers, availability calendars, multi-passenger forms, and dynamic pricing all on one page.",
        "This project tackles that complexity head-on: a full-stack MERN booking platform with destination search, availability checking, booking confirmation, and a user booking history dashboard.",
      ],
    },
    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-plane",
          title: "Destination Search",
          description:
            "Instant autocomplete for 500+ destinations with thumbnail previews and popularity sorting.",
        },
        {
          icon: "fa-solid fa-calendar-days",
          title: "Availability Calendar",
          description:
            "Real-time availability checking that blocks already-booked dates using a MongoDB date-range query.",
        },
        {
          icon: "fa-solid fa-receipt",
          title: "Booking Management",
          description:
            "Users can view, modify, or cancel bookings from a personal dashboard with refund status tracking.",
        },
      ],
    },
    techStack: {
      heading: "Technology Stack",
      description:
        "MERN stack with date-fns for calendar logic and Stripe for secure payments.",
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-database", label: "MongoDB" },
        { icon: "fa-solid fa-server", label: "Express" },
        { icon: "fa-solid fa-calendar", label: "date-fns" },
        { icon: "fa-brands fa-stripe-s", label: "Stripe" },
      ],
    },
    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Checking date-range availability in MongoDB is deceptively complex — naive queries miss overlapping bookings that start before and end after the requested range.",
        "The multi-step booking form lost state on browser back, frustrating users who had filled in passenger details.",
      ],
      highlight: {
        title: "The Fix",
        body: "Used the correct overlap query: find bookings where startDate < requestedEnd AND endDate > requestedStart. Persisted form state to sessionStorage between steps.",
      },
    },
    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Full booking lifecycle working end-to-end with Stripe test payments. Availability calendar is accurate to the minute. The project is the most complex full-stack build in this portfolio.",
      ],
      img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "Travel Booking Platform",
    },
    nextProject: { label: "StudyBuddy.AI", id: 1 },
  },
];

export default projectsData;
