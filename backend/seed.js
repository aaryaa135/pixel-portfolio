import db from './db.js';

// Run with `npm run seed`. Safe to run multiple times — existing
// slugs are updated in place rather than duplicated.
const projects = [
  {
    slug: 'proj-code',
    label: 'Web App',
    icon: 'code',
    title: 'Sprout — Habit Tracker',
    sort_order: 1,
    body: `<h2>SPROUT 🌱</h2>
    <p>A pastel habit-tracking web app built with React. Users grow a pixel plant as their streaks go up.</p>
    <div class="tag">React</div><div class="tag">Node</div><div class="tag">PostgreSQL</div>
    <h3>Highlights</h3>
    <ul><li>Custom streak-animation engine</li><li>10k+ users in first 3 months</li><li>98 Lighthouse score</li></ul>
    <a class="btn" href="#" onclick="return false;">VIEW LIVE →</a>`,
  },
  {
    slug: 'proj-design',
    label: 'Design Work',
    icon: 'palette',
    title: 'Peachy — Brand System',
    sort_order: 2,
    body: `<h2>PEACHY BRAND KIT</h2>
    <p>Full visual identity for a boutique tea brand: logo, packaging, and a pixel-inspired mascot family.</p>
    <div class="tag">Branding</div><div class="tag">Illustration</div><div class="tag">Packaging</div>
    <h3>Deliverables</h3>
    <ul><li>Logo + submark system</li><li>12-piece packaging suite</li><li>Mascot illustration set</li></ul>
    <a class="btn" href="#" onclick="return false;">VIEW CASE STUDY →</a>`,
  },
  {
    slug: 'proj-game',
    label: 'Mini Game',
    icon: 'joystick',
    title: 'Crumb Quest — Browser Game',
    sort_order: 3,
    body: `<h2>CRUMB QUEST</h2>
    <p>A tiny top-down browser game where a pixel hamster collects crumbs while avoiding sleepy cats.</p>
    <div class="tag">JavaScript</div><div class="tag">Canvas API</div><div class="tag">Game Jam</div>
    <h3>Notes</h3>
    <ul><li>Built solo in 48 hours</li><li>Top 10 finish, 300+ entries</li><li>Hand-drawn pixel sprites</li></ul>
    <a class="btn" href="#" onclick="return false;">PLAY NOW →</a>`,
  },
  {
    slug: 'proj-blog',
    label: 'Writing',
    icon: 'notebook',
    title: 'Notes on Small Software',
    sort_order: 4,
    body: `<h2>THE BLOG</h2>
    <p>Essays on building tiny, joyful software — process notes, design breakdowns, and the occasional rant about padding.</p>
    <div class="tag">Essays</div><div class="tag">Dev Notes</div>
    <h3>Recent posts</h3>
    <ul><li>"Why cute UI is still professional UI"</li><li>"Shipping solo: a postmortem"</li><li>"On pixel grids and sanity"</li></ul>
    <a class="btn" href="#" onclick="return false;">READ MORE →</a>`,
  },
  {
    slug: 'proj-photo',
    label: 'Photography',
    icon: 'camera',
    title: 'Film Diary',
    sort_order: 5,
    body: `<h2>FILM DIARY</h2>
    <p>A rotating collection of 35mm film photography — mostly pastel skies, cafes, and cities at golden hour.</p>
    <div class="tag">35mm</div><div class="tag">Analog</div>
    <p>Gallery preview coming soon — swap this section with real photos any time.</p>`,
  },
  {
    slug: 'proj-music',
    label: 'Music',
    icon: 'cassette',
    title: 'Lo-fi Side Project',
    sort_order: 6,
    body: `<h2>STUDY BEATS VOL.1</h2>
    <p>A short lo-fi EP made for late-night coding sessions. Chiptune textures layered under warm piano loops.</p>
    <div class="tag">Ableton</div><div class="tag">Chiptune</div>
    <a class="btn" href="#" onclick="return false;">LISTEN →</a>`,
  },
  {
    slug: 'proj-about',
    label: 'About Me',
    icon: 'idcard',
    title: 'About Ava',
    sort_order: 7,
    body: `<h2>HI, I'M AVA 👋</h2>
    <p>Product-minded designer/developer who loves building small, delightful things with a lot of care in the details. Currently open to new opportunities.</p>
    <h3>Stack</h3>
    <div class="tag">React</div><div class="tag">TypeScript</div><div class="tag">Figma</div><div class="tag">Node</div>
    <h3>Currently</h3>
    <p>Building tiny tools, drawing pixel art, and drinking too much peach tea.</p>`,
  },
  {
    slug: 'proj-resume',
    label: 'Resume',
    icon: 'scroll',
    title: 'Resume.pdf',
    sort_order: 8,
    body: `<h2>EXPERIENCE</h2>
    <p><strong>Product Designer/Engineer</strong> — Freelance, 2023–Present<br>Design + build end-to-end products for small studios and startups.</p>
    <p><strong>Frontend Engineer</strong> — Studio Petal, 2021–2023<br>Led the design system and component library.</p>
    <h3>Education</h3>
    <p>B.S. Computer Science &amp; Design</p>
    <a class="btn" href="#" onclick="return false;">DOWNLOAD PDF →</a>`,
  },
  {
    slug: 'proj-contact',
    label: 'Contact',
    icon: 'mail',
    title: 'Say Hi',
    sort_order: 9,
    body: `<p>Always happy to chat about projects, collaborations, or pixel art techniques.</p>`,
  },
];

const upsert = db.prepare(`
  INSERT INTO projects (slug, label, icon, title, body, sort_order)
  VALUES (@slug, @label, @icon, @title, @body, @sort_order)
  ON CONFLICT(slug) DO UPDATE SET
    label=excluded.label,
    icon=excluded.icon,
    title=excluded.title,
    body=excluded.body,
    sort_order=excluded.sort_order
`);

const insertMany = db.transaction((rows) => {
  for (const row of rows) upsert.run(row);
});

insertMany(projects);
console.log(`Seeded ${projects.length} projects into portfolio.db`);
