// src/components/about/Timeline.jsx

import "../../styles/components/about/Timeline.css";
import { FaGraduationCap, FaSchool, FaBookOpen } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";

const timelineData = [
  {
    date: "2022 – 2026",
    tag: "Current",
    icon: <HiAcademicCap />,
    title: "B.E. Computer Science & Engineering",
    subtitle: "Anna University",
    desc: "Focusing on Data Structures, Algorithms, and Web Engineering. Lead developer for the college tech club.",
    active: true,
  },
  {
    date: "2020 – 2022",
    tag: "Completed",
    icon: <FaGraduationCap />,
    title: "Higher Secondary (HSC)",
    subtitle: "State Board, Tamil Nadu",
    desc: "Specialized in Mathematics and Computer Science. Graduated with distinction.",
    active: false,
  },
  {
    date: "2015 – 2020",
    tag: "Completed",
    icon: <FaBookOpen />,
    title: "SSLC — Secondary School",
    subtitle: "State Board, Tamil Nadu",
    desc: "Solid foundation in Science and Mathematics. Graduated with distinction.",
    active: false,
  },
];

const Timeline = () => (
  <section className="tl-section">
    <div className="tl-bg-dots" aria-hidden="true" />
    <div className="tl-bg-glow" aria-hidden="true" />

    <div className="tl-container">
      {/* header */}
      <div className="tl-header">
        <span className="tl-eyebrow">
          <span className="tl-eyebrow-dot" />
          My Journey
        </span>
        <h2 className="tl-title">Education &amp; Experience</h2>
        <p className="tl-subtitle">
          The path that shaped my skills and perspective as a developer.
        </p>
      </div>

      {/* timeline list */}
      <div className="tl-list">
        {/* vertical spine line */}
        <div className="tl-spine" aria-hidden="true" />

        {timelineData.map((item, i) => (
          <div
            key={i}
            className={`tl-item${item.active ? " tl-item--active" : ""}`}
            style={{ "--delay": `${i * 80}ms` }}
          >
            {/* dot on the spine */}
            <div className="tl-dot" aria-hidden="true">
              <div className="tl-dot-inner" />
              {item.active && (
                <div className="tl-dot-ring" aria-hidden="true" />
              )}
            </div>

            {/* card */}
            <div className="tl-card">
              {/* top row: icon + date + tag */}
              <div className="tl-card-top">
                <div className="tl-icon">{item.icon}</div>
                <span className="tl-date">{item.date}</span>
                <span
                  className={`tl-tag${item.active ? " tl-tag--active" : ""}`}
                >
                  {item.tag}
                </span>
              </div>

              {/* degree */}
              <h3 className="tl-card-title">{item.title}</h3>

              {/* institution */}
              <p className="tl-card-sub">{item.subtitle}</p>

              {/* description */}
              <p className="tl-card-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
