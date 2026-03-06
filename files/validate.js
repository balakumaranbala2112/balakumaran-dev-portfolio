// functions/utils/validate.js
// ─────────────────────────────────────────────────────────────
// Input validation and sanitization for contact form
// ─────────────────────────────────────────────────────────────

/**
 * Returns array of error strings (empty = valid)
 */
function validateContactForm({ name, email, subject, message }) {
  const errors = [];

  if (!name || !String(name).trim()) errors.push("Name is required.");
  else if (String(name).trim().length > 100)
    errors.push("Name must be under 100 characters.");

  if (!email || !String(email).trim()) errors.push("Email is required.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim()))
    errors.push("Enter a valid email address.");

  if (!subject || !String(subject).trim()) errors.push("Subject is required.");
  else if (String(subject).trim().length > 200)
    errors.push("Subject must be under 200 characters.");

  if (!message || !String(message).trim()) errors.push("Message is required.");
  else if (String(message).trim().length < 20)
    errors.push("Message must be at least 20 characters.");
  else if (String(message).trim().length > 5000)
    errors.push("Message must be under 5000 characters.");

  return errors;
}

/**
 * Strip HTML tags and trim fields
 */
function sanitize({ name, email, subject, message }) {
  const strip = (s) =>
    String(s ?? "")
      .replace(/<[^>]*>/g, "")
      .trim();
  return {
    name: strip(name),
    email: strip(email).toLowerCase(),
    subject: strip(subject),
    message: strip(message),
  };
}

module.exports = { validateContactForm, sanitize };
