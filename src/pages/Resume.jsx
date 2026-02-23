// src/pages/Resume.jsx
// Visual resume page matching the 2026 portfolio aesthetic.
// Download button links to /public/resume.pdf — place your PDF there.

import {
  FaDownload,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaLinkedinIn,
  FaGlobe,
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import "@/styles/pages/Resume.css";

/* ── DATA ─────────────────────────────────────────────────── */
const INFO = {
  name: "Balakumaran K",
  title: "MERN Stack Developer",
  email: "bkumaran2112@gmail.com",
  phone: "+91 9597437868",
  location: "Chennai, Tamil Nadu, India",
  linkedin: {
    label: "linkedin.com/in/balakumaran2112",
    url: "https://linkedin.com/in/balakumaran2112",
  },
  portfolio: { label: "balakumaran.com", url: "https://balakumaran.com" },
};

const SUMMARY =
  "MERN Stack Developer with hands-on experience building 5+ production-ready full-stack applications using React, Node.js, Express, and MongoDB. Developed RESTful APIs serving 1000+ records with optimized performance, implemented JWT authentication systems, and integrated real-time communication features using Socket.io. Proficient in responsive UI design, database optimization, and cloud deployment.";

const SKILLS = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "C"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
      "Sass",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST API",
      "MVC",
      "Socket.io",
      "WebSocket",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "Query Optimization", "Indexing"],
  },
  {
    category: "Auth & Security",
    items: ["JWT", "OAuth", "Session Management", "RBAC"],
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "CI/CD", "GitHub Actions", "Git", "Postman"],
  },
  {
    category: "Core",
    items: ["DSA", "System Design", "API Integration", "Problem Solving"],
  },
];

const PROJECTS = [
  {
    name: "CampusConnect",
    subtitle: "Student Collaboration App",
    tech: ["React Native", "Firebase", "Firestore", "Firebase Auth"],
    github: "#",
    live: "#",
    points: [
      "Developed cross-platform mobile app enabling inter-college student networking and resource sharing.",
      "Implemented Firebase Authentication for secure user registration and login with email verification.",
      "Built real-time data sync using Firestore for user profiles, posts, and content feeds.",
    ],
  },
  {
    name: "LocalVendor",
    subtitle: "Location-Based Job Matching Platform",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "JWT",
      "Geospatial Queries",
    ],
    github: "#",
    live: "#",
    points: [
      "Architected RESTful APIs using Node.js and Express.js following MVC architecture for clean code separation.",
      "Implemented JWT-based authentication with role-based access control for vendor and worker user types.",
      "Built location-based job search using MongoDB geospatial queries to filter jobs within 1–5 km radius.",
    ],
  },
  {
    name: "SkillSphere AI",
    subtitle: "Personalized Learning & Career Guidance Platform",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "Python",
      "OpenAI API",
      "MongoDB",
    ],
    github: "#",
    live: "#",
    points: [
      "Built full-stack AI-powered learning platform providing personalized student guidance and career recommendations.",
      "Developed backend services using Node.js and Express.js to handle AI API requests and manage user data securely.",
      "Designed modular REST APIs with structured error handling, input validation, and MongoDB-based data persistence.",
    ],
  },
];

const EDUCATION = [
  {
    degree: "B.E. in Computer Science and Engineering",
    school: "University College of Engineering, Ariyalur and Thirukkuvalai",
    period: "Nov 2022 – 2026",
    location: "Ariyalur, Tamil Nadu",
    courses: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Web Technologies",
      "Software Engineering",
    ],
  },
];

/* ── SUB-COMPONENTS ─────────────────────────────────────── */
function SectionHeader({ label, title }) {
  return (
    <div className="rv-section-header">
      <span className="rv-eyebrow">
        <span className="rv-eyebrow__dot" />
        {label}
      </span>
      <h2 className="rv-section-title">{title}</h2>
    </div>
  );
}

