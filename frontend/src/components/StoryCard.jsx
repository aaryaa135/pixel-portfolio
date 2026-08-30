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
        <p>CS Student (2027) • Full-Stack Engineer • Backend, AI/ML & Dev Tools</p>
        <p>
          <span className="story-card__prompt">$</span> cat core_expertise.txt
        </p>
        <p>FastAPI, Django, Express • PostgreSQL, MongoDB, Redis • PyTorch, YOLOv8, OpenCV</p>
        <p style={{marginTop: '4px'}}>Docker, GitHub Actions, Linux, Pytest • Power BI, DAX, Data Modeling</p>
        <p>
          <span className="story-card__prompt">$</span> cat highlights.log
        </p>
        <p>✦ AuthForge — Prod auth (JWT, RBAC, Redis, 41 tests)</p>
        <p style={{marginTop: '4px'}}>✦ CardioVision — 94.4% mAP@0.5, YOLOv8 + Grad-CAM</p>
        <p style={{marginTop: '4px'}}>✦ SIH 2024-26 — Participant → Organizer → Panelist</p>
        <p style={{marginTop: '4px'}}>✦ ACM Webmaster — Led web infra & team</p>
        <p>
          <span className="story-card__prompt">$</span> status
        </p>
        <p>Open to SWE/Backend/AI Internships • CGPA 8.07/10</p>
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
