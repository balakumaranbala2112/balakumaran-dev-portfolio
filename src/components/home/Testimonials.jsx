import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { FaLinkedinIn, FaQuoteLeft } from "react-icons/fa";
import "@/styles/components/home/Testimonials.css";

/* ─────────────────────────────────────────────────────────
   Replace these with your real testimonials.
   Tips:
   • Pull quotes from LinkedIn recommendations
   • Ask a professor / project teammate for 2-3 sentences
   • Even 1 real quote beats 3 placeholder chips
   ───────────────────────────────────────────────────────── */
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Balakumaran consistently demonstrated strong problem-solving skills and a genuine passion for building clean, well-structured code. His final-year project showed real initiative in applying ML to a production-grade MERN stack — well beyond what the curriculum requires.",
    name: "Dr. [Professor Name]",
    role: "Associate Professor",
    institution: "Your College Name",
    initials: "DP",
    color: "blue",
    linkedIn: null, // add URL if available
  },
  {
    id: 2,
    quote:
      "Working with Bala on the fraud detection project was a great experience. He took ownership of the entire backend architecture and kept the team aligned during crunch time. Reliable, fast learner, and great at debugging under pressure.",
    name: "Mowriyan C",
    role: "Final Year B.E. Student",
    institution: "UCE Ariyalur",
    initials: "MC",
    color: "teal",
    linkedIn: "https://www.linkedin.com/in/mowriyan/",
  },
  {
    id: 3,
    quote:
      "Bala built a fully functional notes app with JWT auth in under a week during our hackathon. Clean component structure, solid REST API, and he shipped it to production the same day. That kind of end-to-end ownership is rare in a fresher.",
    name: "[Mentor / Hackathon Buddy]",
    role: "Full-Stack Developer",
    institution: "Company / Event Name",
    initials: "MB",
    color: "purple",
    linkedIn: null,
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const inView = useInView(ref, 0.1);

  return (
    <section
      className={`testimonials ${inView ? "testimonials--visible" : ""}`}
      ref={ref}
    >
      <div className="testimonials__container">
        {/* ── Section Header ── */}
        <div className="testimonials__header">
          <span className="testimonials__label">Kind Words</span>
          <h2 className="testimonials__title">
            What people <span className="testimonials__accent">say</span>
          </h2>
          <p className="testimonials__sub">
            Recommendations from professors, teammates, and collaborators.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.id}
              className="testimonials__card"
              style={{ "--delay": `${i * 0.12}s` }}
            >
              {/* Decorative quote mark */}
              <div className="testimonials__quote-icon" aria-hidden="true">
                <FaQuoteLeft />
              </div>

              {/* Quote text */}
              <blockquote className="testimonials__quote">{t.quote}</blockquote>

              {/* Author row */}
              <div className="testimonials__author">
                <div
                  className={`testimonials__avatar testimonials__avatar--${t.color}`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>

                <div className="testimonials__author-info">
                  <div className="testimonials__name">
                    {t.name}
                    {t.linkedIn && (
                      <a
                        href={t.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="testimonials__linkedin"
                        aria-label={`${t.name} on LinkedIn`}
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                  </div>
                  <div className="testimonials__role">
                    {t.role} · {t.institution}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
