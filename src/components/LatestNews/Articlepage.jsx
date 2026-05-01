// src/components/ArticlePage/ArticlePage.jsx

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getArticleById } from "./eventsData";
import "./Articlepage.css";

export default function ArticlePage() {
  const { id } = useParams();
  const article = getArticleById(id);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!article) {
    return (
      <div className="article-not-found">
        <h2>Article not found</h2>
        <p>The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="article-back-link">
          ← Back to Home
        </Link>
      </div>
    );
  }

  // Separate images and PDFs
  const imageMedia = article.media?.filter((m) => m.type === "image") || [];
  const pdfMedia = article.media?.filter((m) => m.type === "pdf") || [];

  const hasImages = imageMedia.length > 0;
  const hasPdfs = pdfMedia.length > 0;
  const totalSlides = imageMedia.length;

  const goToSlide = (index) => {
    if (index < 0) setCurrentSlide(totalSlides - 1);
    else if (index >= totalSlides) setCurrentSlide(0);
    else setCurrentSlide(index);
  };

  return (
    <div className="article-page">
      {/* Back navigation */}
      <Link to="/" className="article-back-link">
        ← Back to Home
      </Link>

      {/* Header area */}
      <header className="article-header">
        {article.tags && (
          <div className="article-tags">
            {article.tags.map((tag, i) => (
              <span key={i} className="article-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1 className="article-title">{article.title}</h1>

        <div className="article-meta">
          {article.date && <span className="article-date">{article.date}</span>}
          {article.author && (
            <>
              <span className="article-meta-separator">·</span>
              <span className="article-author">{article.author}</span>
            </>
          )}
        </div>
      </header>

      {/* Image slideshow */}
      {hasImages && (
        <div className="article-slideshow">
          <div className="slideshow-viewport">
            <img
              src={imageMedia[currentSlide].src}
              alt={imageMedia[currentSlide].alt}
              className="slide-image"
            />
          </div>

          {imageMedia[currentSlide].caption && (
            <p className="slide-caption">
              {imageMedia[currentSlide].caption}
            </p>
          )}

          {totalSlides > 1 && (
            <div className="slideshow-controls">
              <button
                className="slideshow-btn"
                onClick={() => goToSlide(currentSlide - 1)}
                aria-label="Previous slide"
              >
                ‹
              </button>

              <div className="slideshow-dots">
                {imageMedia.map((_, i) => (
                  <button
                    key={i}
                    className={`slideshow-dot ${i === currentSlide ? "active" : ""}`}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className="slideshow-btn"
                onClick={() => goToSlide(currentSlide + 1)}
                aria-label="Next slide"
              >
                ›
              </button>
            </div>
          )}
        </div>
      )}

      {/* PDF download links — shown below images, above article body */}
      {hasPdfs && (
        <div className="article-pdfs">
          {pdfMedia.map((pdf, i) => (
            <a
              key={i}
              href={pdf.src}
              target="_blank"
              rel="noopener noreferrer"
              className="article-pdf-link"
            >
              📄 {pdf.caption || pdf.alt || "Download PDF"}
            </a>
          ))}
        </div>
      )}

      {/* Article body */}
      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

      {/* Lab members involved */}
      {article.members && article.members.length > 0 && (
        <div className="article-members">
          <h3 className="article-members-heading">Lab Members Involved</h3>
          <div className="article-members-list">
            {article.members.map((m, i) => (
              <a
                key={i}
                href={m.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="article-member-chip"
              >
                {m.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}