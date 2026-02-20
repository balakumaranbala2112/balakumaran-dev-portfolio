// src/pages/Contact.jsx
// ─────────────────────────────────────────────────────────────
// Split-layout contact page:
//   LEFT  — intro text, contact info cards, social links
//   RIGHT — working form with validation + success state
//
// For real form submission, replace the setTimeout in
// handleSubmit with your EmailJS / Formspree / API call.
// EmailJS example: https://www.emailjs.com/docs/sdk/send/
// ─────────────────────────────────────────────────────────────

import { useState } from "react";
import "@/styles/pages/contact.css";
import { FaGithub, FaLinkedinIn, FaDev, FaMedium } from "react-icons/fa";

import { FaEnvelope, FaLocationDot, FaClock } from "react-icons/fa6";
const SOCIAL_LINKS = [
  {
    label: "GitHub",
    handle: "@balakumaranbala2112",
    url: "https://github.com/balakumaranbala2112",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    handle: "Balakumaran",
    url: "https://linkedin.com/in/yourusername",
    icon: FaLinkedinIn,
  },
  {
    label: "Dev.to",
    handle: "@balakumaran",
    url: "https://dev.to/yourusername",
    icon: FaDev,
  },
  {
    label: "Medium",
    handle: "@balakumaran",
    url: "https://medium.com/@yourusername",
    icon: FaMedium,
  },
];

const INFO_CARDS = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "balakumaran@example.com",
    href: "mailto:balakumaran@example.com",
  },
  {
    icon: FaLocationDot,
    label: "Based in",
    value: "Chennai, Tamil Nadu 🇮🇳",
    href: null,
  },
  {
    icon: FaClock,
    label: "Response time",
    value: "Usually within 24 hours",
    href: null,
  },
];

