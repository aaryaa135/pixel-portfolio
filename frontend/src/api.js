// Thin wrapper around the backend API (see /backend).
// If the backend isn't running, the app still works using the
// local fallback data in src/data/projects.js — see fetchProjects() in App.jsx.

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || 'io/f/xoeapqgy';

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/api/projects`);
  if (!res.ok) throw new Error('Could not load projects from the API');
  return res.json();
}

export async function sendContactMessage({ name, email, message }) {
  const res = await fetch(`https://formspree.io/f/xoeapqgy`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error || 'Could not send your message');
  }
  return res.json();
}
