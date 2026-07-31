import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Newspage.css";
import { newsItems } from "./newsData";

const FILTERS = ["All", "News", "Award", "Outreach"];

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function TagBadge({ tag }) {
  return (
    <span className={`tag-badge ${tag.toLowerCase()}`}>
      <span className="tag-badge-dot" />
      {tag}
    </span>
  );
}

function hasLocalArticle(item) {
  return !item.link && Boolean(item.body);
}

function NewsCard({ item, index }) {
  const navigate = useNavigate();
  const localArticle = hasLocalArticle(item);
  const externalOnly = Boolean(item.link) && !item.recording;
  const clickable = externalOnly || localArticle;

  const handleCardClick = () => {
    if (item.recording) return;
    if (item.link) {
      window.open(item.link, "_blank");
      return;
    }
    if (localArticle) {
      navigate(`/events/${item.id}`);
    }
  };

  return (
    <div
      className={`news-card${clickable ? " clickable" : ""}`}
      style={{ animationDelay: `${index * 0.06}s` }}
      onClick={handleCardClick}
    >
      <div className="news-card-header">
        <TagBadge tag={item.tag} />
        <span className="news-card-date">{formatDate(item.date)}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="news-card-footer">
        {externalOnly && <span className="news-read-more">Read more →</span>}
        {localArticle && (
          <Link
            to={`/events/${item.id}`}
            className="news-read-more"
            onClick={(e) => e.stopPropagation()}
          >
            Read more →
          </Link>
        )}
        {item.recording && item.link && (
          <a
            className="news-recording"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            ▶ Recording available
          </a>
        )}
      </div>
    </div>
  );
}

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = newsItems
    .filter((item) => activeFilter === "All" || item.tag === activeFilter)
    .filter(
      (item) =>
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const counts = {
    All: newsItems.length,
    News: newsItems.filter((n) => n.tag === "News").length,
    Award: newsItems.filter((n) => n.tag === "Award").length,
    Outreach: newsItems.filter((n) => n.tag === "Outreach").length,
  };

  return (
    <div className="news-app">
      <div className="news-hero">
        <h1>Events</h1>
        <p>
          Latest research milestones, awards, and community outreach from our
          lab at The Ohio State University.
        </p>
      </div>

      <div className="news-content">
        <div className="news-controls">
          <div className="filter-pills">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-pill${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
                <span className="filter-pill-count">{counts[f]}</span>
              </button>
            ))}
          </div>

          <div className="news-search-wrapper">
            <input
              type="text"
              className="news-search-input"
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="news-search-icon">⌕</span>
          </div>
        </div>

        <div className="news-results-count">
          Showing {filtered.length} of {newsItems.length} entries
        </div>

        <div className="news-card-list">
          {filtered.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="news-no-results">
            No results found. Try adjusting your filters or search query.
          </div>
        )}
      </div>
    </div>
  );
}
