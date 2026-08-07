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
        <p>Computer Science student and software engineer building scalable backend systems, AI-powered applications, and products that solve real problems.</p>
        <p>
          <span className="story-card__prompt">$</span> cat expertise.txt
        </p>
        <p>Backend Engineering • REST APIs • FastAPI • AI/ML • System Design</p>
        <p>
          <span className="story-card__prompt">$</span> status
        </p>
        <p>Open to Software Engineering opportunities. Currently shipping code, not excuses.</p>
      </div>
    </div>
  );
}
