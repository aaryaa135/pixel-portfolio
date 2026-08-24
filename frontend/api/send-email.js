import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Standard email regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isValidEmail = (email) => {
  if (!EMAIL_REGEX.test(email)) return false;
  if (email.toLowerCase() === 'aaryax135@gmail.com') return false;
  return true;
};

// Simple in-memory rate limiter for Vercel serverless
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 10; // 10 requests per window

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now - record.windowStart > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0, retryAfter: Math.ceil((record.windowStart + RATE_LIMIT_WINDOW - now) / 1000) };
  }
  
  record.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - record.count };
}

export default async function handler(req, res) {
  // Rate limiting
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
  const rateLimit = checkRateLimit(ip);
  
  res.setHeader('X-RateLimit-Limit', RATE_LIMIT_MAX);
  res.setHeader('X-RateLimit-Remaining', rateLimit.remaining);
  
  if (!rateLimit.allowed) {
    res.setHeader('Retry-After', rateLimit.retryAfter);
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  // Server-side email validation
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address. Please use a real email (no test/fake/disposable emails).' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'aaryax135@gmail.com',
      subject: `📨 New message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    await resend.emails.send({
      from: 'Aarya Gupta <onboarding@resend.dev>',
      to: email,
      subject: 'Thanks for reaching out! 🎮',
      html: `
        <div style="font-family: 'VT323', monospace; max-width: 600px; margin: 0 auto; background: #fffbfd; border: 3px solid #4a2e4a; padding: 30px;">
          <h1 style="font-family: 'Press Start 2P', monospace; font-size: 18px; color: #4a2e4a; text-align: center; margin-bottom: 20px;">
            MESSAGE RECEIVED 📬
          </h1>
          
          <p style="font-size: 18px; line-height: 1.6; color: #4a2e4a;">
            Hey <strong>${name}</strong>!<br><br>
            Thanks for dropping a message in my pixel portfolio. I&apos;ve received it and will get back to you soon.
          </p>

          <div style="background: #fdf6fa; border: 3px solid #4a2e4a; padding: 20px; margin: 20px 0; text-align: center;">
            <p style="font-family: 'Press Start 2P', monospace; font-size: 12px; color: #4a2e4a; margin: 0; white-space: pre;">
╔═════════════════════╗
║  STATUS: QUEUED    ║
║  PRIORITY: HIGH    ║
╚═════════════════════╝
            </p>
          </div>

          <p style="font-size: 18px; line-height: 1.6; color: #4a2e4a;">
            While you wait, feel free to explore:
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://pixel-portfolio-theta.vercel.app/" style="display: inline-block; background: #fff3b0; border: 2px solid #4a2e4a; padding: 12px 20px; margin: 8px; text-decoration: none; color: #4a2e4a; font-family: 'Press Start 2P', monospace; font-size: 10px; box-shadow: 3px 3px 0 #4a2e4a;">
              🎮 PLAY CRUMB QUEST
            </a>
            <a href="https://github.com/aaryaa135" style="display: inline-block; background: #b8ecd6; border: 2px solid #4a2e4a; padding: 12px 20px; margin: 8px; text-decoration: none; color: #4a2e4a; font-family: 'Press Start 2P', monospace; font-size: 10px; box-shadow: 3px 3px 0 #4a2e4a;">
              📂 VIEW GITHUB
            </a>
            <a href="https://www.linkedin.com/in/aarya--gupta/" style="display: inline-block; background: #cdb8ec; border: 2px solid #4a2e4a; padding: 12px 20px; margin: 8px; text-decoration: none; color: #4a2e4a; font-family: 'Press Start 2P', monospace; font-size: 10px; box-shadow: 3px 3px 0 #4a2e4a;">
              💼 CONNECT LINKEDIN
            </a>
          </div>

          <hr style="border: 2px dashed #ff8fc0; margin: 30px 0;">

          <p style="font-size: 14px; color: #8a6a8a; text-align: center;">
            — Aarya (the human behind the pixels)<br>
            <span style="font-family: 'Press Start 2P', monospace; font-size: 8px;">
              P.S. Konami code (↑↑↓↓←→←→BA) still works on the site 🕹️
            </span>
          </p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}