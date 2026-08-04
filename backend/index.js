import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './db.js';

dotenv.config();

const app = express();
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

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
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are all required' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'please enter a valid email address' });
  }

  const stmt = db.prepare('INSERT INTO messages (name, email, message) VALUES (?, ?, ?)');
  const info = stmt.run(name.trim(), email.trim(), message.trim());
  res.status(201).json({ id: info.lastInsertRowid });
});

// GET /api/messages?key=... — simple protected endpoint so you can read
// submitted messages. Swap ADMIN_KEY for real auth before going to production.
app.get('/api/messages', (req, res) => {
  if (!process.env.ADMIN_KEY || req.query.key !== process.env.ADMIN_KEY) {
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
