import db from './db.js';

// Run with `npm run seed`. Safe to run multiple times — existing
// slugs are updated in place rather than duplicated.
const projects = [
  {
    slug: 'proj-about',
    label: 'About Me',
    icon: 'idcard',
    title: 'About Aarya',
    sort_order: 1,
    body: `<h2>HI, I'M AARYA 👋</h2>
    <p>Software engineer who builds full-stack products end to end — clean frontends, solid backends, and databases that hold up under real use.</p>
    <p>I like taking a project from a blank repo to something people actually use, and sweating the small details along the way.</p>
    <h3>Stack</h3>
    <div class="tag">React</div><div class="tag">Node</div><div class="tag">TypeScript</div><div class="tag">SQL</div>
    <h3>Currently</h3>
    <p>Open to new opportunities — building small tools and side projects in the meantime.</p>`,
  },
  {
    slug: 'proj-stack',
    label: 'Stack',
    icon: 'stack',
    title: 'Tech Stack',
    sort_order: 6,
    body: `<h2>MY STACK</h2><p>Fill this in with what you actually use.</p>`,
  },
  {
    slug: 'proj-projects',
    label: 'Projects',
    icon: 'code',
    title: 'Projects',
    sort_order: 2,
    body: `<h2>PROJECTS</h2>
    <p><strong>Sprout — Habit Tracker</strong><br>A habit-tracking web app. Users grow a pixel plant as their streaks go up.</p>
    <div class="tag">React</div><div class="tag">Node</div><div class="tag">PostgreSQL</div>
    <p style="margin-top:18px;"><strong>RouteWise — API Service</strong><br>A backend service that scores delivery routes for a logistics side project.</p>
    <div class="tag">Express</div><div class="tag">Docker</div><div class="tag">Redis</div>
    <a class="btn" href="#" onclick="return false;">VIEW ON GITHUB →</a>`,
  },
  {
    slug: 'proj-game',
    label: 'Mini Game',
    icon: 'joystick',
    title: 'Crumb Quest',
    sort_order: 3,
    body: `<h2>CRUMB QUEST</h2>
    <p>A tiny top-down browser game — a pixel hamster collects crumbs while dodging sleepy cats. Built solo in a 48-hour game jam.</p>
    <div class="tag">JavaScript</div><div class="tag">Canvas API</div>
    <a class="btn" href="#" onclick="return false;">PLAY NOW →</a>`,
  },
  {
    slug: 'proj-resume',
    label: 'Resume',
    icon: 'scroll',
    title: 'Resume.pdf',
    sort_order: 4,
    body: `<h2>EXPERIENCE</h2>
    <p><strong>Software Engineer</strong> — Freelance, 2023–Present<br>Design and build full-stack products for small teams and startups.</p>
    <p><strong>Backend Developer</strong> — Studio Petal, 2021–2023<br>Owned the API layer and core data models.</p>
    <h3>Education</h3>
    <p>B.S. Computer Science</p>
    <a class="btn" href="#" onclick="return false;">DOWNLOAD PDF →</a>`,
  },
  {
    slug: 'proj-contact',
    label: 'Contact',
    icon: 'mail',
    title: 'Say Hi',
    sort_order: 5,
    body: `<p>Always happy to chat about projects, roles, or pixel art.</p>`,
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
