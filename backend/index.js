import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import db from './db.js';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

// Rate limiting: 10 requests per 15 minutes per IP for contact endpoints
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply to contact-related routes
app.use('/api/contact', contactLimiter);
app.use('/api/send-email', contactLimiter);

// Email transporter (configured via env vars)
const transporter = process.env.SMTP_HOST ? nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
}) : null;

// GET /api/projects — returns all projects, ordered for the desktop grid.
// The frontend maps `slug` -> `id` so window state keys stay stable.
app.get('/api/projects', (req, res) => {
  const rows = db.prepare('SELECT * FROM projects ORDER BY sort_order ASC').all();
  res.json(
    rows.map((r) => ({
      id: r.slug,
      icon: r.icon,
      label: r.label,
      title: r.title,
      body: r.body,
    }))
  );
});

// POST /api/contact — stores a message from the Contact window's form.
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are all required' });
  }
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email) || email.length > 254) {
    return res.status(400).json({ error: 'please enter a valid email address' });
  }

  const stmt = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
  const info = stmt.run(name.trim(), email.trim(), message.trim());

  // Send email notification (non-blocking)
  if (transporter && process.env.CONTACT_EMAIL_TO) {
    transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Portfolio Contact: ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} <${email}></p><p>${message.replace(/\n/g, '<br>')}</p>`,
    }).catch((err) => console.error('Email send failed:', err));
  }

  res.status(201).json({ id: info.lastInsertRowid });
});

// GET /api/messages — protected endpoint so you can read submitted messages.
// Uses Bearer token auth via ADMIN_TOKEN env var (more secure than query param).
app.get('/api/messages', (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith('Bearer ') ? authHeader.slice(7) : null;
  
  if (!process.env.ADMIN_TOKEN || token !== process.env.ADMIN_TOKEN) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  const rows = db.prepare('SELECT * FROM messages ORDER BY created_at DESC').all();
  res.json(rows);
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`pixel-portfolio API running on http://localhost:${PORT}`);
});
