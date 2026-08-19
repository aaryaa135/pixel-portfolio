import { useState } from 'react';
import { sendContactMessage } from '../api';

// Block disposable/test email domains and obviously fake patterns
const BLOCKED_EMAIL_PATTERNS = [
  /^test@/i,
  /^fake@/i,
  /^dummy@/i,
  /^example@/i,
  /^admin@/i,
  /^root@/i,
  /^user@/i,
  /^noreply@/i,
  /^no-reply@/i,
  /^donotreply@/i,
  /^postmaster@/i,
  /^webmaster@/i,
  /^info@.*\.test$/i,
  /^contact@.*\.test$/i,
  /\.test$/i,
  /\.local$/i,
  /\.example$/i,
  /\.invalid$/i,
  /aaryax135@gmail\.com$/i, // block your own email
];

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

const isValidEmail = (email) => {
  if (!emailRegex.test(email) || email.length > 254) return false;
  
  // Check against blocked patterns
  for (const pattern of BLOCKED_EMAIL_PATTERNS) {
    if (pattern.test(email)) return false;
  }
  
  return true;
};

// Real contact form wired to the backend's POST /api/contact endpoint.
// See /backend — messages are stored in a SQLite database there.
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');
  const [emailError, setEmailError] = useState('');

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    if (field === 'email') {
      setEmailError(isValidEmail(value) ? '' : 'Please enter a valid email address');
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    
    // Validate email before sending
    if (!isValidEmail(form.email)) {
      setEmailError('Please enter a valid email address (no test/fake emails)');
      setStatus('error');
      setErrorMsg('Invalid email address');
      return;
    }
    
    setStatus('sending');
    setErrorMsg('');
    setEmailError('');
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
      {emailError && <p className="form-error" style={{marginTop: '4px'}}>⚠ {emailError}</p>}

      <label htmlFor="cf-message">Message</label>
      <textarea id="cf-message" required rows={4} value={form.message} onChange={update('message')} />

      {status === 'error' && <p className="form-error">⚠ {errorMsg}</p>}

      <button type="submit" className="btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'SENDING…' : 'DROP A MESSAGE →'}
      </button>

      <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '2px solid var(--ink)' }}>
        <p className="form-hint" style={{ marginBottom: '12px', textAlign: 'center' }}>
          Or find me here:
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <a
            href="https://github.com/aaryaa135"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              border: '2px solid var(--ink)',
              borderRadius: '8px',
              background: '#fff',
              boxShadow: '3px 3px 0 var(--ink)',
              color: 'var(--ink)',
              textDecoration: 'none',
              transition: 'transform 0.1s, box-shadow 0.1s',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translate(2px, 2px)';
              e.currentTarget.style.boxShadow = '1px 1px 0 var(--ink)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)';
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aarya--gupta/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              border: '2px solid var(--ink)',
              borderRadius: '8px',
              background: '#fff',
              boxShadow: '3px 3px 0 var(--ink)',
              color: 'var(--ink)',
              textDecoration: 'none',
              transition: 'transform 0.1s, box-shadow 0.1s',
            }}
            onMouseDown={(e) => {
              e.currentTarget.style.transform = 'translate(2px, 2px)';
              e.currentTarget.style.boxShadow = '1px 1px 0 var(--ink)';
            }}
            onMouseUp={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translate(0, 0)';
              e.currentTarget.style.boxShadow = '3px 3px 0 var(--ink)';
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 
        <p className="form-hint">
          or email directly:{" "}
          <a href="mailto:hello@example.com">hello@example.com</a>
        </p>
        */}
    </form>
  );
}
