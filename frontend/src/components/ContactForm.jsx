import { useState } from 'react';
import { sendContactMessage } from '../api';

// Real contact form wired to the backend's POST /api/contact endpoint.
// See /backend — messages are stored in a SQLite database there.
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      await sendContactMessage(form);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Is the backend running?');
    }
  };

  if (status === 'sent') {
    return (
      <div>
        <h2>MESSAGE SENT 💌</h2>
        <p>Thanks for reaching out — I'll get back to you soon.</p>
        <button type="button" className="btn" onClick={() => setStatus('idle')}>
          SEND ANOTHER →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="contact-form">
      <h2>GET IN TOUCH</h2>
      <p>Whether you're a recruiter, engineer, founder, or someone with an interesting idea—
        my inbox is always open.</p>

      <label htmlFor="cf-name">Name</label>
      <input id="cf-name" required value={form.name} onChange={update('name')} />

      <label htmlFor="cf-email">Email</label>
      <input id="cf-email" type="email" required value={form.email} onChange={update('email')} />

      <label htmlFor="cf-message">Message</label>
      <textarea id="cf-message" required rows={4} value={form.message} onChange={update('message')} />

      {status === 'error' && <p className="form-error">⚠ {errorMsg}</p>}

      <button type="submit" className="btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'SENDING…' : 'DROP A MESSAGE →'}
      </button>

      {/* 
        <p className="form-hint">
          or email directly:{" "}
          <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
        */}
    </form>
  );
}
