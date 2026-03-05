// src/hooks/useInView.js
// Detects when an element enters the viewport.
// Used to trigger fade-in animations on sections.
import { useState, useEffect } from "react";

/**
 * @param {React.RefObject} ref - ref attached to the element to observe
 * @param {number} threshold - how much of the element must be visible (0–1)
 * @returns {boolean} true once the element has entered the viewport
 */
export function useInView(ref, threshold = 0.12) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // only animate once — fire and forget
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}
