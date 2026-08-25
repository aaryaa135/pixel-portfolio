import { useState, useRef, useEffect } from 'react';
import PixelIcon from './PixelIcon';
import { getChapterHighlights } from '../data/events';
import ChapterHighlight from './ChapterHighlight';

// Reusable event card with optional image gallery, timeline, and featured styling
export default function EventCard({ event, categoryConfig }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const cardRef = useRef(null);

  const hasImages = event.images && event.images.length > 0;
  const hasTimeline = event.timeline && event.timeline.length > 0;
  const hasChapterHighlights = event.chapterHighlights && event.chapterHighlights.length > 0;
  const isFeatured = event.featured && categoryConfig?.prominent;

  const openLightbox = (index) => {
    if (hasImages) {
      setActiveImageIndex(index);
      setShowLightbox(true);
    }
  };

  const closeLightbox = () => setShowLightbox(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((i) => (i + 1) % event.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((i) => (i - 1 + event.images.length) % event.images.length);
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!showLightbox) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [showLightbox, event.images?.length]);

  const cardBorder = isFeatured ? '3px solid var(--ink)' : '2px solid var(--ink)';
  const cardShadow = isFeatured ? '6px 6px 0 var(--ink)' : '3px 3px 0 var(--ink)';
  const cardBg = categoryConfig?.color || 'var(--window-bg)';

  return (
    <div
      ref={cardRef}
      className={`event-card${isFeatured ? ' event-card--featured' : ''}`}
      style={{
        border: cardBorder,
        boxShadow: cardShadow,
        background: cardBg,
        position: 'relative',
      }}
    >
      {/* Featured badge */}
      {isFeatured && (
        <div className="event-card-featured-badge pixel-font">
          ⭐ FEATURED
        </div>
      )}

      {/* Main card content */}
      <div className="event-card-header">
        <div className="event-card-meta">
          <div className="event-card-name pixel-font">{event.name}</div>
          <div className="event-card-year-role">
            <span className="event-card-year">{event.year}</span>
            {event.role && <span className="event-card-role">— {event.role}</span>}
          </div>
        </div>
        {event.externalLink && (
          <a
            href={event.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="event-card-link pixel-font"
            onClick={(e) => e.stopPropagation()}
          >
            ↗
          </a>
        )}
      </div>

      <p className="event-card-description">{event.description}</p>

      {/* Tags */}
      {event.tags && event.tags.length > 0 && (
        <div className="event-card-tags">
          {event.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Image Gallery */}
      {hasImages && (
        <div className="event-card-gallery">
          <div className="event-card-main-image" onClick={() => openLightbox(0)}>
            <img
              src={event.images[activeImageIndex].src}
              alt={event.images[activeImageIndex].alt || event.name}
              loading="lazy"
            />
            {event.images.length > 1 && (
              <div className="event-card-gallery-nav">
                <button
                  type="button"
                  className="gallery-nav-btn pixel-font"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  ←
                </button>
                <span className="gallery-counter pixel-font">
                  {activeImageIndex + 1} / {event.images.length}
                </span>
                <button
                  type="button"
                  className="gallery-nav-btn pixel-font"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  →
                </button>
              </div>
            )}
            <div className="gallery-hint pixel-font">Click to expand</div>
          </div>

          {event.images.length > 1 && (
            <div className="event-card-thumbnails">
              {event.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`event-card-thumb${idx === activeImageIndex ? ' active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={img.caption || `Image ${idx + 1}`}
                >
                  <img src={img.src} alt={img.alt || `${event.name} ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}

          {event.images[activeImageIndex].caption && (
            <p className="event-card-caption pixel-font">
              {event.images[activeImageIndex].caption}
            </p>
          )}
        </div>
      )}

      {/* Timeline / Progression */}
      {hasTimeline && (
        <div className="event-card-timeline">
          <div className="timeline-header pixel-font">PROGRESSION</div>
          <div className="timeline-line" />
          {event.timeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-date pixel-font">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Chapter Highlights (e.g., Technex under ACM) */}
      {hasChapterHighlights && (
        <div className="event-card-chapter-highlights">
          <div className="chapter-highlights-header pixel-font">CHAPTER HIGHLIGHTS</div>
          {event.chapterHighlights.map((highlight, idx) => (
            <ChapterHighlight key={`${event.id}-${idx}`} highlight={highlight} />
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {showLightbox && hasImages && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button
            type="button"
            className="lightbox-close pixel-font"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            aria-label="Close lightbox"
          >
            ✕
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev pixel-font"
            onClick={(e) => { e.stopPropagation(); prevImage(e); }}
            aria-label="Previous image"
          >
            ←
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={event.images[activeImageIndex].src}
              alt={event.images[activeImageIndex].alt || event.name}
            />
            {event.images[activeImageIndex].caption && (
              <p className="lightbox-caption pixel-font">{event.images[activeImageIndex].caption}</p>
            )}
          </div>
          <button
            type="button"
            className="lightbox-nav lightbox-next pixel-font"
            onClick={(e) => { e.stopPropagation(); nextImage(e); }}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}