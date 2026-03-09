import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import "@/styles/pages/NotFound.css";

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
          <span>Lost in the </span>
          <span className="nf-heading__accent">void</span>
          <span className="nf-heading__period">.</span>
        </h1>

        {/* ── SUB ─────────────────────────────────────────── */}
        <p className="nf-sub">
          The page you're looking for was moved, deleted, or never existed.
          Let's get you back on track.
        </p>

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
