import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "@/styles/components/TerminalHero.css";

const codeSnippets = [
  `const aboutMe = () => ({
  name: "Balakumaran",
  role: "MERN Stack Developer",
  location: "India",
  mindset: "Product-focused developer",
  codingStyle: "Clean, scalable, maintainable",
  availability: "Open for Internship / Full-Time",
  availability: "Open for Internship / Full-Time",
  availability: "Open for Internship / Full-Time",
});`,

  `const myProjects = () => ({
  focus: "Real-world web applications",
  stack: ["React", "Node.js", "Express", "MongoDB"],
  goal: "Build scalable products with smooth UX",
  deployment: ["Vercel", "Netlify", "Render"],
});`,

  `const futureGoal = () => ({
  vision: "Become a high-impact Full Stack Engineer",
  projectsPlan: "Build 3-5 production-level applications",
  longTermGoal: "Lead development of real-world products",
  mindset: "Consistency + discipline + continuous learning",
  mission: "Build software that scales and creates real impact",
});`,
];

/* snippet accent colours — shifts the inner glow per snippet */
const SNIPPET_GLOWS = [
  "rgba(59, 130, 246, 0.18)", // blue  — aboutMe
  "rgba(99, 102, 241, 0.18)", // indigo — myProjects
  "rgba(16, 185, 129, 0.16)", // emerald — futureGoal
];

/* live clock helper */
function useClock() {
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }),
  );
  useEffect(() => {
    const id = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

const SNIPPET_LABELS = ["aboutMe()", "myProjects()", "futureGoal()"];

export default function TerminalHero() {
  const [text, setText] = useState("");
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [highlightedCode, setHighlightedCode] = useState("");
  const clock = useClock();
  const preRef = useRef(null);

  /* auto-scroll pre to bottom as text types */
  useEffect(() => {
    if (preRef.current) {
      preRef.current.scrollTop = preRef.current.scrollHeight;
    }
  }, [text]);

  /* ── typing effect (unchanged) ─────────────────────────── */
  useEffect(() => {
    const currentSnippet = codeSnippets[snippetIndex];

    if (charIndex < currentSnippet.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentSnippet[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 18);
      return () => clearTimeout(timeout);
    }

    const pauseTimeout = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 1500);

    return () => clearTimeout(pauseTimeout);
  }, [charIndex, snippetIndex]);

  /* ── prism highlight (unchanged) ───────────────────────── */
  useEffect(() => {
    const html = Prism.highlight(
      text,
      Prism.languages.javascript,
      "javascript",
    );
    setHighlightedCode(html);
  }, [text]);

  const lineCount = text.split("\n").length;

  return (
    <div
      className="th-window"
      style={{ "--glow-color": SNIPPET_GLOWS[snippetIndex] }}
    >
      {/* ── scanline texture ─────────────────────────────── */}
      <div className="th-scanlines" aria-hidden="true" />

      {/* ── mesh gradient inner glow ─────────────────────── */}
      <div className="th-glow-mesh" aria-hidden="true" />

      {/* ── HEADER ───────────────────────────────────────── */}
      <div className="th-header">
        <div className="th-dots">
          <span className="th-dot th-dot--red" />
          <span className="th-dot th-dot--yellow" />
          <span className="th-dot th-dot--green" />
        </div>

        <div className="th-tabs">
          <span className="th-tab th-tab--active">
            <i className="th-tab-icon">⬡</i>
            developer.config.js
          </span>
        </div>

        <div className="th-header-right">
          <span className="th-clock">{clock}</span>
          <span className="th-snippet-badge">
            {snippetIndex + 1}&thinsp;/&thinsp;{codeSnippets.length}
          </span>
        </div>
      </div>

      {/* ── SNIPPET LABEL BAR ────────────────────────────── */}
      <div className="th-label-bar">
        {SNIPPET_LABELS.map((label, i) => (
          <span
            key={label}
            className={`th-snippet-label ${i === snippetIndex ? "th-snippet-label--active" : ""}`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* ── BODY ─────────────────────────────────────────── */}
      <div className="th-body">
        {/* line numbers */}
        <div className="th-line-nums" aria-hidden="true">
          {Array.from({ length: Math.max(lineCount, 11) }, (_, i) => (
            <span key={i}>{String(i + 1).padStart(2, "0")}</span>
          ))}
        </div>

        {/* code */}
        <pre className="th-pre" ref={preRef}>
          <code
            className="language-javascript"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
          <span className="th-cursor" />
        </pre>
      </div>

      {/* ── STATUS BAR ───────────────────────────────────── */}
      <div className="th-statusbar">
        <div className="th-status-left">
          <span className="th-status-branch">
            <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
              <path d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0z" />
            </svg>
            main
          </span>
          <span className="th-status-lang">JavaScript</span>
        </div>
        <div className="th-status-right">
          <span className="th-status-lines">Ln {lineCount}</span>
          <span className="th-status-enc">UTF-8</span>
          <span className="th-status-dot" />
          <span className="th-status-ready">READY</span>
        </div>
      </div>
    </div>
  );
}
