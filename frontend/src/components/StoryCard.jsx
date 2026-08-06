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
        <p>a CS student who ships backend systems, breaks them, then fixes them faster the second time.</p>
        <p>
          <span className="story-card__prompt">$</span> cat skills.txt
        </p>
        <p>auth systems · REST APIs · a little too much YOLOv8 · always mid-refactor</p>
        <p>
          <span className="story-card__prompt">$</span> status
        </p>
        <p>open to opportunities. probably debugging something right now. 🐛</p>
      </div>
    </div>
  );
}
