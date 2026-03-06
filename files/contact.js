// functions/contact.js
// ─────────────────────────────────────────────────────────────
// POST /sendMessage
//   1. Validates input
//   2. Rate-limits by IP (max 3 messages / hour)
//   3. Saves to Firestore /messages collection
//   4. Sends email notification via Nodemailer (Gmail SMTP)
// ─────────────────────────────────────────────────────────────

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { validateContactForm, sanitize } = require("./utils/validate");
const { corsHandler } = require("./utils/cors");

if (!admin.apps.length) admin.initializeApp();
const db = admin.firestore();

// ── Nodemailer transporter ────────────────────────────────────
// Store credentials via: firebase functions:config:set
//   gmail.user="you@gmail.com"  gmail.pass="your-app-password"
// See: https://myaccount.google.com/apppasswords
function createTransporter() {
  const config = functions.config();
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.gmail?.user || process.env.GMAIL_USER,
      pass: config.gmail?.pass || process.env.GMAIL_PASS,
    },
  });
}

// ── Rate limiter (Firestore-based) ────────────────────────────
async function checkRateLimit(ip) {
  const hourAgo = Date.now() - 60 * 60 * 1000;
  const ref = db.collection("_rateLimits").doc(ip.replace(/\./g, "_"));
  const doc = await ref.get();

  if (!doc.exists) {
    await ref.set({ count: 1, firstAt: Date.now() });
    return true; // allowed
  }

  const { count, firstAt } = doc.data();

  // Reset window if older than 1 hour
  if (firstAt < hourAgo) {
    await ref.set({ count: 1, firstAt: Date.now() });
    return true;
  }

  if (count >= 3) return false; // blocked

  await ref.update({ count: admin.firestore.FieldValue.increment(1) });
  return true;
}

// ── Cloud Function ────────────────────────────────────────────
exports.sendMessage = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    try {
      const ip =
        req.headers["x-forwarded-for"]?.split(",")[0].trim() || req.ip;

      // Rate limit check
      const allowed = await checkRateLimit(ip);
      if (!allowed) {
        return res.status(429).json({
          error: "Too many messages. Please wait an hour before trying again.",
        });
      }

      // Validate
      const body = req.body;
      const errors = validateContactForm(body);
      if (errors.length > 0) {
        return res.status(400).json({ error: errors[0] });
      }

      const { name, email, subject, message } = sanitize(body);

      // Save to Firestore
      const msgRef = await db.collection("messages").add({
        name,
        email,
        subject,
        message,
        ip,
        read: false,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });

      // Send email notification
      try {
        const transporter = createTransporter();
        const config = functions.config();
        const toEmail = config.gmail?.user || process.env.GMAIL_USER;

        await transporter.sendMail({
          from: `"Portfolio Contact" <${toEmail}>`,
          to: toEmail,
          replyTo: email,
          subject: `[Portfolio] ${subject}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;border:1px solid #e5e7eb;border-radius:8px">
              <h2 style="color:#111;margin-bottom:4px">New message from your portfolio</h2>
              <p style="color:#6b7280;font-size:13px;margin-top:0">Message ID: ${msgRef.id}</p>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
              <table style="width:100%;font-size:14px">
                <tr><td style="color:#6b7280;padding:6px 0;width:80px">From</td><td><strong>${name}</strong> &lt;${email}&gt;</td></tr>
                <tr><td style="color:#6b7280;padding:6px 0">Subject</td><td>${subject}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
              <p style="white-space:pre-wrap;font-size:15px;line-height:1.6;color:#374151">${message}</p>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
              <p style="font-size:12px;color:#9ca3af">Sent from bk-dev-portfolio contact form</p>
            </div>
          `,
        });
      } catch (emailErr) {
        // Email failure is non-fatal — message is already saved
        console.error("Email send failed:", emailErr.message);
      }

      return res.status(200).json({
        success: true,
        id: msgRef.id,
        message: "Message sent successfully!",
      });
    } catch (err) {
      console.error("sendMessage error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
});
