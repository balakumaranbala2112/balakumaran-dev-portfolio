// src/data/projectsData.js
// ─────────────────────────────────────────────────────────────
// Single source of truth for all projects.
// Add a new object → new case study page, no other file needed.
// ─────────────────────────────────────────────────────────────

const projectsData = [
  {
    id: "studybuddy-ai",
    title: "StudyBuddy.AI",
    subtitle:
      "A collaborative learning platform bridging the gap between students and instant doubt clearance.",
    tech: "MERN · JWT · Socket.io",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
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
            "Posts update instantly, and users can upvote helpful answers to push them to the top.",
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
        { icon: "fa-brands fa-css3", label: "Tailwind" },
        { icon: "fa-solid fa-lock", label: "JWT" },
      ],
    },

    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "One of the biggest hurdles was managing state persistence for authenticated users. Initially, refreshing the page would log the user out.",
        "Another challenge was database schema design. Structuring the relationship between Users, Posts, and Comments required careful planning to avoid deeply nested queries.",
      ],
      highlight: {
        title: "The Fix",
        body: "Implemented a secure localStorage check on app load that validates the existing JWT token against the backend before rendering private routes.",
      },
    },

    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "The final application is a fully functional MVP. It successfully handles user sessions, allows for CRUD operations on posts, and maintains a clean, responsive UI across mobile and desktop devices.",
      ],
      img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "StudyBuddy Mobile View",
    },

    nextProject: { label: "Modern Book Store", id: "modern-bookstore" },
  },

  // ─── PROJECT 2 ─────────────────────────────────────────────
  {
    id: "modern-bookstore",
    title: "Modern Book Store",
    subtitle:
      "A full-featured e-commerce bookstore with cart, search, and Stripe payment integration.",
    tech: "React · Firebase · Stripe",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
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
        "Brick-and-mortar bookstores are shrinking, and most online stores feel impersonal. Readers want curated suggestions, not endless scrolling.",
        "Modern Book Store gives readers a visually rich, curated shopping experience with real-time search, personalised wishlists, and a frictionless checkout — all inside a blazing-fast React frontend backed by Firebase.",
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
        { icon: "fa-solid fa-wind", label: "Tailwind" },
        { icon: "fa-solid fa-diagram-project", label: "Redux" },
        { icon: "fa-brands fa-cloudflare", label: "Cloudflare" },
      ],
    },

    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Firestore's read pricing model required careful query design — fetching entire collections was too expensive at scale.",
        "Stripe webhook handling in Firebase Functions introduced cold-start latency that impacted order confirmation speed.",
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

    nextProject: { label: "DevBoard", id: "devboard" },
  },

  // ─── PROJECT 3 ─────────────────────────────────────────────
  {
    id: "devboard",
    title: "DevBoard",
    subtitle:
      "A developer-focused kanban board with GitHub integration, PR tracking, and team analytics.",
    tech: "Next.js · Prisma · PostgreSQL",
    img: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    heroImg:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80",
    liveUrl: "#",
    githubUrl: "#",

    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "8 Weeks" },
      { label: "Type", value: "SaaS MVP" },
    ],

    overview: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Developer teams juggle GitHub issues, PRs, and sprint tasks across multiple tools. Context-switching kills focus and misses deadlines.",
        "DevBoard unifies GitHub activity and sprint planning in one surface — syncing PR status directly into kanban cards so the board always reflects reality without manual updates.",
      ],
    },

    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-brands fa-github",
          title: "GitHub Sync",
          description:
            "OAuth-powered integration that auto-creates cards from issues and updates PR merge status in real time via webhooks.",
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Team Analytics",
          description:
            "Velocity charts, cycle-time heat maps, and contributor breakdowns computed from live PR data.",
        },
        {
          icon: "fa-solid fa-arrows-up-down-left-right",
          title: "Drag & Drop Board",
          description:
            "Smooth DnD Kit-powered kanban with optimistic UI, WIP limits, and full keyboard accessibility.",
        },
      ],
    },

    techStack: {
      heading: "Technology Stack",
      description:
        "SSR Next.js app with a PostgreSQL data layer managed by Prisma ORM.",
      items: [
        { icon: "fa-brands fa-react", label: "Next.js" },
        { icon: "fa-solid fa-database", label: "PostgreSQL" },
        { icon: "fa-solid fa-layer-group", label: "Prisma" },
        { icon: "fa-brands fa-github", label: "GitHub API" },
        { icon: "fa-solid fa-key", label: "NextAuth" },
        { icon: "fa-solid fa-cloud", label: "Vercel" },
      ],
    },

    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "GitHub webhook delivery is not guaranteed — dropped events caused cards to fall out of sync silently.",
        "Optimistic UI for drag-and-drop conflicted with Next.js App Router revalidation, causing flash-of-old-state on slow connections.",
      ],
      highlight: {
        title: "The Fix",
        body: "Built a webhook replay queue using a Postgres-backed job table. A background worker retries failed deliveries with exponential back-off, giving 99.8% sync reliability.",
      },
    },

    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "DevBoard shipped to a private beta of 3 dev teams. Average board update latency sits at 320ms. Teams reported a 40% reduction in standup prep time.",
      ],
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "DevBoard Analytics View",
    },

    nextProject: { label: "StudyBuddy.AI", id: "studybuddy-ai" },
  },
];

export default projectsData;
