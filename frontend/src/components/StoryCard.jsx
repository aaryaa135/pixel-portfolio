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
          <span className="story-card__prompt">$</span> status
        </p>
        <p>Open to SWE/Backend/AI Internships • CGPA 8.07/10 • Shipping code, not excuses</p>
        <p>
          <span className="story-card__prompt">$</span> explore --help
        </p>
        <p>Click the desktop icons or dock to explore projects, stack, resume & more</p>
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
