// src/data/blogsData.js
// ─────────────────────────────────────────────────────────────
// Two arrays:
//  1. blogsData  — your own articles (rendered inside the portfolio)
//  2. externalPosts — curated articles from Medium, Dev.to, LinkedIn
//     (external links — no backend needed)
// ─────────────────────────────────────────────────────────────

// ── YOUR OWN ARTICLES ────────────────────────────────────────
export const blogsData = [
  {
    id: "understanding-dns",
    title: "Understanding DNS: From Browser to Server",
    category: "System Design",
    date: { month: "Oct", day: "24", year: "2025" },
    readTime: "8 min read",
    excerpt:
      "A deep dive into what happens when you type a URL. We look at DNS resolution, recursive resolvers, and how caching layers work.",
    content: {
      leadText:
        "DNS is the phonebook of the internet. Here is a deep dive into how recursive resolvers, root servers, and TLDs work together to load your website.",
      sections: [
        {
          heading: "1. The Browser Cache",
          body: "First, the browser checks its own cache. If you've visited the site recently, the IP address might already be stored locally. This check is near-instant — sub-millisecond — because it's just a hash-map lookup in memory.",
          code: `// Example of a DNS lookup simulation
const dnsLookup = (domain) => {
  if (cache[domain]) {
    return cache[domain]; // Return cached IP
  }
  return performRecursiveQuery(domain);
};`,
        },
        {
          heading: "2. The Recursive Resolver",
          body: "If the IP isn't in the browser or OS cache, the request is sent to a Recursive Resolver (usually provided by your ISP or a public DNS like 8.8.8.8). This server acts as a middleman between your computer and the internet's DNS infrastructure.",
          quote:
            '"DNS is a distributed database. No single server knows everything, but every server knows who to ask next."',
        },
        {
          heading: "3. Root & TLD Servers",
          body: "The resolver asks the Root Server (marked by the hidden dot at the end of a domain). The Root Server doesn't know the IP, but it knows where the .com TLD server is. The TLD server then points to the Authoritative Name Server for your specific domain.",
        },
        {
          heading: "Summary",
          body: "Understanding DNS is crucial for backend engineering, especially when debugging latency issues or configuring custom domains for your applications. The entire lookup chain — browser cache → OS cache → recursive resolver → root → TLD → authoritative — typically takes under 100ms on a cold start.",
        },
      ],
    },
    nextArticle: {
      label: "Mastering React's useEffect Hook",
      id: "mastering-useeffect",
    },
  },

  {
    id: "mastering-useeffect",
    title: "Mastering React's useEffect Hook",
    category: "React",
    date: { month: "Sep", day: "12", year: "2025" },
    readTime: "5 min read",
    excerpt:
      "Common mistakes developers make with dependency arrays and how to properly handle cleanup functions to avoid memory leaks.",
    content: {
      leadText:
        "useEffect is one of the most powerful and misunderstood hooks in React. These are the patterns that will save you from hours of debugging.",
      sections: [
        {
          heading: "1. The Stale Closure Problem",
          body: "The most common useEffect bug: reading state or props inside an effect that doesn't list them in the dependency array. The function captures the value from the render it was created in — it never updates.",
          code: `// ❌ Bug: count is always 0 inside the interval
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1); // stale!
  }, 1000);
  return () => clearInterval(id);
}, []); // missing count

// ✅ Fix: use the functional updater form
useEffect(() => {
  const id = setInterval(() => {
    setCount(c => c + 1); // always fresh
  }, 1000);
  return () => clearInterval(id);
}, []);`,
        },
        {
          heading: "2. Cleanup Functions",
          body: "Every effect that sets up a subscription, timer, or event listener must return a cleanup function. Without it, you're leaking memory every time the component re-renders or unmounts.",
          code: `useEffect(() => {
  const controller = new AbortController();
  
  fetch('/api/data', { signal: controller.signal })
    .then(r => r.json())
    .then(setData);

  return () => controller.abort(); // cleanup!
}, []);`,
        },
        {
          heading: "3. When to Use useRef Instead",
          body: "If you only need a value inside the effect but don't want to trigger re-runs when it changes, use useRef. This is common for storing callback functions or previous values without causing infinite loops.",
        },
        {
          heading: "Summary",
          body: "The golden rules: always list your dependencies honestly, always clean up side effects, and reach for useRef when you need a mutable value that shouldn't trigger re-renders.",
        },
      ],
    },
    nextArticle: {
      label: "Securing Node.js APIs with JWT",
      id: "securing-nodejs-jwt",
    },
  },

  {
    id: "securing-nodejs-jwt",
    title: "Securing Node.js APIs with JWT",
    category: "Backend",
    date: { month: "Aug", day: "05", year: "2025" },
    readTime: "6 min read",
    excerpt:
      "A practical guide to implementing stateless authentication using JSON Web Tokens, access tokens, and refresh tokens.",
    content: {
      leadText:
        "JWT-based auth is everywhere — but most tutorials skip the parts that actually matter: refresh tokens, revocation, and secure storage.",
      sections: [
        {
          heading: "1. Access vs Refresh Tokens",
          body: "Access tokens should be short-lived (15 minutes). Refresh tokens should be long-lived (7–30 days) and stored in an httpOnly cookie — never in localStorage where XSS attacks can reach them.",
          code: `// Generate access token (short-lived)
const accessToken = jwt.sign(
  { userId: user._id, role: user.role },
  process.env.JWT_SECRET,
  { expiresIn: '15m' }
);

// Generate refresh token (long-lived)
const refreshToken = jwt.sign(
  { userId: user._id },
  process.env.JWT_REFRESH_SECRET,
  { expiresIn: '7d' }
);`,
        },
        {
          heading: "2. Middleware Architecture",
          body: "Keep your auth logic in a single middleware function. It extracts the token, verifies the signature, and attaches the decoded payload to req.user. All protected routes then just call next() after this middleware.",
          code: `const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
};`,
        },
        {
          heading: "3. Token Revocation",
          body: "JWTs are stateless by design — you can't invalidate one once issued. The common workaround: maintain a blacklist in Redis of revoked token JTIs (JWT IDs). Check the blacklist in your middleware on every request.",
        },
        {
          heading: "Summary",
          body: "Short-lived access tokens + httpOnly refresh token cookies + Redis blacklist = production-grade JWT auth. Never store tokens in localStorage and always sign with a strong secret rotated regularly.",
        },
      ],
    },
    nextArticle: { label: "Understanding DNS", id: "understanding-dns" },
  },

  {
    id: "css-grid-mastery",
    title: "CSS Grid: The Layouts You Actually Need",
    category: "Frontend",
    date: { month: "Jul", day: "18", year: "2025" },
    readTime: "7 min read",
    excerpt:
      "Forget cheat sheets. These are the real-world CSS Grid patterns that solve 90% of layout problems in production apps.",
    content: {
      leadText:
        "CSS Grid is the most powerful layout tool the web has ever had. Most developers use 10% of it. Here's the 10% that matters.",
      sections: [
        {
          heading: "1. The Holy Grail Layout",
          body: "Header, sidebar, main content, and footer — the layout every app needs. Grid does it in 4 lines.",
          code: `.app {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 240px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}`,
        },
        {
          heading: "2. Auto-Responsive Grid (No Media Queries)",
          body: "The most underused pattern: auto-fit with minmax gives you a grid that adapts from 1 column on mobile to N columns on desktop without a single media query.",
          code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}`,
        },
        {
          heading: "3. Overlapping Layers",
          body: "By placing multiple items on the same grid area, you can create cinematic image + text overlay layouts without absolute positioning. Z-index still controls stacking order.",
        },
      ],
    },
    nextArticle: { label: "Understanding DNS", id: "understanding-dns" },
  },
];

// ── EXTERNAL PLATFORM POSTS ──────────────────────────────────
// Replace hrefs with your actual article URLs.
// These render as external link cards on the Writing page.
export const externalPosts = [
  // ── MEDIUM ───────────────────────────────────────────────
  {
    id: "med-1",
    platform: "medium",
    title: "Building Scalable REST APIs with Node.js",
    excerpt:
      "How I structured a production Node.js API to handle 10k requests/minute using clustering, caching, and rate limiting.",
    date: "Nov 2025",
    readTime: "9 min read",
    url: "https://medium.com/@yourusername/your-article-slug",
    tags: ["Backend", "Node.js"],
  },
  {
    id: "med-2",
    platform: "medium",
    title: "React Performance: 7 Patterns That Actually Work",
    excerpt:
      "memo, useMemo, useCallback — when they help and when they secretly hurt. With real bundle-size benchmarks.",
    date: "Oct 2025",
    readTime: "11 min read",
    url: "https://medium.com/@yourusername/your-article-slug-2",
    tags: ["React", "Performance"],
  },

  // ── DEV.TO ───────────────────────────────────────────────
  {
    id: "dev-1",
    platform: "devto",
    title: "I Built a Full-Stack App in 4 Days — Here's What I Learned",
    excerpt:
      "A transparent breakdown of decisions, mistakes, and shortcuts from a weekend hackathon project that actually shipped.",
    date: "Sep 2025",
    readTime: "6 min read",
    url: "https://dev.to/yourusername/your-article-slug",
    tags: ["MERN", "Fullstack"],
  },
  {
    id: "dev-2",
    platform: "devto",
    title: "Stop Misusing useEffect",
    excerpt:
      "The definitive guide to React's most misunderstood hook, with 12 real code examples from codebases I've reviewed.",
    date: "Aug 2025",
    readTime: "8 min read",
    url: "https://dev.to/yourusername/your-article-slug-2",
    tags: ["React", "Hooks"],
  },

  // ── LINKEDIN ─────────────────────────────────────────────
  {
    id: "li-1",
    platform: "linkedin",
    title: "6 Months of Open Source: What No Tutorial Teaches You",
    excerpt:
      "Contributing to open source changed how I write code, review PRs, and communicate technical decisions. Here's the honest version.",
    date: "Dec 2025",
    readTime: "4 min read",
    url: "https://linkedin.com/in/yourusername/recent-activity/articles/",
    tags: ["Career", "Open Source"],
  },
  {
    id: "li-2",
    platform: "linkedin",
    title: "From 0 to Hired: My Self-Taught Dev Journey",
    excerpt:
      "The roadmap, the setbacks, and the one mindset shift that made everything click. For anyone starting from scratch.",
    date: "Jul 2025",
    readTime: "5 min read",
    url: "https://linkedin.com/in/yourusername/recent-activity/articles/",
    tags: ["Career", "Learning"],
  },
];

export default blogsData;
