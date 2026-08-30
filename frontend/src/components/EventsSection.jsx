import { useState, useRef } from 'react';
import EventCard from './EventCard';
import { EVENT_CATEGORIES, getEventsByCategory } from '../data/events';

// Renders the complete Events, Hackathons & Leadership section with categories
export default function EventsSection() {
  const [activeCategory, setActiveCategory] = useState(EVENT_CATEGORIES[0].id);
  const categoryRefs = useRef({});

  // Collect all images from all events for the carousel - COMMENTED OUT UNTIL IMAGES ARE ADDED
  // useEffect(() => {
  //   const allImages = [];
  //   EVENT_CATEGORIES.forEach((cat) => {
  //     const events = getEventsByCategory(cat.id);
  //     events.forEach((event) => {
  //       if (event.images && event.images.length > 0) {
  //         event.images.forEach((img) => {
  //           allImages.push({
  //             src: img.src,
  //             alt: img.alt || event.name,
  //             caption: img.caption || event.name,
  //             category: cat.label,
  //           });
  //         });
  //       }
  //       // Also include chapter highlight images
  //       if (event.chapterHighlights) {
  //         event.chapterHighlights.forEach((ch) => {
  //           if (ch.images) {
  //             ch.images.forEach((img) => {
  //               allImages.push({
  //                 src: img.src,
  //                 alt: img.alt || ch.name,
  //                 caption: img.caption || ch.name,
  //                 category: cat.label,
  //               });
  //             });
  //           }
  //         });
  //       }
  //     });
  //   });
  //   setCarouselImages(allImages);
  // }, []);

  // Fallback placeholder images if no real images yet - COMMENTED OUT UNTIL IMAGES ARE ADDED
  // const displayImages = carouselImages.length > 0
  //   ? carouselImages
  //   : [
  //       { src: '/events/placeholder-1.jpg', alt: 'Smart India Hackathon 2024', caption: 'SIH 2024 Grand Finale', category: 'HACKATHONS' },
  //       { src: '/events/placeholder-2.jpg', alt: 'ACM Student Chapter', caption: 'ACM Webmaster Role', category: 'LEADERSHIP' },
  //       { src: '/events/placeholder-3.jpg', alt: 'Microsoft Azure Academy', caption: 'Microsoft Gurugram', category: 'CONFERENCES' },
  //       { src: '/events/placeholder-4.jpg', alt: 'DevFest Chandigarh', caption: 'DevFest 2024', category: 'CONFERENCES' },
  //       { src: '/events/placeholder-5.jpg', alt: 'Technex IIT BHU', caption: 'Technex with ACM', category: 'LEADERSHIP' },
  //       { src: '/events/placeholder-6.jpg', alt: 'HackRx 2024', caption: 'HackRx Healthcare Track', category: 'HACKATHONS' },
  //     ];

  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId);
    const ref = categoryRefs.current[categoryId];
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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

      {/* Navigation Tabs */}
      <div className="events-nav" role="tablist" aria-label="Event categories">
        {EVENT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={activeCategory === cat.id}
            aria-controls={`panel-${cat.id}`}
            className={`events-nav-btn pixel-font${activeCategory === cat.id ? ' active' : ''}`}
            onClick={() => scrollToCategory(cat.id)}
            style={{ borderColor: cat.borderColor }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Image Carousel - Horizontal scrolling marquee - COMMENTED OUT UNTIL IMAGES ARE ADDED
      <div className="events-carousel" aria-label="Event photos carousel">
        <div className="events-carousel-track">
          {displayImages.map((img, idx) => (
            <div key={idx} className="events-carousel-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="events-carousel-caption">
                <span className="events-carousel-category pixel-font">{img.category}</span>
                <span className="events-carousel-title">{img.caption}</span>
              </div>
            </div>
          ))}
          Duplicate for seamless loop
          {displayImages.map((img, idx) => (
            <div key={`${idx}-dup`} className="events-carousel-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="events-carousel-caption">
                <span className="events-carousel-category pixel-font">{img.category}</span>
                <span className="events-carousel-title">{img.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      */}

      {/* Categories */}
      <div className="events-categories">
        {EVENT_CATEGORIES.map((category) => {
          const events = getEventsByCategory(category.id);
          const featuredEvents = events.filter((e) => e.featured);
          const regularEvents = events.filter((e) => !e.featured);

          if (events.length === 0) return null;

          return (
            <section
              key={category.id}
              id={`panel-${category.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${category.id}`}
              className="events-category"
              ref={(el) => { categoryRefs.current[category.id] = el; }}
            >
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