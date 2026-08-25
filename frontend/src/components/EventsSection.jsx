import EventCard from './EventCard';
import { EVENT_CATEGORIES, getEventsByCategory } from '../data/events';

// Renders the complete Events, Hackathons & Leadership section with categories
export default function EventsSection() {
  return (
    <div className="events-section">
      {/* Section Header */}
      <div className="events-section-header">
        <h2 className="events-section-title pixel-font">
          EVENTS, HACKATHONS & LEADERSHIP
        </h2>
        <p className="events-section-subtitle">
          Hackathons, technical events, communities, and experiences where I participated, built, organized, and contributed.
        </p>
      </div>

      {/* Categories */}
      <div className="events-categories">
        {EVENT_CATEGORIES.map((category) => {
          const events = getEventsByCategory(category.id);
          const featuredEvents = events.filter((e) => e.featured);
          const regularEvents = events.filter((e) => !e.featured);

          if (events.length === 0) return null;

          return (
            <section key={category.id} className="events-category">
              {/* Category Header */}
              <div
                className="events-category-header"
                style={{ borderLeftColor: category.borderColor }}
              >
                <h3 className="events-category-label pixel-font">
                  {category.label}
                </h3>
                <p className="events-category-description">{category.description}</p>
              </div>

              {/* Featured Events (prominent) */}
              {featuredEvents.length > 0 && (
                <div className="events-featured-grid">
                  {featuredEvents.map((event) => (
                    <EventCard key={event.id} event={event} categoryConfig={category} />
                  ))}
                </div>
              )}

              {/* Regular Events */}
              {regularEvents.length > 0 && (
                <div className="events-regular-grid">
                  {regularEvents.map((event) => (
                    <EventCard key={event.id} event={event} categoryConfig={category} />
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}