/* ══ PAGE ═══════════════════════════════════════════════════ */
export default function Resume() {
  return (
    <div className="rv-page">
      {/* ── BG layers ─────────────────────────────────────── */}
      <div className="rv-bg-grid" aria-hidden="true" />
      <div className="rv-bg-glow" aria-hidden="true" />

      <div className="rv-container">
        {/* ══ HERO CARD ════════════════════════════════════ */}
        <div className="rv-hero-card">
          {/* left — identity */}
          <div className="rv-identity">
            <div className="rv-avatar" aria-hidden="true">
              BK
            </div>
            <div>
              <h1 className="rv-name">{INFO.name}</h1>
              <p className="rv-role">{INFO.title}</p>
            </div>
          </div>

          {/* right — contact grid */}
          <ul className="rv-contact-grid">
            <li>
              <a href={`mailto:${INFO.email}`} className="rv-contact-item">
                <FaEnvelope /> {INFO.email}
              </a>
            </li>
            <li>
              <a href={`tel:${INFO.phone}`} className="rv-contact-item">
                <FaPhone /> {INFO.phone}
              </a>
            </li>
            <li>
              <span className="rv-contact-item">
                <FaLocationDot /> {INFO.location}
              </span>
            </li>
            <li>
              <a
                href={INFO.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="rv-contact-item"
              >
                <FaLinkedinIn /> {INFO.linkedin.label}
              </a>
            </li>
            <li>
              <a
                href={INFO.portfolio.url}
                target="_blank"
                rel="noreferrer"
                className="rv-contact-item"
              >
                <FaGlobe /> {INFO.portfolio.label}
              </a>
            </li>
          </ul>

          {/* download button */}
          <a
            href="/resume.pdf"
            download="Balakumaran_K_Resume.pdf"
            className="rv-download-btn"
            aria-label="Download Resume PDF"
          >
            <FaDownload />
            Download PDF
          </a>
        </div>

        {/* ══ SUMMARY ══════════════════════════════════════ */}
        <section className="rv-section">
          <SectionHeader label="Overview" title="Professional Summary" />
          <p className="rv-summary">{SUMMARY}</p>
        </section>

        {/* ══ SKILLS ═══════════════════════════════════════ */}
        <section className="rv-section">
          <SectionHeader label="Expertise" title="Skills & Technologies" />
          <div className="rv-skills-grid">
            {SKILLS.map((group) => (
              <div key={group.category} className="rv-skill-group">
                <span className="rv-skill-category">{group.category}</span>
                <div className="rv-skill-tags">
                  {group.items.map((item) => (
                    <span key={item} className="rv-tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ PROJECTS ═════════════════════════════════════ */}
        <section className="rv-section">
          <SectionHeader label="Work" title="Projects" />
          <div className="rv-projects">
            {PROJECTS.map((p, i) => (
              <div key={p.name} className="rv-project-card">
                {/* number watermark */}
                <span className="rv-project-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* top row */}
                <div className="rv-project-top">
                  <div>
                    <h3 className="rv-project-name">{p.name}</h3>
                    <p className="rv-project-subtitle">{p.subtitle}</p>
                  </div>
                  <div className="rv-project-links">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rv-project-link"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rv-project-link rv-project-link--live"
                      aria-label="Live"
                    >
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>

                {/* tech */}
                <div className="rv-skill-tags" style={{ marginBottom: "14px" }}>
                  {p.tech.map((t) => (
                    <span key={t} className="rv-tag">
                      {t}
                    </span>
                  ))}
                </div>

                {/* bullet points */}
                <ul className="rv-project-points">
                  {p.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══ EDUCATION ════════════════════════════════════ */}
        <section className="rv-section">
          <SectionHeader label="Background" title="Education" />
          <div className="rv-education">
            {EDUCATION.map((ed) => (
              <div key={ed.degree} className="rv-edu-card">
                <div className="rv-edu-top">
                  <div>
                    <h3 className="rv-edu-degree">{ed.degree}</h3>
                    <p className="rv-edu-school">{ed.school}</p>
                  </div>
                  <div className="rv-edu-meta">
                    <span>{ed.period}</span>
                    <span>
                      <FaLocationDot style={{ fontSize: "0.7em" }} />{" "}
                      {ed.location}
                    </span>
                  </div>
                </div>
                <div className="rv-edu-courses">
                  <span className="rv-edu-courses-label">
                    Relevant Coursework
                  </span>
                  <div className="rv-skill-tags">
                    {ed.courses.map((c) => (
                      <span key={c} className="rv-tag rv-tag--course">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ BOTTOM DOWNLOAD CTA ══════════════════════════ */}
        <div className="rv-cta">
          <p>Want the full document?</p>
          <a
            href="/resume.pdf"
            download="Balakumaran_K_Resume.pdf"
            className="rv-download-btn rv-download-btn--lg"
          >
            <FaDownload /> Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
}
