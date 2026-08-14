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
    <p>I'm a Computer Science student passionate about backend engineering, AI, and building software that scales.</p>
    <p>I enjoy transforming ideas into production-ready applications—from secure authentication platforms and intelligent computer vision systems to reliable APIs and developer tools.</p>
    <p>I value clean architecture, maintainable code, and systems designed for reliability, scalability, and long-term impact.</p>
    <h3>Engineering Kernel</h3>
    <div class="tag">Systems over scripts.</div><div class="tag">Architecture over shortcuts.</div><div class="tag">Reliability over complexity.</div><div class="tag">Ship with confidence.</div>
    <h3>Currently</h3>
    <p>Building secure backend systems, AI-powered applications, and developer tools while exploring distributed systems, cloud infrastructure, and software architecture.</p>
    <p>Open to Software Engineering, Backend, and AI internship opportunities where I can build impactful products and continue learning from great engineers.</p>
    <h3>Off the clock</h3>
    <p>Probably fixing a bug while <a href="https://open.spotify.com/playlist/7ovDJn7e2YgVpYSedBgNZR?si=0ca71e6a925f4f90&pt=ce7591d704b9416ce030fc7b906823ff" target="_blank" rel="noopener noreferrer">this playlist</a> pretends to help.🎧</p>`,
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
    <div class="tag">FastAPI</div><div class="tag">Django</div><div class="tag">Express.js</div><div class="tag">RESTful APIs</div><div class="tag">SQLAlchemy</div><div class="tag">Pydantic</div><div class="tag">JWT</div><div class="tag">OAuth2</div><div class="tag">RBAC</div>
    <h3>Frontend</h3>
    <div class="tag">React</div><div class="tag">Next.js</div><div class="tag">Tailwind CSS</div><div class="tag">HTML5</div><div class="tag">CSS3</div>
    <h3>Databases</h3>
    <div class="tag">PostgreSQL</div><div class="tag">MongoDB</div><div class="tag">MySQL</div><div class="tag">Redis</div>
    <h3>AI / ML</h3>
    <div class="tag">PyTorch</div><div class="tag">YOLOv8</div><div class="tag">OpenCV</div><div class="tag">Scikit-learn</div><div class="tag">XGBoost</div><div class="tag">NumPy</div><div class="tag">Pandas</div>
    <h3>DevOps & Testing</h3>
    <div class="tag">Docker</div><div class="tag">Git</div><div class="tag">GitHub Actions</div><div class="tag">Linux</div><div class="tag">Postman</div><div class="tag">Pytest</div>,
    <h3>Cloud</h3>
    <div class="tag">AWS</div>
    <h3>Computer Science</h3>
    <div class="tag">Data Structures and Algorithms</div><div class="tag">OOP</div><div class="tag">DBMS</div><div class="tag">Operating Systems</div><div class="tag">Computer Networks</div>`,
  },
  {
    id: 'proj-projects',
    icon: 'code',
    label: 'Projects',
    title: 'Projects',
    body: `<h2>PROJECTS</h2>
    <p>A collection of products built to solve real-world problems—from secure backend systems to AI-powered applications.</p>

    <div style="border:2px solid #4a2e4a;padding:14px;margin-bottom:14px;background:#f4fbf8;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">AUTHFORGE</p>
    <p>Secure Authentication Platform</p>
    <p style="margin:0 0 8px;">Production-grade authentication platform with JWT, RBAC, refresh token rotation, Redis token blacklisting, email verification, and audit logging—built for secure, scalable applications.</p>
    <p>🟢 Production Ready</p>
    <div class="tag">FastAPI</div><div class="tag">Redis</div><div class="tag">Docker</div><div class="tag">Pytest</div>
    <br>
    <a class="btn" style="margin-right:8px;" href="https://authforge-ovjf.onrender.com/" target="_blank" rel="noopener noreferrer">LIVE →</a>
    <a class="btn" href="https://github.com/aaryaa135/authforge" target="_blank" rel="noopener noreferrer">GITHUB →</a>
    </div>

    <div style="border:2px solid #4a2e4a;padding:14px;margin-bottom:14px;background:#fbf6ee;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">CARDIOVISION</p>
    <p>AI Medical Imaging</p>
    <p style="margin:0 0 8px;">AI-powered coronary artery stenosis detection using YOLOv8 and Grad-CAM to improve clinical interpretability, achieving 94.4% mAP@0.5 and a 0.91 F1-score.</p>
    <p>🟣 Research Project</p>
    <div class="tag">PyTorch</div><div class="tag">YOLOv8</div><div class="tag">OpenCV</div>
    <br>
    <a class="btn" style="margin-right:8px;" href="https://cardio-vision-murex.vercel.app/" target="_blank" rel="noopener noreferrer">LIVE  →</a>
    <a class="btn" href="https://github.com/aaryaa135/cardiovision" target="_blank" rel="noopener noreferrer">GITHUB →</a>
    </div>
    
    <div style="border:2px solid #4a2e4a;padding:14px;background:#f4fbf8;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">RETAIL INVENTORY MANAGEMENT</p>
    <p>Production REST API</p>
    <p style="margin:0 0 8px;">Production-ready inventory management API featuring transactional order processing, stock management, low-stock alerts, and a fully tested backend with 41 automated test cases.</p>
    <p>🟢 Production Ready</p>
    <div class="tag">FastAPI</div><div class="tag">PostgreSQL</div><div class="tag">TDD</div>
    <br>
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
    <a class="btn" href="/resume.pdf" download="Aarya_Gupta_Resume.pdf">DOWNLOAD RESUME →</a>
    <br>
    <p><strong>Project Intern - IIT Delhi</strong>: Jun 2025 — Jul 2025<br>Automated Cisco DNA Center REST API workflows, built Linux-based infrastructure automation pipelines, and streamlined Git deployment workflows to improve operational efficiency.</p>
    <p><strong>Web Master - ACM JUIT</strong>: Aug 2025 — May 2026<br>Led the redevelopment of the ACM chapter website, established Git-based collaboration workflows, and improved user engagement through iterative UI/UX enhancements.</p>
    <h3>Education</h3>
    <p>Jaypee University of Information Technology</p>
    <p>B.Tech Computer Science</p>
    <p>CGPA : 8.07 / 10</p>
    <p>Expected Graduation: 2027</p>`,
  },
  {
    id: 'proj-guide',
    icon: 'guide',
    label: 'Guide',
    title: 'HOW TO USE THIS PORTFOLIO',
    body: `<h2>WELCOME TO AARYA-OS v1.0</h2>
    <p>This portfolio works like a desktop OS. Here's how to navigate:</p>
    
    <h3>������� DESKTOP ICONS & DOCK</h3>
    <p>Click any icon to open a window. The dock at the bottom has quick access to all sections.</p>
    
    <h3>���� WINDOW CONTROLS</h3>
    <div style="display:flex;gap:10px;margin:10px 0;align-items:center;">
      <span style="width:12px;height:12px;background:#ff9d9d;border:2px solid #4a2e4a;display:inline-block;">&nbsp;</span> <span class="tag">Close window</span>
      <span style="width:12px;height:12px;background:#ffe08a;border:2px solid #4a2e4a;display:inline-block;">&nbsp;</span> <span class="tag">Minimize to dock</span>
      <span style="width:12px;height:12px;background:#a6e3a1;border:2px solid #4a2e4a;display:inline-block;">&nbsp;</span> <span class="tag">Maximize/Restore</span>
    </div>
    <p>Drag the title bar to move windows. Drag the bottom-right corner to resize.</p>
    
    <h3>���� MENU BAR</h3>
    <p>Top bar has <strong>File</strong> (GitHub, Close all), <strong>Projects</strong>, and <strong>About</strong> dropdowns.</p>
    
    <h3>������� TRASH CAN</h3>
    <p>Click for rejected concepts easter egg.</p>
    
    <h3>���� MOBILE / TABLET</h3>
    <p>Windows go full-screen. Use the ← Back button to close. Icons become a grid.</p>
    
    <h3>���� MINI GAME</h3>
    <p>Open "Mini Game" for Crumb Quest — catch falling crumbs with arrow keys or touch buttons.</p>
    
    <h3>���� RESUME</h3>
    <p>Click "Resume" → "DOWNLOAD RESUME" to get the PDF.</p>
    
    <p style="margin-top:16px;"><strong>Pro tip:</strong> Try the Konami code (������������←→←→BA) for a surprise! ���</p>`,
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
    <li>final_v2_final_FINAL.zip</li>
    <li>Dark mode that's just... more pink</li>
  </ul>
  <p>Thanks for digging around. You clearly have good taste in easter eggs.</p>`,
};

export default projects;
