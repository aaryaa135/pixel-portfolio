import { getFeaturedEvents, EVENT_CATEGORIES } from '../data/events';
import PixelIcon from './PixelIcon';

export default function EventsPreview({ onViewAll }) {
  const featuredEvents = getFeaturedEvents().slice(0, 3);

  if (featuredEvents.length === 0) return null;

  return (
    <div className="events-preview">
      <div className="events-preview__bar">
        <span className="events-preview__dot events-preview__dot--red" />
        <span className="events-preview__dot events-preview__dot--yellow" />
        <span className="events-preview__dot events-preview__dot--green" />
        <span className="events-preview__title pixel-font">events.log</span>
      </div>
      <div className="events-preview__body">
        {featuredEvents.map((event, idx) => {
          const category = EVENT_CATEGORIES.find(c => c.id === event.category);
          return (
            <article
              key={event.id}
              className="events-preview__card"
              style={{ borderLeftColor: category?.borderColor || 'var(--ink)' }}
            >
              <div className="events-preview__card-header">
                <div className="events-preview__card-meta">
                  <h4 className="events-preview__card-name pixel-font">{event.name}</h4>
                  <div className="events-preview__card-year-role">
                    <span className="events-preview__card-year">{event.year}</span>
                    {event.role && <span className="events-preview__card-role">— {event.role}</span>}
                  </div>
                </div>
                {event.featured && (
                  <span className="events-preview__badge pixel-font">⭐</span>
                )}
              </div>
              <p className="events-preview__card-desc">{event.description}</p>
              <div className="events-preview__card-tags">
                {event.tags?.slice(0, 3).map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          );
        })}
        <button
          type="button"
          className="events-preview__view-all btn"
          onClick={onViewAll}
        >
          VIEW ALL EVENTS →
        </button>
      </div>
    </div>
  );
}