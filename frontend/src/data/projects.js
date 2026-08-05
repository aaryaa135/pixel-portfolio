// ============================================================
// FALLBACK PROJECT DATA
// The app tries to load projects from the backend API first
// (see src/api.js + /backend). If that fails, it falls back to
// this file — so the site still works with no backend running.
//
// Order here = order of desktop icons, dock icons, and the
// "Projects" menu-bar dropdown, so keep them in sync if you
// reorder things.
// ============================================================

const projects = [
  {
    id: 'proj-about',
    icon: 'idcard',
    label: 'About Me',
    title: 'About Aarya',
    body: `<h2>HI, I'M AARYA</h2>
    <p>I'm a Computer Science student and software engineer who enjoys building reliable, user-focused products.</p>
    <p>My interests lie in backend engineering, full-stack development, and AI-powered applications. I enjoy designing scalable systems, building clean APIs, and creating software that solves real-world problems.</p>
    <p>Over the past few years, I've worked on web applications, machine learning projects, and developer tools, always focusing on writing maintainable code and continuously improving my skills.</p>
    <h3>Engineering Kernel</h3>
    <div class="tag">Systems over scripts.</div><div class="tag">Architecture over shortcuts.</div><div class="tag">Reliability over complexity.</div><div class="tag">Always building forward.</div>
    <h3>Currently</h3>
    <p>Open to new opportunities — Building AI-powered applications, exploring modern backend systems, and seeking opportunities to contribute to impactful engineering teams.</p>`,
  },
  {
    id: 'proj-stack',
    icon: 'stack',
    label: 'Stack',
    title: 'Tech Stack',
    body: `<h2>MY STACK</h2><p>Fill this in.</p>`,
  },
  {
    id: 'proj-projects',
    icon: 'code',
    label: 'Projects',
    title: 'Projects',
    body: `<h2>PROJECTS</h2>
    <p><strong>Sprout — Habit Tracker</strong><br>A habit-tracking web app. Users grow a pixel plant as their streaks go up.</p>
    <div class="tag">React</div><div class="tag">Node</div><div class="tag">PostgreSQL</div>
    <p style="margin-top:18px;"><strong>RouteWise — API Service</strong><br>A backend service that scores delivery routes for a logistics side project.</p>
    <div class="tag">Express</div><div class="tag">Docker</div><div class="tag">Redis</div>
    <a class="btn" href="#" onclick="return false;">VIEW ON GITHUB →</a>`,
  },
  {
    id: 'proj-game',
    icon: 'joystick',
    label: 'Mini Game',
    title: 'Crumb Quest',
    body: `<h2>CRUMB QUEST</h2>
    <p>A tiny top-down browser game — a pixel hamster collects crumbs while dodging sleepy cats. Built solo in a 48-hour game jam.</p>
    <div class="tag">JavaScript</div><div class="tag">Canvas API</div>
    <a class="btn" href="#" onclick="return false;">PLAY NOW →</a>`,
  },
  {
    id: 'proj-resume',
    icon: 'scroll',
    label: 'Resume',
    title: 'Resume.pdf',
    body: `<h2>EXPERIENCE</h2>
    <p><strong>Software Engineer</strong> — Freelance, 2023–Present<br>Design and build full-stack products for small teams and startups.</p>
    <p><strong>Backend Developer</strong> — Studio Petal, 2021–2023<br>Owned the API layer and core data models.</p>
    <h3>Education</h3>
    <p>B.S. Computer Science</p>
    <a class="btn" href="#" onclick="return false;">DOWNLOAD PDF →</a>`,
  },
  {
    id: 'proj-contact',
    icon: 'mail',
    label: 'Contact',
    title: 'LET US CONNECT',
    body: `<p>Have an opportunity, collaboration, or project in mind?.</p>
           <p>I'd love to hear from you. Whether you're a recruiter, fellow developer, or someone with an interesting idea, feel free to reach out.</p>`,
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
  </ul>
  <p>Thanks for digging around. You clearly have good taste in easter eggs. 🍑</p>`,
};

export default projects;
