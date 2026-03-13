import { useState } from "react";
import emailjs from "@emailjs/browser";
import { EJ_SERVICE_ID, EJ_TEMPLATE_ID, EJ_PUBLIC_KEY } from "../../config";
import "@/styles/pages/contact.css";

import {
  FaGithub,
  FaLinkedinIn,
  FaDev,
  FaMedium,
  FaCheck,
  FaShieldHalved,
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaLocationDot,
  FaClock,
  FaUser,
  FaPenNib,
  FaPaperPlane,
  FaCircleExclamation,
} from "react-icons/fa6";

const INFO = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "bkumaran2112@gmail.com",
    href: "mailto:bkumaran2112@gmail.com",
  },
  {
    icon: <FaLocationDot />,
    label: "Location",
    value: "Chennai, India 🇮🇳",
    href: null,
  },
  {
    icon: <FaClock />,
    label: "Response",
    value: "Within 24 hours",
    href: null,
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    handle: "@balakumaranbala2112",
    url: "https://github.com/balakumaranbala2112",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    handle: "Balakumaran K",
    url: "https://linkedin.com/in/balakumaran2112",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Dev.to",
    handle: "@balakumaran",
    url: "https://dev.to/yourusername",
    icon: <FaDev />,
  },
  {
    label: "Medium",
    handle: "@balakumaran",
    url: "https://medium.com/@yourusername",
    icon: <FaMedium />,
  },
];

const EMPTY = { name: "", email: "", subject: "", message: "" };

function validate(f) {
  const e = {};
  if (!f.name.trim()) e.name = "Name is required.";
  if (!f.email.trim()) e.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
    e.email = "Enter a valid email.";
  if (!f.subject.trim()) e.subject = "Subject is required.";
  if (!f.message.trim()) e.message = "Message is required.";
  else if (f.message.trim().length < 20) e.message = "At least 20 characters.";
  return e;
}

export default function Contact() {
  const [fields, setFields] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle");

  const onChange = (e) => {
    const { name, value } = e.target;
    setFields((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
    setErrors((p) => ({ ...p, [name]: validate(fields)[name] || "" }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) {
      setErrors(errs);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }
    setStatus("loading");
    try {
      await emailjs.send(EJ_SERVICE_ID, EJ_TEMPLATE_ID, fields, EJ_PUBLIC_KEY);
      setStatus("success");
      setFields(EMPTY);
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="ct-page">
      <div className="ct-wrap">
        {/* ── INLINE PAGE LABEL — not a hero, just one row ── */}
        <div className="ct-label-row">
          <div className="ct-label-row__left">
            <h1 className="ct-page-title">
              Let's work <span className="ct-accent">together</span>
            </h1>
          </div>
          <div className="ct-avail">
            <span className="ct-avail__dot" />
            Open to opportunities
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="ct-grid">
          {/* FORM — first in DOM = first on mobile */}
          <div className="ct-form-col">
            <div className="ct-card">
              {status === "success" ? (
                <div className="ct-success">
                  <div className="ct-success__icon">
                    <FaCheck />
                  </div>
                  <h3>Message sent!</h3>
                  <p>
                    I'll reply within 24 hours. Looking forward to connecting.
                  </p>
                  <button
                    className="ct-btn ct-btn--ghost"
                    onClick={() => setStatus("idle")}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <div className="ct-form-head">
                    <h2>Send a message</h2>
                    <p>
                      Fill in the details and I'll respond as soon as possible.
                    </p>
                  </div>

                  {status === "error" && (
                    <div className="ct-banner ct-banner--error">
                      <FaCircleExclamation />
                      Something went wrong — please try again or email me
                      directly.
                    </div>
                  )}

                  <div className="ct-row2">
                    <F
                      id="name"
                      label="Full Name"
                      err={errors.name}
                      touched={touched.name}
                    >
                      <div className="ct-ibox">
                        <FaUser className="ct-ibox__icon" />
                        <input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Balakumaran K"
                          value={fields.name}
                          onChange={onChange}
                          onBlur={onBlur}
                          autoComplete="name"
                        />
                      </div>
                    </F>
                    <F
                      id="email"
                      label="Email Address"
                      err={errors.email}
                      touched={touched.email}
                    >
                      <div className="ct-ibox">
                        <FaEnvelope className="ct-ibox__icon" />
                        <input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          value={fields.email}
                          onChange={onChange}
                          onBlur={onBlur}
                          autoComplete="email"
                        />
                      </div>
                    </F>
                  </div>

                  <F
                    id="subject"
                    label="Subject"
                    err={errors.subject}
                    touched={touched.subject}
                  >
                    <div className="ct-ibox">
                      <FaPenNib className="ct-ibox__icon" />
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Freelance, job opportunity, collaboration…"
                        value={fields.subject}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </div>
                  </F>

                  <F
                    id="message"
                    label="Message"
                    err={errors.message}
                    touched={touched.message}
                    right={
                      <span className="ct-char">
                        {fields.message.length}/20 min
                      </span>
                    }
                  >
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or what you'd like to discuss…"
                      value={fields.message}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                  </F>

                  <div className="ct-submit-row">
                    <button
                      type="submit"
                      className={`ct-btn ct-btn--primary${status === "loading" ? " ct-btn--loading" : ""}`}
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <span className="ct-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Send Message
                        </>
                      )}
                    </button>
                    <span className="ct-privacy">
                      <FaShieldHalved />
                      Never shared with third parties
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* SIDEBAR — second in DOM = below form on mobile */}
          <aside className="ct-sidebar">
            <div className="ct-panel">
              {INFO.map((c) => (
                <div className="ct-info" key={c.label}>
                  <div className="ct-info__icon">{c.icon}</div>
                  <div className="ct-info__body">
                    <span className="ct-info__label">{c.label}</span>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="ct-info__val ct-info__val--link"
                      >
                        {c.value}
                      </a>
                    ) : (
                      <span className="ct-info__val">{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="ct-panel">
              <div className="ct-panel__head">Find me online</div>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="ct-social"
                >
                  <div className="ct-social__icon">{s.icon}</div>
                  <div className="ct-social__text">
                    <span className="ct-social__name">{s.label}</span>
                    <span className="ct-social__handle">{s.handle}</span>
                  </div>
                  <FaArrowUpRightFromSquare className="ct-social__arrow" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function F({ id, label, err, touched, right, children }) {
  const bad = err && touched;
  return (
    <div className={`ct-field${bad ? " ct-field--err" : ""}`}>
      <label htmlFor={id}>
        {label}
        {right}
      </label>
      {children}
      {bad && (
        <span className="ct-err">
          <FaCircleExclamation />
          {err}
        </span>
      )}
    </div>
  );
}
