// src/components/EventsPage/LatestNews.jsx

import { Link } from "react-router-dom";
import { events } from "./eventsData";
import "./LatestNews.css";

// Sort by sortDate (ISO), most recent first
const sortedEvents = [...events].sort(
  (a, b) => new Date(b.sortDate) - new Date(a.sortDate)
);

export default function LatestNews() {
  return (
    <div className="latest-news-page">
      <h2 className="latest-news-title">Latest News</h2>

      <div className="latest-news-container">
        {sortedEvents.length > 0 ? (
          sortedEvents.map((event) => (
            <article key={event.id} className="latest-news-card">
              <h3 className="latest-news-card-title">{event.title}</h3>

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

              <p className="latest-news-description">{event.description}</p>

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

              {/* External link if available, otherwise internal article page */}
              <div className="latest-news-card-footer">
                {event.link ? (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="latest-news-link"
                  >
                    Learn More →
                  </a>
                ) : (
                  <Link
                    to={`/news/${event.id}`}
                    className="latest-news-link"
                  >
                    Learn More →
                  </Link>
                )}
              </div>
            </article>
          ))
        ) : (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#666", width: "100%" }}>
            <p style={{ margin: 0, fontSize: "15px" }}>No news articles available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}
