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
    body: `<h2>HI, I'M AARYA GUPTA</h2>
    <p><strong>Computer Science Student (Class of 2027)</strong> • <strong>Jaypee University of Information Technology</strong> • CGPA: <strong>8.07/10</strong></p>
    <p>I'm a full-stack engineer who specializes in <strong>production-grade backend systems</strong>, <strong>AI/ML-powered applications</strong>, and <strong>developer tooling</strong>. I don't just write code — I ship reliable, tested, and maintainable systems that solve real problems.</p>

    <h3>WHAT I BUILD</h3>
    <p><strong>AuthForge</strong> — Production authentication platform with JWT, RBAC, refresh token rotation, Redis blacklisting, email verification, audit logging (<a href="https://github.com/aaryaa135/authforge" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://authforge-ovjf.onrender.com/" target="_blank" rel="noopener noreferrer">Live</a>)</p>
    <p><strong>CardioVision</strong> — AI coronary stenosis detection using YOLOv8 + Grad-CAM, 94.4% mAP@0.5, 0.91 F1 (<a href="https://github.com/aaryaa135/cardiovision" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://cardio-vision-murex.vercel.app/" target="_blank" rel="noopener noreferrer">Live</a>)</p>
    <p><strong>Retail Inventory API</strong> — Production REST API, transactional orders, stock management, 41 automated tests, TDD (<a href="https://github.com/aaryaa135/retail-inventory" target="_blank" rel="noopener noreferrer">GitHub</a>)</p>
    <p><strong>E-Commerce Analytics</strong> — Power BI dashboard with dynamic filters, drill-downs, data modeling (<a href="https://github.com/aaryaa135/ecommerce-sales-powerbi" target="_blank" rel="noopener noreferrer">GitHub</a>)</p>

    <h3>EXPERIENCE HIGHLIGHTS</h3>
    <p><strong>Full Stack AI Engineer — Algowire Technologies</strong> (Jun–Jul 2026)</p>
    <p>Developed 3+ React.js interfaces for production restaurant web app, integrated with Ruby on Rails REST APIs, debugged FE-BE integration issues, validated fixes via manual testing before deployment.</p>
    <p><strong>Project Intern — IIT Delhi</strong> (Jun–Jul 2025)</p>
    <p>Automated Cisco DNA Center REST API workflows, built Linux infrastructure automation pipelines, streamlined Git deployment workflows for operational efficiency.</p>
    <p><strong>Web Master — ACM JUIT</strong> (Aug 2025 – May 2026)</p>
    <p>Led chapter website redevelopment, established Git-based collaboration workflows, managed developer team, improved engagement via iterative UI/UX.</p>

    <h3>TECHNICAL CORE</h3>
    <div class="tag">Backend: FastAPI, Django, Express.js, REST APIs</div>
    <div class="tag">Auth: JWT, OAuth2, RBAC, Refresh Tokens</div>
    <div class="tag">Databases: PostgreSQL, MongoDB, Redis, MySQL</div>
    <div class="tag">AI/ML: PyTorch, YOLOv8, OpenCV, Scikit-learn</div>
    <div class="tag">DevOps: Docker, GitHub Actions, Linux, Pytest</div>
    <div class="tag">Data/BI: Power BI, DAX, Data Modeling, Visualization</div>
    <div class="tag">CS Fundamentals: DSA, OOP, DBMS, OS, Networks</div>

    <h3>LEADERSHIP & RECOGNITION</h3>
    <p>✦ <strong>Smart India Hackathon 2024–26:</strong> Participant (Grand Finale, Top 50) → Organizer → Panelist (3-year progression)</p>
    <p>✦ <strong>Flipkart GRiD 7.0:</strong> National Semi-Finalist among thousands</p>
    <p>✦ <strong>Tata Crucible 2025:</strong> Shortlisted for next round</p>
    <p>✦ <strong>ACM Student Chapter:</strong> Member → Web Dev Lead → Webmaster (Council)</p>
    <p>✦ <strong>Certifications:</strong> AWS ML, AWS Cloud Foundations, OCI AI Foundations</p>

    <h3>ENGINEERING PHILOSOPHY</h3>
    <div class="tag">Systems over scripts</div>
    <div class="tag">Architecture over shortcuts</div>
    <div class="tag">Reliability over complexity</div>
    <div class="tag">Test before deploy</div>
    <div class="tag">Ship with confidence</div>

    <h3>CURRENTLY SEEKING</h3>
    <p>Software Engineering / Backend / AI Internship opportunities where I can build impactful products, work on challenging problems, and learn from exceptional engineers.</p>

    <h3>OFF THE CLOCK</h3>
    <p>Probably debugging while <a href="https://open.spotify.com/playlist/6zqVg6wxGgk7fkASj44ao1?si=54ec13bfe6eb4280" target="_blank" rel="noopener noreferrer">this playlist</a> pretends to help 🎧</p>
    <p>Trained in <strong>Odissi classical dance</strong> — expressing stories through movement and rhythm.</p>
    <p>Enjoy <strong>crafting handmade gifts</strong> — personalized stationery, DIY decor — joy in making things for others.</p>`,
  },
  {
    id: 'proj-stack',
    icon: 'stack',
    label: 'Stack',
    title: 'Tech Stack',
    body: `<h2>TECHNICAL TOOLKIT</h2>
    <p style="color: var(--ink-soft); margin-bottom: 16px; font-style: italic;">Tools, frameworks, and concepts I use to build production-grade software</p>

    <h3>LANGUAGES</h3>
    <div class="tag">Python</div><div class="tag">C++</div><div class="tag">C</div><div class="tag">JavaScript</div><div class="tag">SQL</div>

    <h3>BACKEND & APIs</h3>
    <div class="tag">FastAPI</div><div class="tag">Django</div><div class="tag">Express.js</div>
    <div class="tag">RESTful APIs</div><div class="tag">GraphQL</div>
    <div class="tag">SQLAlchemy</div><div class="tag">Pydantic</div>
    <div class="tag">JWT / OAuth2 / RBAC</div>
    <div class="tag">Redis (caching, sessions, queues)</div>

    <h3>FRONTEND</h3>
    <div class="tag">React</div><div class="tag">Next.js</div>
    <div class="tag">Tailwind CSS</div><div class="tag">HTML5 / CSS3</div>
    <div class="tag">Vanilla JS (Canvas API, Web APIs)</div>

    <h3>DATABASES</h3>
    <div class="tag">PostgreSQL</div><div class="tag">MongoDB</div>
    <div class="tag">MySQL</div><div class="tag">Redis</div>

    <h3>AI / ML & COMPUTER VISION</h3>
    <div class="tag">PyTorch</div><div class="tag">YOLOv8</div>
    <div class="tag">OpenCV</div><div class="tag">Scikit-learn</div>
    <div class="tag">XGBoost</div><div class="tag">NumPy / Pandas</div>
    <div class="tag">Grad-CAM (interpretability)</div>

    <h3>DATA ANALYTICS & BI</h3>
    <div class="tag">Power BI</div><div class="tag">DAX</div>
    <div class="tag">Power Query</div><div class="tag">Data Modeling</div>
    <div class="tag">Data Visualization</div><div class="tag">Excel (Advanced)</div>

    <h3>DEVOPS, TESTING & TOOLING</h3>
    <div class="tag">Docker</div><div class="tag">Git / GitHub</div>
    <div class="tag">GitHub Actions (CI/CD)</div>
    <div class="tag">Linux (CLI, scripting, automation)</div>
    <div class="tag">Postman (API testing)</div>
    <div class="tag">Pytest (unit/integration, 41 tests in prod)</div>
    <div class="tag">TDD (Test-Driven Development)</div>

    <h3>CLOUD</h3>
    <div class="tag">AWS (EC2, S3, Lambda, RDS, SageMaker)</div>
    <div class="tag">Azure (learning via Azure Academy)</div>
    <div class="tag">Oracle Cloud (OCI AI Foundations)</div>

    <h3>COMPUTER SCIENCE FUNDAMENTALS</h3>
    <div class="tag">Data Structures & Algorithms</div>
    <div class="tag">Object-Oriented Programming</div>
    <div class="tag">DBMS (SQL, normalization, transactions)</div>
    <div class="tag">Operating Systems (Linux, processes, memory)</div>
    <div class="tag">Computer Networks (HTTP, TCP/IP, DNS)</div>

    <h3>PROFICIENCY INDICATOR</h3>
    <p style="font-size: 14px; color: #6a4a6a; margin-top: 8px;">
      <strong>★★★★★</strong> Python, FastAPI, React, PostgreSQL, Git, Docker, DSA<br>
      <strong>★★★★☆</strong> Django, Express, MongoDB, Redis, PyTorch, YOLOv8, Power BI, Linux, Pytest<br>
      <strong>★★★☆☆</strong> Next.js, Tailwind, C++, C, AWS, Azure, GraphQL, XGBoost
    </p>`,
  },
  {
    id: 'proj-projects',
    icon: 'code',
    label: 'Projects',
    title: 'Projects',
    body: `<h2>PROJECTS</h2>
    <p>A collection of products built to solve real-world problems—from secure backend systems to AI-powered applications.</p>

    <div style="border:2px solid #4a2e4a;padding:14px;margin-bottom:14px;background:#fbf6ee;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">E-COMMERCE ANALYTICS</p>
    <p>Interactive Sales Dashboard</p>
    <p style="margin:0 0 8px;">Interactive Power BI dashboard for analyzing e-commerce sales performance, product trends, regional patterns, and business insights — with dynamic filters, slicers, drill-downs, and data-driven visualizations.</p>
    <p>📊 Data Analytics & Business Intelligence</p>
    <div class="tag">Power BI</div><div class="tag">Data Analysis</div><div class="tag">Data Visualization</div><div class="tag">Data Modeling</div>
    <br>
    <a class="btn" href="https://github.com/aaryaa135/ecommerce-sales-powerbi" target="_blank" rel="noopener noreferrer">GITHUB →</a>
    </div>

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
    <p><strong>Full Stack AI Engineer - Algowire Technologies</strong>: Jun 2026 — Jul 2026<br>Developed 3+ responsive React.js interfaces for a production restaurant web application and integrated frontend views with existing Ruby on Rails REST APIs. Debugged and resolved frontend-backend integration issues across key user flows, performing manual testing to validate each fix before deployment.</p>
    <p><strong>Project Intern - IIT Delhi</strong>: Jun 2025 — Jul 2025<br>Automated Cisco DNA Center REST API workflows, built Linux-based infrastructure automation pipelines, and streamlined Git deployment workflows to improve operational efficiency.</p>
    <p><strong>Web Master - ACM JUIT</strong>: Aug 2025 — May 2026<br>Led the redevelopment of the ACM chapter website, established Git-based collaboration workflows, and improved user engagement through iterative UI/UX enhancements.</p>
    <h3>Education</h3>
    <p>Jaypee University of Information Technology</p>
    <p>B.Tech Computer Science</p>
    <p>CGPA : 8.07 / 10</p>
    <p>Expected Graduation: 2027</p>
    <h3>Hobbies & Interests</h3>
    <p>Trained in Odissi classical dance form — love expressing stories through movement and rhythm.</p>
    <p>Enjoy crafting handmade gifts — from personalized stationery to DIY decor — finding joy in the process of making things for others.</p>`,
  },
  {
    id: 'proj-certificates',
    icon: 'certificate',
    label: 'Certificates',
    title: 'Certifications',
    body: `<h2>CERTIFICATIONS</h2>
    <p>Professional certifications validating expertise across cloud, machine learning, and AI technologies.</p>

    <div style="border:2px solid #4a2e4a;padding:14px;margin-bottom:14px;background:#f4fbf8;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">AWS MACHINE LEARNING</p>
    <p>Amazon Web Services</p>
    <p style="margin:0 0 8px;">Foundational understanding of machine learning concepts, workflows, model development, and core ML principles through AWS Academy.</p>
    <div class="tag">AWS</div><div class="tag">Machine Learning</div>
    <br>
    <a class="btn" href="https://www.credly.com/badges/72768d36-e046-4ea2-94f6-c689b540d736/linked_in_profile" target="_blank" rel="noopener noreferrer">VERIFY →</a>
    </div>

    <div style="border:2px solid #4a2e4a;padding:14px;margin-bottom:14px;background:#fbf6ee;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">OCI AI FOUNDATIONS</p>
    <p>Oracle</p>
    <p style="margin:0 0 8px;">Foundational understanding of AI concepts, Oracle Cloud Infrastructure, AI services, machine learning, and generative AI fundamentals.</p>
    <div class="tag">OCI</div><div class="tag">AI</div><div class="tag">Cloud</div>
    <br>
    <a class="btn" href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=4D057139F3215ABE633F1912D8FE8FEA83F27776DE66247FCD7521E99338855D" target="_blank" rel="noopener noreferrer">VERIFY →</a>
    </div>

    <div style="border:2px solid #4a2e4a;padding:14px;background:#f4fbf8;">
    <p style="font-family:'Press Start 2P',monospace;font-size:11px;margin:0 0 8px;">AWS CLOUD FOUNDATIONS</p>
    <p>Amazon Web Services</p>
    <p style="margin:0 0 8px;">Foundational understanding of cloud computing concepts, AWS services, cloud architecture, security, pricing, and support.</p>
    <div class="tag">AWS</div><div class="tag">Cloud</div>
    <br>
    <a class="btn" href="https://www.credly.com/badges/353d602d-1406-4e9c-bbc7-552dd05a91f9/linked_in_profile" target="_blank" rel="noopener noreferrer">VERIFY →</a>
    </div>`,
  },
  {
    id: 'proj-events',
    icon: 'calendar',
    label: 'Events',
    title: 'EVENTS, HACKATHONS & LEADERSHIP',
    body: '', // Content rendered by EventsSection component
  },
  {
    id: 'proj-contact',
    icon: 'mail',
    label: 'Contact',
    title: 'LET US CONNECT',
    body: `<p>Whether it's an internship, collaboration, open-source project, or just an interesting engineering problem—</p>
           <p>I'd love to connect.</p>`,
  },
  {
    id: 'proj-guide',
    icon: 'trash',
    label: 'Guide',
    title: 'HOW TO USE THIS PORTFOLIO',
    body: `<h2>WELCOME TO AARYA-OS v1.0</h2>
    <p>This portfolio works like a desktop OS. Here's how to navigate:</p>
    
    <h3>DESKTOP ICONS & DOCK</h3>
    <p>Click any icon to open a window. The dock at the bottom has quick access to all sections.</p>
    
    <h3>WINDOW CONTROLS</h3>
    <div style="display:flex;gap:10px;margin:10px 0;align-items:center;">
      <span style="width:12px;height:12px;background:#ff9d9d;border:2px solid #4a2e4a;display:inline-block;">&nbsp;</span> <span class="tag">Close window</span>
      <span style="width:12px;height:12px;background:#ffe08a;border:2px solid #4a2e4a;display:inline-block;">&nbsp;</span> <span class="tag">Minimize to dock</span>
      <span style="width:12px;height:12px;background:#a6e3a1;border:2px solid #4a2e4a;display:inline-block;">&nbsp;</span> <span class="tag">Maximize/Restore</span>
    </div>
    <p>Drag the title bar to move windows. Drag the bottom-right corner to resize.</p>
    
    <h3>MENU BAR</h3>
    <p>Top bar has <strong>File</strong> (GitHub, Close all), <strong>Projects</strong>, and <strong>About</strong> dropdowns.</p>
    
    <h3>TRASH CAN</h3>
    <p>Click for rejected concepts easter egg.</p>
    
    <h3>MOBILE / TABLET</h3>
    <p>Windows go full-screen. Use the Back button to close. Icons become a grid.</p>
    
    <h3>MINI GAME</h3>
    <p>Open "Mini Game" for Crumb Quest — catch falling crumbs with arrow keys or touch buttons.</p>
    
    <h3>RESUME</h3>
    <p>Click "Resume" -> "DOWNLOAD RESUME" to get the PDF.</p>
    
    <p style="margin-top:16px;"><strong>Pro tip:</strong> Try the Konami code (up up down down left right left right B A) for a surprise!</p>`,
  },
];

export const REJECTED = {
  id: 'rejected',
  icon: 'trash',
  title: 'Rejected Concepts.txt',
  body: `<h2>REJECTED CONCEPTS</h2>
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
