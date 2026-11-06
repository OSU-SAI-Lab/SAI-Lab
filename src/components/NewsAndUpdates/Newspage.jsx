import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import EmptyState from "../EmptyState";
import PageHero from "../PageHero";
import "./Newspage.css";
import { newsItems } from "./newsData";
import eventsJson from "../../assets/json/upcoming.json";

const FILTERS = ["All", "News", "Award", "Outreach"];

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function todayStamp() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
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

function EventCard({ event }) {
  return (
    <article className="card upcoming-event-card">
      <div className="card-body upcoming-event-card-body">
        {event.tags?.length > 0 && (
          <div className="card-tags upcoming-event-tags">
            {event.tags.map((tag) => (
              <span
                key={`${event.title}-${tag}`}
                className={`card-tag upcoming-event-tag tag-${tag.toLowerCase()}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3 className="card-title">
          {event.link ? (
            <a href={event.link} target="_blank" rel="noopener noreferrer">
              {event.title}
            </a>
          ) : (
            event.title
          )}
        </h3>

        {/* Date and location come after the title so the event name is read first. */}
        <div className="upcoming-event-meta">
          <span className="upcoming-event-sl">#{event.slNo}</span>
          <time className="upcoming-event-date" dateTime={event.sortDate}>
            {event.date}
          </time>
          {event.location && (
            <span className="upcoming-event-location">
              <span aria-hidden="true">📍</span> {event.location}
            </span>
          )}
        </div>

        {event.description && <p className="card-description">{event.description}</p>}

        {(event.link || event.flyer) && (
          <div className="card-footer upcoming-event-card-footer">
            {event.link && (
              <a
                href={event.link}
                className="card-cta-link upcoming-event-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Event
              </a>
            )}
            {event.flyer && (
              <a
                href={event.flyer}
                className="card-cta-link upcoming-event-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 Flyer
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

function NewsCard({ item }) {
  const localArticle = hasLocalArticle(item);
  const externalLink = item.link && !item.recording ? item.link : null;
  const articleUrl = localArticle ? `/news-and-updates/${item.id}` : null;

  // The title is the primary link; a stretched ::after makes the whole card
  // clickable while keeping a real, keyboard-focusable anchor (no div onClick).
  let title = item.title;
  if (articleUrl) {
    title = (
      <Link to={articleUrl} className="news-card-link">
        {item.title}
      </Link>
    );
  } else if (externalLink) {
    title = (
      <a
        href={externalLink}
        className="news-card-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {item.title}
      </a>
    );
  }

  return (
    <article className="card news-card">
      <div className="card-body">
        <div className="news-card-meta">
          <TagBadge tag={item.tag} />
          <time className="news-card-date" dateTime={item.date}>
            {formatDate(item.date)}
          </time>
        </div>

        <h3 className="card-title news-card-title">{title}</h3>
        <p className="card-description">{item.description}</p>

        {(articleUrl || externalLink || (item.recording && item.link)) && (
          <div className="card-footer news-card-footer">
            {(articleUrl || externalLink) && (
              <span className="card-cta-link news-read-more" aria-hidden="true">
                Read more →
              </span>
            )}
            {item.recording && item.link && (
              <a
                className="card-cta-link news-recording"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Recording available
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function NewsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredEvents = useMemo(() => {
    const today = todayStamp();
    return [...(eventsJson.events || [])]
      .filter((e) => e.sortDate && e.sortDate >= today)
      .sort((a, b) => a.sortDate.localeCompare(b.sortDate))
      .slice(0, 4)
      .map((event, index) => ({ ...event, slNo: index + 1 }));
  }, []);

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
      <PageHero title="News & Events">
        Latest research milestones, awards, outreach, and upcoming events from our lab at The Ohio State University.
      </PageHero>

      <div className="news-content news-content-wide">
        <section className="upcoming-events" id="upcoming-events">
          <div className="upcoming-events-header">
            <h2>
              <span className="upcoming-events-icon" aria-hidden="true">
                📅
              </span>
              Upcoming Events
            </h2>
          </div>

          {featuredEvents.length > 0 ? (
            <div className="upcoming-events-grid">
              {featuredEvents.map((event) => (
                <EventCard
                  key={`${event.sortDate}-${event.title}`}
                  event={event}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              compact
              title={null}
              message="No upcoming events scheduled at this time. Check back soon!"
            />
          )}
        </section>

        <div className="news-controls" id="news-feed">
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
              placeholder="Search news & events..."
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
          {filtered.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 &&
          (activeFilter !== "All" || searchQuery !== "" ? (
            <EmptyState
              onClear={() => {
                setActiveFilter("All");
                setSearchQuery("");
              }}
            />
          ) : (
            <EmptyState
              title="No news yet"
              message="News and events will appear here as they are announced."
            />
          ))}
      </div>
    </div>
  );
}
