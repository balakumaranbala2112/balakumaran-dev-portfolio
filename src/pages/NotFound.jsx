// src/pages/NotFound.jsx
// 404 page — glitch-terminal aesthetic
// Matches blue+white portfolio palette (Syne + DM Sans)
//
// Add to your router:
//   { path: "*", element: <NotFound /> }

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import "@/styles/pages/NotFound.css";

/* ── typing effect for the terminal card ─────────────────── */
const TERMINAL_LINES = [
  { prompt: true, text: "find page --path /this-url" },
  { prompt: false, text: "Scanning filesystem...", delay: 900 },
  {
    prompt: false,
    text: "Error: ENOENT — no such page exists.",
    delay: 1800,
    error: true,
  },
  {
    prompt: false,
    text: "Hint: Try navigating from home.",
    delay: 2600,
    muted: true,
  },
];

function TerminalCard() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typed, setTyped] = useState("");
  const [typing, setTyping] = useState(false);

  /* reveal lines one by one */
  useEffect(() => {
    let timers = [];
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(
        () => {
          setVisibleCount(i + 1);
          if (i === 0) {
            setTyping(true);
            let charIdx = 0;
            const interval = setInterval(() => {
              charIdx++;
              setTyped(line.text.slice(0, charIdx));
              if (charIdx >= line.text.length) {
                clearInterval(interval);
                setTyping(false);
              }
            }, 38);
            timers.push(interval);
          }
        },
        line.delay ?? i * 200,
      );
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="nf-terminal">
      {/* header */}
      <div className="nf-terminal__header">
        <div className="nf-terminal__dots">
          <span className="nf-dot nf-dot--red" />
          <span className="nf-dot nf-dot--yellow" />
          <span className="nf-dot nf-dot--green" />
        </div>
        <span className="nf-terminal__title">bash — portfolio</span>
      </div>

      {/* body */}
      <div className="nf-terminal__body">
        {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
          <div
            key={i}
            className={`nf-line ${line.error ? "nf-line--error" : ""} ${line.muted ? "nf-line--muted" : ""}`}
          >
            {line.prompt && (
              <span className="nf-prompt">
                <span className="nf-prompt__user">bk</span>
                <span className="nf-prompt__sep">@</span>
                <span className="nf-prompt__host">portfolio</span>
                <span className="nf-prompt__arrow"> $ </span>
              </span>
            )}
            <span className="nf-line__text">
              {i === 0 ? typed : line.text}
              {i === 0 && typing && <span className="nf-cursor" />}
            </span>
          </div>
        ))}
        {/* idle cursor after last line */}
        {visibleCount >= TERMINAL_LINES.length && (
          <div className="nf-line">
            <span className="nf-prompt">
              <span className="nf-prompt__user">bk</span>
              <span className="nf-prompt__sep">@</span>
              <span className="nf-prompt__host">portfolio</span>
              <span className="nf-prompt__arrow"> $ </span>
            </span>
            <span className="nf-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── floating particle canvas ─────────────────────────────── */
function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const DOTS = Array.from({ length: 48 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.4 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      DOTS.forEach((d) => {
        d.x += d.dx;
        d.y += d.dy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${d.o})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="nf-particles" aria-hidden="true" />;
}

/* ══ PAGE ═══════════════════════════════════════════════════ */
export default function NotFound() {
  return (
    <div className="nf-page">
      <Particles />

      {/* dot grid */}
      <div className="nf-grid" aria-hidden="true" />

      {/* blue radial glow */}
      <div className="nf-glow" aria-hidden="true" />

      <div className="nf-content">
        {/* ── GLITCH NUMBER ───────────────────────────────── */}
        <div className="nf-number-wrap" aria-hidden="true">
          <span className="nf-number" data-text="404">
            404
          </span>
        </div>

        {/* ── EYEBROW ─────────────────────────────────────── */}
        <div className="nf-eyebrow">
          <span className="nf-eyebrow__dot" />
          Page not found
        </div>

        {/* ── HEADING ─────────────────────────────────────── */}
        <h1 className="nf-heading">
          Lost in the
          <br />
          <span className="nf-heading__accent">void</span>
          <span className="nf-heading__period">.</span>
        </h1>

        {/* ── SUB ─────────────────────────────────────────── */}
        <p className="nf-sub">
          The page you're looking for was moved, deleted, or never existed.
          Let's get you back on track.
        </p>

        {/* ── TERMINAL CARD ───────────────────────────────── */}
        <TerminalCard />

        {/* ── ACTIONS ─────────────────────────────────────── */}
        <div className="nf-actions">
          <Link to="/" className="nf-btn nf-btn--primary">
            <FaHouse /> Go Home
          </Link>
          <button
            className="nf-btn nf-btn--secondary"
            onClick={() => window.history.back()}
          >
            <FaArrowLeft /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
