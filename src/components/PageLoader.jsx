import { useEffect, useState } from "react";
import "@/styles/components/PageLoader.css";

/* Boot sequence lines — feels like a dev environment initializing */
const BOOT_LINES = [
  { text: "Initializing runtime environment...", delay: 0 },
  { text: "Loading MERN stack modules...", delay: 320 },
  { text: "Mounting React component tree...", delay: 620 },
  { text: "Connecting to MongoDB Atlas...", delay: 900 },
  { text: "Compiling portfolio assets...", delay: 1150 },
  { text: "All systems operational ✓", delay: 1380, success: true },
];

const PageLoader = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState([]);
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [cursorLine, setCursorLine] = useState(0);

  /* Reveal boot lines one by one */
  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
        setCursorLine(i);
      }, line.delay),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  /* Animate progress bar 0→100 over ~1600ms */
  useEffect(() => {
    let frame;
    let start = null;
    const duration = 1600;

    const tick = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(Math.floor(pct));
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  /* Exit animation after boot completes */
  useEffect(() => {
    const t = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onComplete?.(), 700);
    }, 2100);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div
      className={`pl-root${exiting ? " pl-root--exit" : ""}`}
      aria-hidden="true"
    >
      {/* Scanline overlay */}
      <div className="pl-scanlines" />

      {/* Noise grain */}
      <div className="pl-grain" />

      {/* Corner brackets — decorative */}
      <span className="pl-corner pl-corner--tl" />
      <span className="pl-corner pl-corner--tr" />
      <span className="pl-corner pl-corner--bl" />
      <span className="pl-corner pl-corner--br" />

      {/* Center card */}
      <div className="pl-card">
        {/* Logo / monogram */}
        <div className="pl-logo">
          <span className="pl-logo__bracket">[</span>
          <span className="pl-logo__letters">BK</span>
          <span className="pl-logo__bracket">]</span>
          <span className="pl-logo__cursor" />
        </div>

        <p className="pl-tagline">
          bk-dev-portfolio <span className="pl-tagline__version">v2.0</span>
        </p>

        {/* Terminal boot lines */}
        <div className="pl-terminal" role="status">
          {BOOT_LINES.map((line, i) => (
            <div
              key={i}
              className={`pl-line${visibleLines.includes(i) ? " pl-line--visible" : ""}${line.success ? " pl-line--success" : ""}`}
            >
              <span className="pl-line__prompt">
                {line.success ? "✓" : "$"}
              </span>
              <span className="pl-line__text">{line.text}</span>
              {cursorLine === i && !exiting && (
                <span className="pl-line__blink" />
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="pl-progress">
          <div className="pl-progress__track">
            <div
              className="pl-progress__fill"
              style={{ width: `${progress}%` }}
            />
            <div
              className="pl-progress__glow"
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="pl-progress__meta">
            <span className="pl-progress__label">LOADING</span>
            <span className="pl-progress__pct">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
