import React, { useState, useEffect, useCallback } from "react";
import { FaXmark, FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa6";
import "@/styles/components/projects/ProjectGallery.css";

export default function ProjectGallery({ gallery, title }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedIndex(index);
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  }, [gallery]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  }, [gallery]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  if (!gallery || gallery.length === 0) return null;

  const currentItem = selectedIndex !== null ? gallery[selectedIndex] : null;

  return (
    <div className="project-gallery">
      <div className="project-gallery__grid">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            className="project-gallery__item"
            onClick={() => handleOpen(idx)}
            tabIndex={0}
            role="button"
            aria-label={`View ${item.title || item.caption || `image ${idx + 1}`} in lightbox`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleOpen(idx);
              }
            }}
          >
            <div className="project-gallery__img-wrap">
              <img
                src={item.src}
                alt={item.title || item.caption || `${title} screenshot ${idx + 1}`}
                loading="lazy"
              />
              <div className="project-gallery__overlay">
                <FaExpand className="project-gallery__zoom-icon" />
                <span className="project-gallery__zoom-text">Click to View Screen</span>
              </div>
            </div>
            {(item.title || item.caption) && (
              <div className="project-gallery__meta">
                {item.title && <h5 className="project-gallery__item-title">{item.title}</h5>}
                {item.caption && <p className="project-gallery__item-caption">{item.caption}</p>}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ══ LIGHTBOX MODAL ════════════════════════════════════ */}
      {selectedIndex !== null && currentItem && (
        <div className="project-lightbox" role="dialog" aria-modal="true">
          <div className="project-lightbox__backdrop" onClick={handleClose} />

          <button
            className="project-lightbox__close"
            onClick={handleClose}
            aria-label="Close Lightbox Modal"
          >
            <FaXmark />
          </button>

          {gallery.length > 1 && (
            <>
              <button
                className="project-lightbox__nav project-lightbox__nav--prev"
                onClick={handlePrev}
                aria-label="Previous Image"
              >
                <FaChevronLeft />
              </button>
              <button
                className="project-lightbox__nav project-lightbox__nav--next"
                onClick={handleNext}
                aria-label="Next Image"
              >
                <FaChevronRight />
              </button>
            </>
          )}

          <div className="project-lightbox__content">
            <div className="project-lightbox__stage">
              <img
                src={currentItem.src}
                alt={currentItem.title || currentItem.caption || `${title} view`}
                className="project-lightbox__img"
              />
            </div>
            <div className="project-lightbox__caption-bar">
              <div>
                <span className="project-lightbox__counter">
                  Screen {selectedIndex + 1} of {gallery.length}
                </span>
                {currentItem.title && (
                  <h4 className="project-lightbox__title">{currentItem.title}</h4>
                )}
                {currentItem.caption && (
                  <p className="project-lightbox__desc">{currentItem.caption}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
