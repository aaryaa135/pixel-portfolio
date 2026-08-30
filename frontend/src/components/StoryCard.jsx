// A small "terminal window" telling a short, personality-forward story
// about skills — sits between the hero area and the icon grid on every
// breakpoint. Edit the lines inside <p> tags to change the story.
export default function StoryCard() {
  return (
    <div className="story-card">
      <div className="story-card__bar">
        <span className="story-card__dot story-card__dot--red" />
        <span className="story-card__dot story-card__dot--yellow" />
        <span className="story-card__dot story-card__dot--green" />
        <span className="story-card__title">whoami.sh</span>
      </div>
      <div className="story-card__body">
        <p>
          <span className="story-card__prompt">$</span> whoami
        </p>
        <p>Computer Science student (2027) • Full-Stack Engineer • Building production-grade backends, AI systems & developer tools</p>
        <p>
          <span className="story-card__prompt">$</span> cat core_expertise.txt
        </p>
        <p>Backend: FastAPI, Django, Express.js • APIs: REST, JWT, OAuth2, RBAC • DB: PostgreSQL, MongoDB, Redis</p>
        <p style={{marginTop: '4px'}}>AI/ML: PyTorch, YOLOv8, OpenCV, Scikit-learn • DevOps: Docker, GitHub Actions, Linux, Pytest</p>
        <p>
          <span className="story-card__prompt">$</span> cat highlights.log
        </p>
        <p>✦ AuthForge — Production auth platform (JWT, RBAC, Redis, Docker, 41 tests)</p>
        <p style={{marginTop: '4px'}}>✦ CardioVision — AI medical imaging, 94.4% mAP@0.5, YOLOv8 + Grad-CAM</p>
        <p style={{marginTop: '4px'}}>✦ SIH 2024-26 — Participant → Organizer → Panelist (3-year progression)</p>
        <p style={{marginTop: '4px'}}>✦ ACM Webmaster — Led chapter web infra, Git workflows, team of developers</p>
        <p>
          <span className="story-card__prompt">$</span> status
        </p>
        <p>Open to SWE / Backend / AI Internships • Shipping code, not excuses • CGPA 8.07/10</p>
        <p>
          <span className="story-card__prompt">$</span> now playing —{' '}
          <a
            href="https://open.spotify.com/playlist/6zqVg6wxGgk7fkASj44ao1?si=54ec13bfe6eb4280"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--accent)', textDecoration: 'underline' }}
          >
            playlist 🎧
          </a>{' '}
          on loop
        </p>
      </div>
    </div>
  );
}