/* ── FIELD CONFIG ───────────────────────────────────────────── */
const INITIAL = { name: "", email: "", subject: "", message: "" };

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
    errors.email = "Enter a valid email address.";
  if (!fields.subject.trim()) errors.subject = "Subject is required.";
  if (!fields.message.trim()) errors.message = "Message is required.";
  else if (fields.message.trim().length < 20)
    errors.message = "Message must be at least 20 characters.";
  return errors;
}

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════════════ */
export default function Contact() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // clear error as user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate({ ...fields });
    setErrors((prev) => ({ ...prev, [name]: errs[name] || "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setStatus("loading");

    // ── Replace this block with your real submission logic ──
    // e.g. EmailJS:
    //   await emailjs.send(serviceId, templateId, fields, publicKey);
    // e.g. Formspree:
    //   await fetch("https://formspree.io/f/YOUR_ID", {
    //     method: "POST", headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(fields),
    //   });
    await new Promise((r) => setTimeout(r, 1600)); // simulate network
    // ────────────────────────────────────────────────────────

    setStatus("success");
    setFields(INITIAL);
    setTouched({});
    setErrors({});
  };

  const handleReset = () => setStatus("idle");

  return (
    <div className="ct-page">
      {/* ══ HERO STRIP ══════════════════════════════════════ */}
      <section className="ct-hero">
        <div className="ct-container">
          <span className="ct-eyebrow">Get in touch</span>
          <h1 className="ct-hero-title">
            Let's build something
            <br />
            <span className="ct-hero-accent">great together.</span>
          </h1>
          <p className="ct-hero-sub">
            Open to freelance projects, full-time roles, and interesting
            collaborations. Drop me a message — I'll get back to you within a
            day.
          </p>
        </div>
      </section>

      {/* ══ SPLIT LAYOUT ════════════════════════════════════ */}
      <section className="ct-body">
        <div className="ct-container ct-grid">
          {/* ── LEFT PANEL ────────────────────────────────── */}
          <div className="ct-left">
            {/* AVAILABILITY BADGE */}
            <div className="ct-availability">
              <span className="ct-avail-dot" />
              Available for new projects
            </div>

            {/* INFO CARDS */}
            <div className="ct-info-cards">
              {INFO_CARDS.map((card) => (
                <div className="ct-info-card" key={card.label}>
                  <div className="ct-info-icon">
                    <i className={card.icon} />
                  </div>
                  <div className="ct-info-text">
                    <span className="ct-info-label">{card.label}</span>
                    {card.href ? (
                      <a href={card.href} className="ct-info-value link">
                        {card.value}
                      </a>
                    ) : (
                      <span className="ct-info-value">{card.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* DIVIDER */}
            <div className="ct-divider" />

            {/* SOCIAL LINKS */}
            <p className="ct-social-label">Find me online</p>
            <div className="ct-socials">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social-item"
                >
                  <div className="ct-social-icon">
                    <i className={s.icon} />
                  </div>
                  <div className="ct-social-text">
                    <span className="ct-social-platform">{s.label}</span>
                    <span className="ct-social-handle">{s.handle}</span>
                  </div>
                  <i className="fa-solid fa-arrow-up-right-from-square ct-social-arrow" />
                </a>
              ))}
            </div>
          </div>

          {/* ── RIGHT PANEL — FORM ────────────────────────── */}
          <div className="ct-right">
            <div className="ct-form-card">
              {status === "success" ? (
                /* SUCCESS STATE */
                <div className="ct-success">
                  <div className="ct-success-icon">
                    <i className="fa-solid fa-check" />
                  </div>
                  <h3>Message sent!</h3>
                  <p>
                    Thanks for reaching out. I'll reply to your email within 24
                    hours. Looking forward to connecting!
                  </p>
                  <button className="ct-btn outline" onClick={handleReset}>
                    Send another message
                  </button>
                </div>
              ) : (
                /* FORM */
                <form className="ct-form" onSubmit={handleSubmit} noValidate>
                  <div className="ct-form-header">
                    <h2>Send a message</h2>
                    <p>Fill in the form and I'll get back to you shortly.</p>
                  </div>

                  {/* ROW: name + email */}
                  <div className="ct-row-2">
                    <div
                      className={`ct-field ${errors.name && touched.name ? "error" : ""}`}
                    >
                      <label htmlFor="name">Full Name</label>
                      <div className="ct-input-wrap">
                        <i className="fa-solid fa-user" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Balakumaran"
                          value={fields.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="name"
                        />
                      </div>
                      {errors.name && touched.name && (
                        <span className="ct-error-msg">
                          <i className="fa-solid fa-circle-exclamation" />{" "}
                          {errors.name}
                        </span>
                      )}
                    </div>

                    <div
                      className={`ct-field ${errors.email && touched.email ? "error" : ""}`}
                    >
                      <label htmlFor="email">Email Address</label>
                      <div className="ct-input-wrap">
                        <i className="fa-solid fa-envelope" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={fields.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          autoComplete="email"
                        />
                      </div>
                      {errors.email && touched.email && (
                        <span className="ct-error-msg">
                          <i className="fa-solid fa-circle-exclamation" />{" "}
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div
                    className={`ct-field ${errors.subject && touched.subject ? "error" : ""}`}
                  >
                    <label htmlFor="subject">Subject</label>
                    <div className="ct-input-wrap">
                      <i className="fa-solid fa-pen-nib" />
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Freelance project, Job opportunity, Collaboration…"
                        value={fields.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                    {errors.subject && touched.subject && (
                      <span className="ct-error-msg">
                        <i className="fa-solid fa-circle-exclamation" />{" "}
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div
                    className={`ct-field ${errors.message && touched.message ? "error" : ""}`}
                  >
                    <label htmlFor="message">
                      Message
                      <span className="ct-char-count">
                        {fields.message.length} / 20 min
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell me about your project, idea, or what you'd like to discuss…"
                      value={fields.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.message && touched.message && (
                      <span className="ct-error-msg">
                        <i className="fa-solid fa-circle-exclamation" />{" "}
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    className={`ct-btn primary ${status === "loading" ? "loading" : ""}`}
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <>
                        <span className="ct-spinner" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="fa-solid fa-paper-plane" />
                      </>
                    )}
                  </button>

                  <p className="ct-form-note">
                    <i className="fa-solid fa-shield-halved" />
                    Your information is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
