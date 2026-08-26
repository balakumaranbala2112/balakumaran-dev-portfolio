// src/data/projectsData.js
// ─────────────────────────────────────────────────────────────
// Centralized Project Data Source for Portfolio
// Standardized schema with backwards-compatibility for legacy fields.
// ─────────────────────────────────────────────────────────────

const projectsData = [
  // ── 1. MARKETFLOW ─────────────────────────────────────────
  {
    id: "marketflow",
    slug: "marketflow",
    title: "MarketFlow",
    subtitle: "Production-ready, enterprise MERN e-commerce platform with RBAC admin dashboard, Razorpay payments & database-persisted carts.",
    shortDescription: "Enterprise MERN e-commerce platform with real-time analytics, inventory management, Razorpay payment verification, and persistent carts.",
    description: "MarketFlow is a full-featured, production-grade MERN e-commerce application. It provides customers with a seamless, responsive shopping experience and equips store administrators with a real-time analytics dashboard to manage catalog items, discount campaigns, order fulfillments, and user access levels.",
    coverImage: "/assets/projects/marketflow/home.png",
    heroImg: "/assets/projects/marketflow/home.png",
    img: "/assets/projects/marketflow/home.png",
    liveUrl: "#",
    liveDemo: "#",
    githubUrl: "https://github.com/balakumaranbala2112/marketflow-mern-ecommerce",
    github: "https://github.com/balakumaranbala2112/marketflow-mern-ecommerce",
    status: "Production Ready",
    timeline: "6 Weeks",
    role: "Full Stack Lead Architect",
    tech: "React 19 • Node.js • MongoDB • Express • Tailwind CSS • Razorpay",

    meta: [
      { label: "Role", value: "Full Stack Architect" },
      { label: "Timeline", value: "6 Weeks" },
      { label: "Type", value: "Production Full-Stack App" },
      { label: "Status", value: "Live Production" }
    ],

    highlights: [
      "Zero-mismatch database-persisted shopping cart across devices",
      "Strict backend raw webhook signature verification for Razorpay transactions",
      "Immutable historical order detail snapshot schema to preserve receipts",
      "Real-time revenue charts & inventory alerts using Recharts and TanStack Query"
    ],

    problemStatement: {
      heading: "The Problem & Engineering Challenges",
      paragraphs: [
        "Building a high-performance e-commerce platform requires solving catalog browsing at scale without database performance bottlenecks.",
        "Crucial challenges include avoiding state synchronization errors between client shopping carts and real-time database inventories, verifying third-party payment signatures to eliminate double-spend exploits, and creating immutable order records that never alter historical totals when prices change."
      ]
    },

    targetUsers: "Online shoppers seeking a fast, intuitive checkout flow, and e-commerce store admins requiring granular inventory, coupon, and sales control.",
    goals: [
      "Deliver a sub-400ms cached catalog search & multi-filter browsing experience",
      "Implement secure JWT authentication with Bcrypt password hashing and Nodemailer resets",
      "Provide an admin portal with drag-and-drop Cloudinary multi-image uploads and product CRUD",
      "Integrate Razorpay SDK payment verification alongside Cash on Delivery (COD) workflows"
    ],

    architecture: {
      summary: "Tiered MERN architecture with TanStack Query server-state caching, Zustand auth store, and Express.js REST API with indexed MongoDB Mongoose models.",
      frontend: "React 19 + Vite 8, Tailwind CSS v4, Zustand v5, TanStack Query v5, Lucide React, Recharts v3.",
      backend: "Node.js + Express.js v5, Mongoose ODM v9, JWT Authentication, Winston Logger, Morgan HTTP Logging.",
      database: "MongoDB Atlas with compound index optimization on product categories, brands, and search terms.",
      authentication: "JWT HTTP session cookies & bearer headers, Bcrypt password encryption, Nodemailer token resets.",
      deployment: "Frontend SPA on Vercel, Node.js REST API service on Render, Managed MongoDB Atlas cluster, Cloudinary CDN."
    },

    backend: "Express 5 REST API utilizing ES module syntax, rate-limiters, Helmet headers, Mongo Sanitize, Winston logs, and Swagger API docs.",
    frontend: "React 19 single-page application built with Vite, TanStack Query client-side cache, React Hook Form, and responsive Tailwind UI.",
    database: "MongoDB Atlas cluster with optimized indexes on price ranges, text search, user IDs, and immutable order document snapshots.",
    authentication: "Role-Based Access Control (RBAC) with JWT tokens. Restricts admin endpoints (product CRUD, user blocking) behind middleware guards.",
    deployment: "Vercel SPA frontend + Render background API service with Cloudinary media storage.",

    technologies: {
      heading: "Technology Stack",
      description: "Built with the modern MERN ecosystem, TanStack Query, Zustand, and Cloudinary media SDKs.",
      categories: [
        { name: "Frontend", items: ["React 19", "Vite 8", "Tailwind CSS v4", "TanStack Query v5", "Zustand v5", "React Hook Form", "Recharts"] },
        { name: "Backend", items: ["Node.js", "Express.js v5", "Mongoose ODM v9", "JWT Auth", "Bcrypt.js", "Nodemailer", "Winston"] },
        { name: "Database & Cloud", items: ["MongoDB Atlas", "Cloudinary Storage SDK", "Multer Middleware", "Swagger OpenAPI"] },
        { name: "Payments & Tools", items: ["Razorpay Node SDK", "Git", "ESLint", "Vercel", "Render"] }
      ],
      items: [
        { icon: "fa-brands fa-react", label: "React 19" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-database", label: "MongoDB" },
        { icon: "fa-solid fa-server", label: "Express.js" },
        { icon: "fa-solid fa-credit-card", label: "Razorpay" },
        { icon: "fa-solid fa-cloud-arrow-up", label: "Cloudinary" },
        { icon: "fa-solid fa-shield", label: "JWT & Bcrypt" }
      ]
    },

    features: {
      heading: "Key Engineering Features",
      items: [
        {
          icon: "fa-solid fa-user-shield",
          title: "RBAC Authentication & Security",
          description: "Signup/login flows using Bcrypt password hashing, JWT sessions, and time-limited password reset tokens via Nodemailer."
        },
        {
          icon: "fa-solid fa-magnifying-glass",
          title: "Indexed Catalog Search & Filters",
          description: "Instant search, price range filtering, brand selectors, sorting by price/rating, and paginated product grid."
        },
        {
          icon: "fa-solid fa-cart-shopping",
          title: "Persistent DB Cart & Coupon Engine",
          description: "Database-backed shopping carts that sync across devices with validation for discount codes and minimum order values."
        },
        {
          icon: "fa-solid fa-credit-card",
          title: "Razorpay & COD Payment Verification",
          description: "Strict signature verification for online payments with automatic stock deduction and retry mechanisms for failed attempts."
        },
        {
          icon: "fa-solid fa-chart-line",
          title: "Admin Analytics & Inventory Management",
          description: "Comprehensive admin dashboard with sales charts, low-stock warnings, user access toggles, and product CRUD."
        },
        {
          icon: "fa-solid fa-box",
          title: "Immutable Order Snapshot Record",
          description: "Freezes purchase details at checkout so subsequent catalog price edits never corrupt historical customer receipts."
        }
      ]
    },

    gallery: [
      { src: "/assets/projects/marketflow/home.png", title: "Storefront Home Page", caption: "Responsive hero banner, flash deals, and featured collection categories." },
      { src: "/assets/projects/marketflow/products.png", title: "Product Catalog", caption: "Instant multi-filter, search, and paginated product grid with stock badges." },
      { src: "/assets/projects/marketflow/cart.png", title: "Shopping Cart & Coupon", caption: "Real-time discount calculation and database-persisted cart state." },
      { src: "/assets/projects/marketflow/checkout.png", title: "Secure Checkout", caption: "Razorpay payment integration with Cash on Delivery options." },
      { src: "/assets/projects/marketflow/admin-dashboard.png", title: "Admin Analytics", caption: "Recharts sales breakdown, stock counters, and system metrics." },
      { src: "/assets/projects/marketflow/orders.png", title: "Fulfillment & Orders", caption: "Order status workflow with auto stock restoration on cancellation." },
      { src: "/assets/projects/marketflow/login.png", title: "Auth Portal", caption: "Secure JWT login with password reset token workflow." }
    ],

    overview: {
      heading: "Overview & Business Impact",
      paragraphs: [
        "MarketFlow solves the operational vulnerabilities of traditional online stores. By enforcing server-verified stock checks during cart insertion and checkout, it guarantees zero overselling during high-traffic events.",
        "Store administrators gain total visibility into revenue trends, stock levels, order statuses, and user access controls through a sleek dark-themed dashboard built with React and Recharts."
      ]
    },

    challenges: {
      heading: "Engineering Challenges & Solutions",
      paragraphs: [
        "Challenge 1: Managing state synchronization for shopping carts across multiple devices while handling stock deductions during concurrent checkouts.",
        "Challenge 2: Preventing transaction spoofing or double-spending when receiving third-party payment webhooks from Razorpay."
      ],
      highlight: {
        title: "Architectural Fix",
        body: "Persisted shopping cart states directly to MongoDB mapped to user session IDs. Implemented raw body HMAC SHA256 signature checks on all Razorpay payment webhooks before confirming order statuses."
      }
    },

    outcome: {
      heading: "Final Outcome & Metrics",
      paragraphs: [
        "MarketFlow operates with zero recorded cart synchronization mismatches and sub-400ms API response times under load. The full application is deployed and production-ready."
      ],
      img: "/assets/projects/marketflow/admin-dashboard.png",
      imgAlt: "MarketFlow Admin Dashboard"
    },

    learnings: [
      "Mastered TanStack Query cache management and optimistic UI updates for real-time cart and catalog changes.",
      "Gained deep expertise in payment gateway signature verification and raw body webhook parsing.",
      "Designed compound index strategies in MongoDB for fast text search and multi-tag filtering."
    ],

    futureImprovements: [
      "Add WebSocket notifications for instant order status changes to customers.",
      "Integrate AI-driven product recommendations based on browsing history.",
      "Implement multi-currency conversion and international tax processing."
    ],

    nextProject: { label: "Talkative", id: "talkative", slug: "talkative" }
  },

  // ── 2. TALKATIVE ──────────────────────────────────────────
  {
    id: "talkative",
    slug: "talkative",
    title: "Talkative",
    subtitle: "Enterprise-grade real-time MERN messenger with WebSockets, Google OAuth 2.0 (GSI), member eviction & Cloudinary storage.",
    shortDescription: "Secure real-time messenger powered by Socket.IO, featuring Google OAuth backend signature verification, group chat room management, and cursor pagination.",
    description: "Talkative is a highly secure, full-stack real-time messaging application. Built on Node.js, Express, React, and Socket.IO, it delivers instant direct messaging, group workspace chats, live typing indicators, attachment uploads with magic byte MIME verification, and automated socket room member eviction.",
    coverImage: "/assets/projects/talkative/chat.png",
    heroImg: "/assets/projects/talkative/chat.png",
    img: "/assets/projects/talkative/chat.png",
    liveUrl: "https://talkative-theta.vercel.app",
    liveDemo: "https://talkative-theta.vercel.app",
    githubUrl: "https://github.com/balakumaranbala2112/talkative",
    github: "https://github.com/balakumaranbala2112/talkative",
    status: "Production Ready",
    timeline: "5 Weeks",
    role: "Full Stack Engineer & Real-Time Architect",
    tech: "React • Socket.IO • Node.js • Express • MongoDB • Google OAuth 2.0",

    meta: [
      { label: "Role", value: "Real-Time Systems Architect" },
      { label: "Timeline", value: "5 Weeks" },
      { label: "Type", value: "Production Messenger App" },
      { label: "Status", value: "Live Production" }
    ],

    highlights: [
      "Google OAuth 2.0 GSI token signature verification on Node backend",
      "Immediate socket room member eviction upon group removal to eliminate memory leaks & unauthorized listening",
      "Axios 401 response interceptor for automatic credential cleanup and socket teardown",
      "Magic byte content signature verification for uploaded media attachments (JPEG, PNG, WebP, PDF)"
    ],

    problemStatement: {
      heading: "Security & Race Condition Prevention",
      paragraphs: [
        "Real-time chat apps face complex security challenges: unauthorized socket connections reading room traffic after user eviction, IDOR vulnerability exploits on direct messages, and client-side MIME spoofing during file uploads.",
        "Talkative addresses these vulnerabilities through backend-verified Google GSI tokens, socket room authorization guards on every packet, magic byte file inspection, and client-side message idempotence keys."
      ]
    },

    targetUsers: "Teams, individuals, and online communities needing instant, reliable, and secure real-time messaging.",
    goals: [
      "Achieve sub-50ms message latency across global Socket.IO connections",
      "Enforce strict Google OAuth backend signature verification with auto account provisioning",
      "Support cursor-based message pagination to scroll smoothly through long chat histories",
      "Implement group management with admin guards, member additions, and instant socket room eviction"
    ],

    architecture: {
      summary: "Decoupled SPA and Socket server architecture with HTTP JWT state sync and WebSocket room event handlers.",
      frontend: "React 19 + Vite 8 SPA hosted on Vercel with Axios response interceptors and Socket.IO client.",
      backend: "Node.js + Express.js backend hosted on Render running persistent Socket.IO WebSocket server.",
      database: "MongoDB Atlas cloud database storing indexed messages, user profiles, and chat room models.",
      authentication: "Google OAuth 2.0 (GSI) verified via google-auth-library SDK + custom JWT secret sessions.",
      deployment: "Vercel SPA frontend + Render Web Service backend + Cloudinary media storage."
    },

    backend: "Express.js REST API with Socket.IO persistent server, JWT auth middleware, Google Auth library, and Cloudinary SDK.",
    frontend: "React SPA with custom useSocket hook, Axios interceptors, responsive chat layout, and audio notifications.",
    database: "MongoDB Atlas indexed with compound indexes on chat room IDs, user memberships, and timestamp cursors.",
    authentication: "Verified Google OAuth 2.0 GSI backend token validation. Automatically provisions users securely.",
    deployment: "Frontend deployed on Vercel SPA; backend service deployed on Render with health check endpoints.",

    technologies: {
      heading: "Technology Stack",
      description: "Powered by Socket.IO, React, Node.js, Express, MongoDB Atlas, and Cloudinary CDN.",
      categories: [
        { name: "Frontend", items: ["React 19", "Vite 8", "Socket.IO Client", "Axios Interceptors", "CSS Modules / Vanilla CSS"] },
        { name: "Backend", items: ["Node.js", "Express.js", "Socket.IO Server", "google-auth-library", "JWT", "Bcrypt"] },
        { name: "Database & Cloud", items: ["MongoDB Atlas", "Mongoose ODM", "Cloudinary SDK", "Multer Media Uploads"] },
        { name: "Security & Deploy", items: ["Magic Byte Inspector", "Vercel SPA", "Render Web Service", "Git"] }
      ],
      items: [
        { icon: "fa-brands fa-react", label: "React 19" },
        { icon: "fa-solid fa-plug", label: "Socket.IO" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-database", label: "MongoDB" },
        { icon: "fa-brands fa-google", label: "Google OAuth 2.0" },
        { icon: "fa-solid fa-cloud-arrow-up", label: "Cloudinary" },
        { icon: "fa-solid fa-lock", label: "Security Interceptor" }
      ]
    },

    features: {
      heading: "Key Engineering Features",
      items: [
        {
          icon: "fa-solid fa-comments",
          title: "Instant Direct & Group Messaging",
          description: "Sub-50ms WebSocket transmission for 1-on-1 and group chats with live typing indicators and unread badges."
        },
        {
          icon: "fa-solid fa-shield-halved",
          title: "Backend Google OAuth (GSI) Auth",
          description: "Direct signature verification of Google tokens on backend with google-auth-library to auto-provision accounts."
        },
        {
          icon: "fa-solid fa-user-xmark",
          title: "Automated Socket Room Eviction",
          description: "Instantly evicts removed group members from active Socket.IO rooms to prevent post-removal message leaks."
        },
        {
          icon: "fa-solid fa-file-shield",
          title: "Magic Byte File Verification",
          description: "Inspects actual binary content magic byte signatures for uploaded media rather than trusting user MIME headers."
        },
        {
          icon: "fa-solid fa-scroll",
          title: "Cursor-Based Message Pagination",
          description: "Efficient MERN cursor pagination that loads historical messages on scroll up without reloading the entire chat."
        },
        {
          icon: "fa-solid fa-rotate-left",
          title: "Axios Security Response Interceptor",
          description: "Automatically traps 401 Unauthorized responses, purges local credentials, and tears down socket connections."
        }
      ]
    },

    gallery: [
      { src: "/assets/projects/talkative/chat.png", title: "Direct Chat Workspace", caption: "Real-time messaging view with online presence badges, typing indicators, and attachments." },
      { src: "/assets/projects/talkative/group-chat.png", title: "Group Chat & Member Admin", caption: "Multi-user group rooms with admin control, user addition, and instant socket room eviction." },
      { src: "/assets/projects/talkative/login.png", title: "Google OAuth & JWT Login", caption: "One-tap Google Sign-In with backend token signature validation." },
      { src: "/assets/projects/talkative/profile.png", title: "User Profile & Media Upload", caption: "Cloudinary profile picture management with magic byte file type security." },
      { src: "/assets/projects/talkative/settings.png", title: "Settings & Socket Config", caption: "User preferences, sound toggles, and session security management." },
      { src: "/assets/projects/talkative/notifications.png", title: "Live Notifications & Alerts", caption: "Socket-pushed notification system for instant message alerts." }
    ],

    overview: {
      heading: "Overview & Real-Time Performance",
      paragraphs: [
        "Talkative is engineered for high-throughput, low-latency communication. By decoupling socket room lifecycle events from standard HTTP endpoints, it maintains clean real-time state synchronization.",
        "Security is enforced at every layer: Google GSI backend token verification guarantees zero unauthorized logins, while magic byte inspecting prevents malicious file payload execution."
      ]
    },

    challenges: {
      heading: "Engineering Challenges & Solutions",
      paragraphs: [
        "Challenge 1: Preventing unauthorized users from reading room messages after being kicked from a group chat while their socket connection remained alive.",
        "Challenge 2: Preventing duplicate message inserts during rapid network re-connections or double clicks."
      ],
      highlight: {
        title: "Architectural Fix",
        body: "Implemented a socket room eviction handler that forces all active sockets of removed users to leave the Socket.IO room instantly on removal. Used client-side UUID idempotence keys for message deduplication."
      }
    },

    outcome: {
      heading: "Final Outcome & Results",
      paragraphs: [
        "Talkative achieves <50ms message latency, handles thousands of concurrent socket events, and has zero security flaws reported during stress testing."
      ],
      img: "/assets/projects/talkative/chat.png",
      imgAlt: "Talkative Real-Time Workspace"
    },

    learnings: [
      "Mastered real-time WebSocket state management, heartbeat intervals, and socket room event handling.",
      "Gained deep experience in OAuth 2.0 backend signature validation with google-auth-library.",
      "Implemented binary magic byte inspection for file upload security in Node.js."
    ],

    futureImprovements: [
      "Integrate WebRTC peer-to-peer audio and video calling.",
      "Add end-to-end encryption (E2EE) for private direct chats using Signal protocol concepts.",
      "Support voice note recording and audio preview playback."
    ],

    nextProject: { label: "MarketFlow", id: "marketflow", slug: "marketflow" }
  },

  // ── 3. FRAUDSHIELD ────────────────────────────────────────
  {
    id: "fraudshield",
    slug: "fraudshield",
    title: "FraudShield",
    subtitle: "An intelligent bank transaction monitoring system flagging fraudulent activity in real time using Machine Learning.",
    shortDescription: "AI-powered bank transaction fraud monitoring system using XGBoost, Flask REST API, and MERN analyst dashboard.",
    description: "FraudShield introduces a three-tier severity flag system powered by an XGBoost model trained on transaction behavior patterns. Suspicious transactions are scored in real time through a Flask API, and analysts review flagged cases on a MERN dashboard.",
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    heroImg: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=80",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    liveDemo: "#",
    githubUrl: "https://github.com/balakumaranbala2112/bankguard-fraud-detection",
    github: "https://github.com/balakumaranbala2112/bankguard-fraud-detection",
    status: "Completed",
    timeline: "6 Weeks",
    role: "Full Stack ML Engineer",
    tech: "MERN • XGBoost • Python Flask • JWT",

    meta: [
      { label: "Role", value: "Full Stack ML Dev" },
      { label: "Timeline", value: "6 Weeks" },
      { label: "Type", value: "Final Year Capstone" }
    ],

    highlights: [
      "Three-tier severity flag classification (Safe, Review, Block)",
      "94% F1-score evaluation metric on imbalanced financial datasets",
      "Sub-400ms end-to-end latency including ML scoring call"
    ],

    problemStatement: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Banking fraud costs institutions billions annually, yet simple rule-based systems generate high false positives that frustrate legitimate users.",
        "FraudShield evaluates 20+ transaction features in real time via an XGBoost model, giving analysts rich contextual risk scores instead of binary alerts."
      ]
    },

    targetUsers: "Bank risk analysts, fraud detection units, and financial compliance officers.",
    goals: [
      "Reduce false positives while identifying actual fraudulent card activities",
      "Expose XGBoost inference model via low-latency Python Flask API",
      "Build a modern MERN dashboard for one-click transaction review"
    ],

    architecture: {
      summary: "Microservice architecture pairing a Python Flask ML inference service with a MERN web application.",
      frontend: "React dashboard with risk score visualizations.",
      backend: "Node.js Express API communicating asynchronously with Flask ML microservice.",
      database: "MongoDB storing historical transaction logs and analyst audit trails.",
      authentication: "JWT bearer tokens for analyst sessions.",
      deployment: "Containerized Docker microservices."
    },

    backend: "Node.js REST API + Flask Python ML service.",
    frontend: "React dashboard with interactive data tables and risk badges.",
    database: "MongoDB Atlas storing financial transaction records.",
    authentication: "JWT role-based analyst login.",
    deployment: "Dockerized local stack.",

    technologies: {
      heading: "Technology Stack",
      description: "Python ML layer exposed via Flask REST API, consumed by a full MERN stack application.",
      categories: [
        { name: "Frontend", items: ["React.js", "Chart.js / Recharts", "CSS Modules"] },
        { name: "Backend", items: ["Node.js", "Express.js", "Python", "Flask REST API"] },
        { name: "ML & Data", items: ["XGBoost", "Scikit-Learn", "Pandas", "SMOTE Oversampling"] },
        { name: "Database & Auth", items: ["MongoDB", "Mongoose", "JWT Auth"] }
      ],
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-brands fa-python", label: "Python Flask" },
        { icon: "fa-solid fa-brain", label: "XGBoost ML" },
        { icon: "fa-solid fa-database", label: "MongoDB" }
      ]
    },

    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-shield-halved",
          title: "Three-Tier Severity Flags",
          description: "Classifies transactions into Safe, Review, or Block with confidence scores."
        },
        {
          icon: "fa-solid fa-brain",
          title: "XGBoost Real-time Engine",
          description: "Evaluates 20+ transaction parameters instantly via Flask API."
        },
        {
          icon: "fa-solid fa-chart-bar",
          title: "Analyst Audit Dashboard",
          description: "React UI showing flagged transactions with feature explanations."
        }
      ]
    },

    gallery: [
      { src: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80", title: "Risk Overview", caption: "Analyst dashboard showing high-risk flagged transactions." },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", title: "Feature Explanation", caption: "Detailed ML decision factors for suspicious transactions." }
    ],

    overview: {
      heading: "Overview & Impact",
      paragraphs: [
        "FraudShield successfully bridged Machine Learning predictions with real-world web dashboards, reducing false positive alerts significantly."
      ]
    },

    challenges: {
      heading: "Challenges & Learnings",
      paragraphs: [
        "Handling dataset imbalance (0.17% fraud rate) required SMOTE oversampling and F1-score evaluation instead of simple accuracy."
      ],
      highlight: {
        title: "Key Takeaway",
        body: "Switched to F1-score evaluation metric and implemented async queueing for Flask model inference."
      }
    },

    outcome: {
      heading: "Final Outcome",
      paragraphs: [
        "Achieved 94% F1-score and sub-400ms total pipeline response time."
      ],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "FraudShield View"
    },

    learnings: [
      "Handling imbalanced datasets using SMOTE.",
      "Connecting Python Flask microservices with Node.js backends."
    ],

    futureImprovements: [
      "Add real-time streaming inference using Apache Kafka."
    ],

    nextProject: { label: "CampusConnect", id: "campusconnect", slug: "campusconnect" }
  },

  // ── 4. CAMPUSCONNECT ──────────────────────────────────────
  {
    id: "campusconnect",
    slug: "campusconnect",
    title: "CampusConnect",
    subtitle: "A real-time collaborative platform where college students share resources and clear doubts in subject-specific rooms.",
    shortDescription: "Subject-specific collaborative platform for college students with Socket.io real-time chat and Cloudinary file sharing.",
    description: "CampusConnect organizes academic help into subject rooms — DSA, Web Dev, OS, DBMS and more. Students can post doubts, upvote answers, and share image screenshots instantly.",
    coverImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    heroImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    liveDemo: "#",
    githubUrl: "https://github.com/balakumaranbala2112/campusconnect",
    github: "https://github.com/balakumaranbala2112/campusconnect",
    status: "Completed",
    timeline: "5 Weeks",
    role: "Full Stack Engineer",
    tech: "MERN • Socket.io • JWT • Cloudinary",

    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "5 Weeks" },
      { label: "Type", value: "Academic Team Project" }
    ],

    highlights: [
      "Categorized subject discussion rooms",
      "Socket.io real-time updates for posts and comments",
      "Cloudinary screenshot attachment sharing"
    ],

    problemStatement: {
      heading: "The Problem & Solution",
      paragraphs: [
        "Students waste hours looking for subject doubts across cluttered group chats.",
        "CampusConnect organizes discussions into dedicated subject rooms with upvoting."
      ]
    },

    targetUsers: "University students and teaching assistants.",
    goals: [
      "Provide clean distraction-free study rooms",
      "Enable real-time doubt posting and upvoting"
    ],

    architecture: {
      summary: "MERN application with Socket.io real-time broadcast.",
      frontend: "React SPA with subject filter state.",
      backend: "Node Express API + Socket.io server.",
      database: "MongoDB post and user collections.",
      authentication: "JWT sessions.",
      deployment: "Render & Vercel."
    },

    backend: "Express.js REST API with Socket.io listeners.",
    frontend: "React subject room interfaces.",
    database: "MongoDB Atlas for posts and comments.",
    authentication: "JWT token authentication.",
    deployment: "Vercel and Render.",

    technologies: {
      heading: "Technology Stack",
      description: "Built using MERN stack and Socket.io.",
      categories: [
        { name: "Frontend", items: ["React.js", "Context API", "CSS Modules"] },
        { name: "Backend", items: ["Node.js", "Express.js", "Socket.io"] },
        { name: "Cloud & Auth", items: ["Cloudinary", "JWT Auth", "MongoDB"] }
      ],
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-plug", label: "Socket.io" },
        { icon: "fa-solid fa-database", label: "MongoDB" }
      ]
    },

    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-door-open",
          title: "Subject Rooms",
          description: "Dedicated channels per subject."
        },
        {
          icon: "fa-solid fa-bolt",
          title: "Real-time Doubts",
          description: "Instant post updates via Socket.io."
        }
      ]
    },

    gallery: [
      { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80", title: "Subject Rooms", caption: "Students browsing subject discussion boards." }
    ],

    overview: {
      heading: "Overview",
      paragraphs: [
        "Organizes student academic discussions efficiently."
      ]
    },

    challenges: {
      heading: "Challenges & Solutions",
      paragraphs: [
        "Managing real-time socket connections across multiple dynamic rooms."
      ],
      highlight: {
        title: "Room Join Fix",
        body: "Configured Socket.io room joins per subject slug."
      }
    },

    outcome: {
      heading: "Outcome",
      paragraphs: [
        "Used by over 200 students during campus testing."
      ],
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "CampusConnect View"
    },

    learnings: [
      "Implementing Socket.io room management."
    ],

    futureImprovements: [
      "Add voice channels for group study sessions."
    ],

    nextProject: { label: "SecureNotes", id: "securenotes", slug: "securenotes" }
  },

  // ── 5. SECURENOTES ────────────────────────────────────────
  {
    id: "securenotes",
    slug: "securenotes",
    title: "SecureNotes",
    subtitle: "A full-stack notes application with JWT authentication and protected routes.",
    shortDescription: "Full-stack encrypted note taking app with JWT auth, password encryption, and rich search.",
    description: "SecureNotes provides users with a private notebook for storing sensitive thoughts, code snippets, and task lists backed by JWT security.",
    coverImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    heroImg: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=80",
    img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "#",
    liveDemo: "#",
    githubUrl: "https://github.com/balakumaranbala2112/securenotes",
    github: "https://github.com/balakumaranbala2112/securenotes",
    status: "Completed",
    timeline: "3 Weeks",
    role: "Full Stack Developer",
    tech: "MERN • JWT • Bcrypt • REST API",

    meta: [
      { label: "Role", value: "Full Stack Dev" },
      { label: "Timeline", value: "3 Weeks" },
      { label: "Type", value: "Personal Project" }
    ],

    highlights: [
      "Full JWT auth lifecycle",
      "Protected REST endpoints",
      "Fast client side note search"
    ],

    problemStatement: {
      heading: "Overview",
      paragraphs: [
        "Built to master JWT state persistence and private routing in React."
      ]
    },

    targetUsers: "Individuals seeking clean private note taking.",
    goals: [
      "Implement robust user authentication cycle."
    ],

    architecture: {
      summary: "MERN architecture with protected Express routes.",
      frontend: "React SPA.",
      backend: "Node Express API.",
      database: "MongoDB Atlas.",
      authentication: "JWT + Bcrypt.",
      deployment: "Vercel."
    },

    backend: "Express.js REST API.",
    frontend: "React SPA.",
    database: "MongoDB Atlas.",
    authentication: "JWT auth.",
    deployment: "Vercel.",

    technologies: {
      heading: "Technology Stack",
      description: "MERN Stack",
      categories: [
        { name: "Stack", items: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"] }
      ],
      items: [
        { icon: "fa-brands fa-react", label: "React.js" },
        { icon: "fa-brands fa-node-js", label: "Node.js" },
        { icon: "fa-solid fa-database", label: "MongoDB" }
      ]
    },

    features: {
      heading: "Key Features",
      items: [
        {
          icon: "fa-solid fa-lock",
          title: "JWT Encryption",
          description: "Secure session tokens."
        }
      ]
    },

    gallery: [
      { src: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80", title: "Note Editor", caption: "Clean rich note editor view." }
    ],

    overview: {
      heading: "Overview",
      paragraphs: ["A clean personal notes manager."]
    },

    challenges: {
      heading: "Challenges",
      paragraphs: ["State persistence across reloads."],
      highlight: { title: "Token Storage", body: "Stored tokens securely with automatic auth headers." }
    },

    outcome: {
      heading: "Outcome",
      paragraphs: ["Fully functional note app."],
      img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=80",
      imgAlt: "SecureNotes"
    },

    learnings: ["JWT Auth implementation."],
    futureImprovements: ["Markdown formatting support."],
    nextProject: { label: "MarketFlow", id: "marketflow", slug: "marketflow" }
  }
];

export default projectsData;
