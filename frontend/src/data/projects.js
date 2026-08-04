// ============================================================
// FALLBACK PROJECT DATA
// The app tries to load projects from the backend API first
// (see src/api.js + /backend). If that fails — for example while
// developing the frontend on its own — it falls back to this file
// so the site still works with no backend running at all.
//
// This is also the easiest place to edit your content by hand if
// you don't want to touch the database.
// ============================================================

const projects = [
  {
    id: 'proj-code',
    icon: 'code',
    label: 'Web App',
    title: 'Sprout — Habit Tracker',
    body: `<h2>SPROUT 🌱</h2>
    <p>A pastel habit-tracking web app built with React. Users grow a pixel plant as their streaks go up.</p>
    <div class="tag">React</div><div class="tag">Node</div><div class="tag">PostgreSQL</div>
    <h3>Highlights</h3>
    <ul><li>Custom streak-animation engine</li><li>10k+ users in first 3 months</li><li>98 Lighthouse score</li></ul>
    <a class="btn" href="#" onclick="return false;">VIEW LIVE →</a>`,
  },
  {
    id: 'proj-design',
    icon: 'palette',
    label: 'Design Work',
    title: 'Peachy — Brand System',
    body: `<h2>PEACHY BRAND KIT</h2>
    <p>Full visual identity for a boutique tea brand: logo, packaging, and a pixel-inspired mascot family.</p>
    <div class="tag">Branding</div><div class="tag">Illustration</div><div class="tag">Packaging</div>
    <h3>Deliverables</h3>
    <ul><li>Logo + submark system</li><li>12-piece packaging suite</li><li>Mascot illustration set</li></ul>
    <a class="btn" href="#" onclick="return false;">VIEW CASE STUDY →</a>`,
  },
  {
    id: 'proj-game',
    icon: 'joystick',
    label: 'Mini Game',
    title: 'Crumb Quest — Browser Game',
    body: `<h2>CRUMB QUEST</h2>
    <p>A tiny top-down browser game where a pixel hamster collects crumbs while avoiding sleepy cats. Built for a weekend game jam.</p>
    <div class="tag">JavaScript</div><div class="tag">Canvas API</div><div class="tag">Game Jam</div>
    <h3>Notes</h3>
    <ul><li>Built solo in 48 hours</li><li>Top 10 finish, 300+ entries</li><li>Hand-drawn pixel sprites</li></ul>
    <a class="btn" href="#" onclick="return false;">PLAY NOW →</a>`,
  },
  {
    id: 'proj-blog',
    icon: 'notebook',
    label: 'Writing',
    title: 'Notes on Small Software',
    body: `<h2>THE BLOG</h2>
    <p>Essays on building tiny, joyful software — process notes, design breakdowns, and the occasional rant about padding.</p>
    <div class="tag">Essays</div><div class="tag">Dev Notes</div>
    <h3>Recent posts</h3>
    <ul><li>"Why cute UI is still professional UI"</li><li>"Shipping solo: a postmortem"</li><li>"On pixel grids and sanity"</li></ul>
    <a class="btn" href="#" onclick="return false;">READ MORE →</a>`,
  },
  {
    id: 'proj-photo',
    icon: 'camera',
    label: 'Photography',
    title: 'Film Diary',
    body: `<h2>FILM DIARY</h2>
    <p>A rotating collection of 35mm film photography — mostly pastel skies, cafes, and cities at golden hour.</p>
    <div class="tag">35mm</div><div class="tag">Analog</div>
    <p>Gallery preview coming soon — swap this section with real photos any time.</p>`,
  },
  {
    id: 'proj-music',
    icon: 'cassette',
    label: 'Music',
    title: 'Lo-fi Side Project',
    body: `<h2>STUDY BEATS VOL.1</h2>
    <p>A short lo-fi EP made for late-night coding sessions. Chiptune textures layered under warm piano loops.</p>
    <div class="tag">Ableton</div><div class="tag">Chiptune</div>
    <a class="btn" href="#" onclick="return false;">LISTEN →</a>`,
  },
  {
    id: 'proj-about',
    icon: 'idcard',
    label: 'About Me',
    title: 'About Ava',
    body: `<h2>HI, I'M AVA 👋</h2>
    <p>Product-minded designer/developer who loves building small, delightful things with a lot of care in the details. Currently open to new opportunities.</p>
    <h3>Stack</h3>
    <div class="tag">React</div><div class="tag">TypeScript</div><div class="tag">Figma</div><div class="tag">Node</div>
    <h3>Currently</h3>
    <p>Building tiny tools, drawing pixel art, and drinking too much peach tea.</p>`,
  },
  {
    id: 'proj-resume',
    icon: 'scroll',
    label: 'Resume',
    title: 'Resume.pdf',
    body: `<h2>EXPERIENCE</h2>
    <p><strong>Product Designer/Engineer</strong> — Freelance, 2023–Present<br>Design + build end-to-end products for small studios and startups.</p>
    <p><strong>Frontend Engineer</strong> — Studio Petal, 2021–2023<br>Led the design system and component library.</p>
    <h3>Education</h3>
    <p>B.S. Computer Science &amp; Design</p>
    <a class="btn" href="#" onclick="return false;">DOWNLOAD PDF →</a>`,
  },
  {
    id: 'proj-contact',
    icon: 'mail',
    label: 'Contact',
    title: 'Say Hi',
    // The Contact window renders a real <ContactForm /> component instead of
    // this body — see Window.jsx. This body is just a fallback/description.
    body: `<p>Always happy to chat about projects, collaborations, or pixel art techniques.</p>`,
  },
];

export const REJECTED = {
  id: 'rejected',
  icon: 'trash',
  title: 'Rejected Concepts.txt',
  body: `<h2>🗑️ REJECTED CONCEPTS</h2>
  <p>You found the trash can. Here's what didn't make the cut:</p>
  <ul>
    <li>"Comic Sans OS" — client said no. client was right.</li>
    <li>Portfolio as a literal cereal box unboxing simulator</li>
    <li>Autoplaying chiptune remix of my own resume</li>
    <li>A dock made entirely of tiny hamsters</li>
    <li>Dark mode that's just... more pink</li>
    <li>Cursor trail of floating peach emojis (deemed "too much")</li>
  </ul>
  <p>Thanks for digging around. You clearly have good taste in easter eggs. 🍑</p>`,
};

export default projects;
