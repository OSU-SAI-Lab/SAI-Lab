// src/components/EventsPage/LatestNews.jsx

import { Link } from "react-router-dom";
import { events } from "./eventsData";
import EmptyState from "../EmptyState";
import "./LatestNews.css";

// Number of entries shown in the homepage preview. The full list lives on
// the News & Events archive; the underlying data is never truncated.
const HOMEPAGE_NEWS_LIMIT = 3;

// Sort by sortDate (ISO), most recent first
const sortedEvents = [...events].sort(
  (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
);

const previewEvents = sortedEvents.slice(0, HOMEPAGE_NEWS_LIMIT);

export default function LatestNews() {
  return (
    <div className="latest-news-page">
      <h2 className="latest-news-title">Latest News</h2>

      <div className="latest-news-container">
        {previewEvents.length > 0 ? (
          previewEvents.map((event) => (
            <article key={event.id} className="card latest-news-card">
              <div className="card-body">
                <div className="card-header">
                  <h3 className="card-title latest-news-card-title">{event.title}</h3>
                </div>

                <div className="latest-news-metadata" aria-label="News details">
                  <div className="latest-news-meta-primary">
                    {event.type && (
                      <span className="latest-news-type">{event.type}</span>
                    )}
                    {event.mode && (
                      <span className="latest-news-mode">{event.mode}</span>
                    )}
                  </div>

                  <div className="latest-news-meta-secondary">
                    {event.date && <span>{event.date}</span>}
                    {event.time && <span>{event.time}</span>}
                    {event.location && (
                      <span className="latest-news-location">{event.location}</span>
                    )}
                  </div>
                </div>

                <p className="card-description latest-news-description">{event.description}</p>

                {event.members?.length > 0 && (
                  <div className="latest-news-members">
                    <strong>Lab Members Involved:</strong>
                    <ul>
                      {event.members.map((m, idx) => (
                        <li key={idx}>
                          <a href={m.profileUrl}>{m.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="card-footer">
                  {event.link ? (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-cta-link latest-news-link"
                    >
                      Learn More →
                    </a>
                  ) : (
                    <Link
                      to={`/news/${event.id}`}
                      className="card-cta-link latest-news-link"
                    >
                      Learn More →
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))
        ) : (
          <EmptyState
            compact
            title={null}
            message="No news articles available at this time."
          />
        )}
      </div>

      {previewEvents.length > 0 && (
        <div className="latest-news-archive">
          <Link to="/news-and-updates" className="latest-news-archive-link">
            View all news &amp; events <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </div>
  );
}
