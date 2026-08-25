import { useState } from 'react';

// Small highlight card for chapter-related experiences (e.g., Technex under ACM)
export default function ChapterHighlight({ highlight }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const hasImages = highlight.images && highlight.images.length > 0;

  const openLightbox = (index) => {
    if (hasImages) {
      setActiveImageIndex(index);
      setShowLightbox(true);
    }
  };

  const closeLightbox = () => setShowLightbox(false);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((i) => (i + 1) % highlight.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((i) => (i - 1 + highlight.images.length) % highlight.images.length);
  };

  return (
    <div className="chapter-highlight">
      {/* Highlight Header */}
      <div className="chapter-highlight-header">
        <div className="chapter-highlight-meta">
          <div className="chapter-highlight-name pixel-font">{highlight.name}</div>
          <div className="chapter-highlight-years pixel-font">{highlight.years}</div>
        </div>
      </div>

      <p className="chapter-highlight-description">{highlight.description}</p>

      {/* Context */}
      {highlight.context && (
        <p className="chapter-highlight-context">{highlight.context}</p>
      )}

      {/* Tags */}
      {highlight.tags && highlight.tags.length > 0 && (
        <div className="chapter-highlight-tags">
          {highlight.tags.map((tag, i) => (
            <span key={i} className="tag">{tag}</span>
          ))}
        </div>
      )}

      {/* Image Gallery */}
      {hasImages && (
        <div className="chapter-highlight-gallery">
          <div className="chapter-highlight-main-image" onClick={() => openLightbox(0)}>
            <img
              src={highlight.images[activeImageIndex].src}
              alt={highlight.images[activeImageIndex].alt || highlight.name}
              loading="lazy"
            />
            {highlight.images.length > 1 && (
              <div className="chapter-highlight-gallery-nav">
                <button
                  type="button"
                  className="gallery-nav-btn pixel-font"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  ←
                </button>
                <span className="gallery-counter pixel-font">
                  {activeImageIndex + 1} / {highlight.images.length}
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

          {highlight.images.length > 1 && (
            <div className="chapter-highlight-thumbnails">
              {highlight.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`chapter-highlight-thumb${idx === activeImageIndex ? ' active' : ''}`}
                  onClick={() => setActiveImageIndex(idx)}
                  aria-label={img.caption || `Image ${idx + 1}`}
                >
                  <img src={img.src} alt={img.alt || `${highlight.name} ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}

          {highlight.images[activeImageIndex].caption && (
            <p className="chapter-highlight-caption pixel-font">
              {highlight.images[activeImageIndex].caption}
            </p>
          )}
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
              src={highlight.images[activeImageIndex].src}
              alt={highlight.images[activeImageIndex].alt || highlight.name}
            />
            {highlight.images[activeImageIndex].caption && (
              <p className="lightbox-caption pixel-font">{highlight.images[activeImageIndex].caption}</p>
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