// src/pages/Resume.jsx
// Skills rendered as icon + label cards using react-icons/si
// Mobile-first layout — works great on every screen size

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

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiDocker,
  SiGithubactions,
  SiGit,
  SiPostman,
  SiFirebase,
  SiFramer,
} from "react-icons/si";
import { FaJava, FaShieldAlt } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";

import "@/styles/pages/Resume.css";

/* ── DATA ──────────────────────────────────────────────────── */
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
  portfolio: { label: "balakumaran.dev", url: "https://balakumaran.dev" },
};

const SUMMARY =
  "MERN Stack Developer with hands-on experience building 5+ production-ready full-stack applications using React, Node.js, Express, and MongoDB. Developed RESTful APIs serving 1000+ records with optimised performance, implemented JWT authentication systems, and integrated real-time communication via Socket.io. Proficient in responsive UI design, database optimisation, and cloud deployment.";

// Each skill: { label, icon, color }
const SKILL_GROUPS = [
  {
    category: "Languages",
    skills: [
      { label: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      { label: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      { label: "Python", icon: <SiPython />, color: "#3572a5" },
      { label: "Java", icon: <FaJava />, color: "#f89820" },
      { label: "C", icon: <TbBrandCpp />, color: "#6295cb" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { label: "React", icon: <SiReact />, color: "#61dafb" },
      { label: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
      { label: "Redux", icon: <SiRedux />, color: "#764abc" },
      { label: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
      { label: "Framer Motion", icon: <SiFramer />, color: "#0055ff" },
      { label: "HTML5", icon: <SiHtml5 />, color: "#e34f26" },
      { label: "CSS3", icon: <SiCss3 />, color: "#264de4" },
      { label: "Sass", icon: <SiSass />, color: "#cc6699" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { label: "Node.js", icon: <SiNodedotjs />, color: "#5fa04e" },
      { label: "Express", icon: <SiExpress />, color: "#888888" },
      { label: "REST API", icon: <MdDesignServices />, color: "#6366f1" },
      { label: "Socket.io", icon: <SiSocketdotio />, color: "#010101" },
    ],
  },
  {
    category: "Database",
    skills: [
      { label: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
      { label: "MySQL", icon: <SiMysql />, color: "#4479a1" },
    ],
  },
  {
    category: "Auth & Security",
    skills: [
      { label: "JWT", icon: <SiJsonwebtokens />, color: "#d63aff" },
      { label: "OAuth", icon: <FaShieldAlt />, color: "#ea580c" },
      { label: "Firebase", icon: <SiFirebase />, color: "#ff9800" },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { label: "Docker", icon: <SiDocker />, color: "#2496ed" },
      { label: "CI/CD", icon: <SiGithubactions />, color: "#2088ff" },
      { label: "Git", icon: <SiGit />, color: "#f05032" },
      { label: "Postman", icon: <SiPostman />, color: "#ff6c37" },
    ],
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
      "Cross-platform mobile app enabling inter-college student networking and resource sharing.",
      "Firebase Authentication for secure user registration and login with email verification.",
      "Real-time data sync using Firestore for user profiles, posts, and content feeds.",
    ],
  },
  {
    name: "LocalVendor",
    subtitle: "Location-Based Job Matching Platform",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "Geospatial"],
    github: "#",
    live: "#",
    points: [
      "RESTful APIs using Node.js/Express.js following MVC architecture for clean code separation.",
      "JWT-based authentication with role-based access control for vendor and worker user types.",
      "Location-based job search using MongoDB geospatial queries to filter within 1–5 km radius.",
    ],
  },
  {
    name: "SkillSphere AI",
    subtitle: "Personalised Learning & Career Guidance Platform",
    tech: ["React.js", "Node.js", "FastAPI", "Python", "OpenAI API", "MongoDB"],
    github: "#",
    live: "#",
    points: [
      "Full-stack AI-powered learning platform providing personalised student guidance and career recommendations.",
      "Backend services in Node.js and Express to handle AI API requests and manage user data securely.",
      "Modular REST APIs with structured error handling, input validation, and MongoDB-based data persistence.",
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
function SectionLabel({ eyebrow, title }) {
  return (
    <div className="rv-sec-label">
      <span className="rv-eyebrow">
        <span className="rv-eyebrow__dot" />
        {eyebrow}
      </span>
      <h2 className="rv-sec-title">{title}</h2>
    </div>
  );
}

/* ══ PAGE ════════════════════════════════════════════════════ */
export default function Resume() {
  return (
    <div className="rv-page">
      <div className="rv-bg-dots" aria-hidden />
      <div className="rv-bg-glow" aria-hidden />

      <div className="rv-root">
        {/* ══ HERO CARD ══════════════════════════════════════ */}
        <div className="rv-hero">
          <div className="rv-hero__identity">
            <div className="rv-avatar" aria-label="BK initials">
              BK
            </div>
            <div className="rv-hero__info">
              <h1 className="rv-name">{INFO.name}</h1>
              <span className="rv-role">{INFO.title}</span>
            </div>
          </div>

          <ul className="rv-contacts">
            <li>
              <a href={`mailto:${INFO.email}`} className="rv-contact">
                <FaEnvelope />
                {INFO.email}
              </a>
            </li>
            <li>
              <a href={`tel:${INFO.phone}`} className="rv-contact">
                <FaPhone />
                {INFO.phone}
              </a>
            </li>
            <li>
              <span className="rv-contact">
                <FaLocationDot />
                {INFO.location}
              </span>
            </li>
            <li>
              <a
                href={INFO.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="rv-contact"
              >
                <FaLinkedinIn />
                {INFO.linkedin.label}
              </a>
            </li>
            <li>
              <a
                href={INFO.portfolio.url}
                target="_blank"
                rel="noreferrer"
                className="rv-contact"
              >
                <FaGlobe />
                {INFO.portfolio.label}
              </a>
            </li>
          </ul>

          <a
            href="/resume.pdf"
            download="Balakumaran_K_Resume.pdf"
            className="rv-dl-btn"
          >
            <FaDownload /> Download PDF
          </a>
        </div>

        {/* ══ SUMMARY ════════════════════════════════════════ */}
        <section className="rv-card">
          <SectionLabel eyebrow="Overview" title="Professional Summary" />
          <p className="rv-summary">{SUMMARY}</p>
        </section>

        {/* ══ SKILLS ═════════════════════════════════════════ */}
        <section className="rv-card">
          <SectionLabel eyebrow="Expertise" title="Skills & Technologies" />
          <div className="rv-skill-groups">
            {SKILL_GROUPS.map((group) => (
              <div key={group.category} className="rv-skill-group">
                <span className="rv-skill-cat">{group.category}</span>
                <div className="rv-skill-icons">
                  {group.skills.map((s) => (
                    <div
                      key={s.label}
                      className="rv-skill-chip"
                      style={{ "--chip-color": s.color }}
                      title={s.label}
                    >
                      <span className="rv-skill-chip__icon">{s.icon}</span>
                      <span className="rv-skill-chip__label">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══ PROJECTS ═══════════════════════════════════════ */}
        <section className="rv-card">
          <SectionLabel eyebrow="Work" title="Projects" />
          <div className="rv-projects">
            {PROJECTS.map((p, i) => (
              <div key={p.name} className="rv-project">
                <span className="rv-project__num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="rv-project__header">
                  <div>
                    <h3 className="rv-project__name">{p.name}</h3>
                    <p className="rv-project__sub">{p.subtitle}</p>
                  </div>
                  <div className="rv-project__links">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rv-icon-btn"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="rv-icon-btn"
                      aria-label="Live"
                    >
                      <FaArrowUpRightFromSquare />
                    </a>
                  </div>
                </div>

                <div className="rv-tech-row">
                  {p.tech.map((t) => (
                    <span key={t} className="rv-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="rv-bullets">
                  {p.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ══ EDUCATION ══════════════════════════════════════ */}
        <section className="rv-card">
          <SectionLabel eyebrow="Background" title="Education" />
          {EDUCATION.map((ed) => (
            <div key={ed.degree} className="rv-edu">
              <div className="rv-edu__header">
                <div>
                  <h3 className="rv-edu__degree">{ed.degree}</h3>
                  <p className="rv-edu__school">{ed.school}</p>
                </div>
                <div className="rv-edu__meta">
                  <span>{ed.period}</span>
                  <span>
                    <FaLocationDot style={{ fontSize: "0.7em" }} />{" "}
                    {ed.location}
                  </span>
                </div>
              </div>
              <div className="rv-edu__courses">
                <span className="rv-edu__courses-label">
                  Relevant Coursework
                </span>
                <div className="rv-tech-row">
                  {ed.courses.map((c) => (
                    <span key={c} className="rv-tech-tag rv-tech-tag--muted">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ══ BOTTOM CTA ═════════════════════════════════════ */}
        <div className="rv-cta">
          <p>Want the full document?</p>
          <a
            href="/resume.pdf"
            download="Balakumaran_K_Resume.pdf"
            className="rv-dl-btn rv-dl-btn--lg"
          >
            <FaDownload /> Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
}
