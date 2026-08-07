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
    <p>I'm a Computer Science student and software engineer with a strong interest in backend engineering, AI, and building systems that scale.</p>
    <p>I enjoy turning ideas into production-ready software—from secure authentication platforms and intelligent computer vision models to reliable APIs and automation tools.</p>
    <p>My approach is simple: write maintainable code, design clean architectures, and build software that's meant to last.</p>
    <h3>Engineering Kernel</h3>
    <div class="tag">Systems over scripts.</div><div class="tag">Architecture over shortcuts.</div><div class="tag">Reliability over complexity.</div><div class="tag">Ship with confidence.</div>
    <h3>Currently</h3>
    <p>Building secure backend systems, AI-powered applications, and developer tools while exploring distributed systems and modern cloud infrastructure.</p>
    <p>Open to Software Engineering, Backend, and AI internship opportunities.</p>
    <h3>Off the clock</h3>
    <p>Probably listening to <a href="https://open.spotify.com/playlist/7ovDJn7e2YgVpYSedBgNZR?si=0ca71e6a925f4f90&pt=ce7591d704b9416ce030fc7b906823ff" target="_blank" rel="noopener noreferrer">this playlist</a> while debugging something. 🎧</p>`,
  },
  {
    id: 'proj-stack',
    icon: 'stack',
    label: 'Stack',
    title: 'Tech Stack',
    body: `<h2>TECHNICAL TOOLKIT</h2>
    <h3>Languages</h3>
    <div class="tag">Python</div><div class="tag">C++</div><div class="tag">C</div><div class="tag">JavaScript</div><div class="tag">SQL</div>
    <h3>Backend</h3>
    <div class="tag">FastAPI</div><div class="tag">Django</div><div class="tag">Express.js</div><div class="tag">REST APIs</div><div class="tag">SQLAlchemy</div><div class="tag">Pydantic</div><div class="tag">JWT</div><div class="tag">OAuth2</div><div class="tag">RBAC</div>
    <h3>Frontend</h3>
    <div class="tag">React</div><div class="tag">Next.js</div><div class="tag">Tailwind CSS</div><div class="tag">HTML5</div><div class="tag">CSS3</div>
    <h3>Databases</h3>
    <div class="tag">PostgreSQL</div><div class="tag">MongoDB</div><div class="tag">MySQL</div><div class="tag">Redis</div>
    <h3>AI / ML</h3>
    <div class="tag">PyTorch</div><div class="tag">TensorFlow</div><div class="tag">YOLOv8</div><div class="tag">OpenCV</div><div class="tag">Scikit-learn</div><div class="tag">XGBoost</div><div class="tag">NumPy</div><div class="tag">Pandas</div>
    <h3>DevOps</h3>
    <div class="tag">Docker</div><div class="tag">Git</div><div class="tag">GitHub Actions</div><div class="tag">Linux</div><div class="tag">Postman</div><div class="tag">Pytest</div>,
    <h3>Cloud</h3>
    <div class="tag">AWS</div>`,
  },
  {
    id: 'proj-projects',
    icon: 'code',
    label: 'Projects',
    title: 'Projects',
    body: `<h2>PROJECTS</h2>
    <div style="border:2px solid #4a2e4a;padding:14px;margin-bottom:14px;background:#f4fbf8;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">AUTHFORGE</p>
    <p style="margin:0 0 8px;">Production-ready auth platform — JWT, RBAC, refresh token rotation, Redis token blacklisting, email verification, rate limiting, and audit logging.</p>
    <div class="tag">FastAPI</div><div class="tag">Redis</div><div class="tag">Docker</div><div class="tag">Pytest</div>
    <a class="btn" style="margin-right:8px;" href="https://your-live-demo-url.com" target="_blank" rel="noopener noreferrer">LIVE DEMO →</a>
    <a class="btn" href="https://github.com/aaryaa135/authforge" target="_blank" rel="noopener noreferrer">GITHUB →</a>
    </div>
    <div style="border:2px solid #4a2e4a;padding:14px;margin-bottom:14px;background:#fbf6ee;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">CARDIOVISION</p>
    <p style="margin:0 0 8px;">YOLOv8 pipeline for coronary artery stenosis detection — 94.4% mAP@0.5, 0.91 F1-score, with Grad-CAM visualizations for clinical interpretability.</p>
    <div class="tag">PyTorch</div><div class="tag">YOLOv8</div><div class="tag">OpenCV</div>
    <a class="btn" style="margin-right:8px;" href="https://your-colab-or-demo-link.com" target="_blank" rel="noopener noreferrer">DEMO →</a>
    <a class="btn" href="https://github.com/aaryaa135/cardiovision" target="_blank" rel="noopener noreferrer">GITHUB →</a>
    </div>
    <div style="border:2px solid #4a2e4a;padding:14px;background:#f4fbf8;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">RETAIL INVENTORY MANAGEMENT</p>
    <p style="margin:0 0 8px;">REST API for inventory, orders, and stock management — atomic order processing and low-stock alerts, built with TDD (41 tests, 100% pass rate).</p>
    <div class="tag">FastAPI</div><div class="tag">PostgreSQL</div><div class="tag">TDD</div>
    <a class="btn" style="margin-right:8px;" href="https://your-live-demo-url.com" target="_blank" rel="noopener noreferrer">LIVE DEMO →</a>
    <a class="btn" href="https://github.com/aaryaa135/retail-inventory" target="_blank" rel="noopener noreferrer">GITHUB →</a>
    </div>`,
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
    <p><strong>Project Intern - IIT Delhi</strong>: Jun 2025 — Jul 2025<br>Automated Cisco DNA Center REST workflows, developed Linux automation pipelines, and streamlined Git-based deployment workflows.</p>
    <p><strong>Web Master - ACM JUIT</strong>: Aug 2025 — May 2026<br>Leading development of the ACM chapter website while improving collaboration workflows and user experience through analytics-driven iterations.</p>
    <h3>Education</h3>
    <p>Jaypee University of Information Technology</p>
    <p>B.Tech Computer Science</p>
    <p>CGPA : 8.07 / 10</p>
    <a class="btn" href="https://drive.google.com/file/d/1_mq_HHIdj9bu_1M_4qq7DHG6BRTXOi1T/view" target="_blank" rel="noopener noreferrer"">OPEN RESUME →</a>`,
  },
  {
    id: 'proj-contact',
    icon: 'mail',
    label: 'Contact',
    title: 'LET US CONNECT',
    body: `<p>Whether it's an internship, collaboration, open-source project, or just an interesting engineering problem—</p>
           <p>I'd love to connect.</p>`,
  },
];

export const REJECTED = {
  id: 'rejected',
  icon: 'trash',
  title: 'Rejected Concepts.txt',
  body: `<h2>🗑️ REJECTED CONCEPTS</h2>
  <p>You found the trash can. Here's what didn't make the cut:</p>
  <ul>
    <li>npm install hope</li>
    <li>Added 17 features. <br>Fixed 1 bug. <br>Created 19 new ones.</li>
    <li>TODO: <br>Fix the TODOs.</li>
    <li>"Temporary solution" <br>— committed 8 months ago</li>
    <li>It worked in production... <br>once.</li>
    <li>Dark mode that's just... more pink</li>
  </ul>
  <p>Thanks for digging around. You clearly have good taste in easter eggs. 🍑</p>`,
};

export default projects;
