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
    <p>Open to Software Engineering, Backend, and AI internship opportunities.</p>`,
  },
  {
    id: 'proj-stack',
    icon: 'stack',
    label: 'Stack',
    title: 'Tech Stack',
    body: `<h2>TECHNICAL TOOLKIT</h2>
    <p>Languages : Python, C++, JavaScript, SQL, C </p>
    <p>Backend : FastAPI, Django, Express.js, REST APIs, SQLAlchemy, Pydantic, JWT, OAuth2, RBAC </p>
    <p>Frontend : React, Next.js, Tailwind CSS, HTML5, CSS3 </p>
    <p>Databases : PostgreSQL,MongoDB, MySQL,Redis </p>
    <p>AI / ML : PyTorch, TensorFlow, YOLOv8, OpenCV, Scikit-learn, XGBoost, NumPy, Pandas </p>
    <p>DevOps : Docker, Git, GitHub Actions, Linux, Postman, Pytest </p>
    <p>Cloud : AWS </p>`,
  },
  {
    id: 'proj-projects',
    icon: 'code',
    label: 'Projects',
    title: 'Projects',
    body: `<h2>PROJECTS</h2>
    <p><strong>AuthForge</strong><br>Production-ready authentication platform featuring JWT authentication, RBAC, refresh token rotation, Redis blacklisting, email verification, audit logging, and CI-powered testing.</p>
    <div class="tag">FastAPI</div><div class="tag">Redis</div><div class="tag">Docker</div><div class="tag">JWT</div><div class="tag">Github Actions</div>
    <a class="btn" href="#" onclick="return false;">VIEW ON GITHUB →</a>
    <p style="margin-top:18px;"><strong>CardioVision</strong><br>AI-powered coronary artery stenosis detection using YOLOv8 with Grad-CAM visualization for interpretable medical imaging.</p>
    <div class="tag">Pytorch</div><div class="tag">Yolov8</div><div class="tag">OpenCV</div><div class="tag">Computer Vision</div>
    <a class="btn" href="#" onclick="return false;">VIEW ON GITHUB →</a>
    <p style="margin-top:18px;"><strong>Retail Inventory API</strong><br>Production-grade inventory management backend supporting transactional order processing, stock restoration, and comprehensive automated testing.</p>
    <div class="tag">FastAPI</div><div class="tag">PostgreSQL</div><div class="tag">Pytest</div><div class="tag">Docker</div>
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
    <p><strong>Project Intern - IIT Delhi</strong>: Jun 2025 — Jul 2025<br>Automated Cisco DNA Center REST workflows, developed Linux automation pipelines, and streamlined Git-based deployment workflows.</p>
    <p><strong>Web Master - ACM JUIT</strong>: Aug 2025 — May 2026<br>Leading development of the ACM chapter website while improving collaboration workflows and user experience through analytics-driven iterations.</p>
    <h3>Education</h3>
    <p>Jaypee University of Information Technology</p>
    <p>B.Tech Computer Science</p>
    <p>CGPA : 8.07 / 10</p>
    <a class="btn" href="#" onclick="return false;">OPEN RESUME →</a>`,
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
