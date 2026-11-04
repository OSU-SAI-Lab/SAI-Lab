import { useState } from "react";

export default function ArticleAwards({ media = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  if (media.length === 0) return null;

  const activeSlide = currentSlide % media.length;
  const photo = media[activeSlide];
  const goToSlide = (index) => {
    setCurrentSlide((index + media.length) % media.length);
  };

  return (
    <section className="article-awards" aria-labelledby="article-awards-heading">
      <h2 id="article-awards-heading">Team Awards</h2>
      <div className="article-slideshow">
        <div className="slideshow-viewport">
          <img className="slide-image" src={photo.src} alt={photo.alt} loading="lazy" />
        </div>
        {photo.caption && <p className="slide-caption">{photo.caption}</p>}
        {media.length > 1 && (
          <div className="slideshow-controls">
            <button
              type="button"
              className="slideshow-btn"
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label="Previous award photo"
            >
              ‹
            </button>
            <div className="slideshow-dots">
              {media.map((item, index) => (
                <button
                  type="button"
                  key={item.src}
                  className={`slideshow-dot ${index === activeSlide ? "active" : ""}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to award photo ${index + 1}`}
                  aria-current={index === activeSlide ? "true" : undefined}
                />
              ))}
            </div>
            <button
              type="button"
              className="slideshow-btn"
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label="Next award photo"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
