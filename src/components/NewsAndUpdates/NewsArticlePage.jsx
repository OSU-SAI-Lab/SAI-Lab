import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getNewsArticleById } from "./newsData";
import "../LatestNews/Articlepage.css";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NewsArticlePage() {
  const { id } = useParams();
  const article = getNewsArticleById(id);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!article || !article.body) {
    return (
      <div className="article-not-found">
        <h2>Article not found</h2>
        <p>The article you're looking for doesn't exist or has been moved.</p>
        <Link to="/news-and-updates" className="article-back-link">
          ← Back to News &amp; Events
        </Link>
      </div>
    );
  }

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
      <Link to="/news-and-updates" className="article-back-link">
        ← Back to News &amp; Events
      </Link>

      <header className="article-header">
        {article.tag && (
          <div className="article-tags">
            <span className="article-tag">{article.tag}</span>
          </div>
        )}

        <h1 className="article-title">{article.title}</h1>

        <div className="article-meta">
          {article.date && (
            <span className="article-date">{formatDate(article.date)}</span>
          )}
          {article.author && (
            <>
              <span className="article-meta-separator">·</span>
              <span className="article-author">{article.author}</span>
            </>
          )}
        </div>
      </header>

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
            <p className="slide-caption">{imageMedia[currentSlide].caption}</p>
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

      <div
        className="article-body"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

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
