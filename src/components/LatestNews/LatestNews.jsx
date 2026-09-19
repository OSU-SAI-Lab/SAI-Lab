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
    <section className="latest-news-section" aria-labelledby="latest-news-heading">
      <div className="latest-news-content site-section">
        <div className="section-header">
          <h2 id="latest-news-heading" className="section-title latest-news-title">Latest News</h2>
        </div>

        <div className="latest-news-container section-grid">
          {sortedEvents.length > 0 ? (
            sortedEvents.map((event) => (
              <div key={event.id} className="card latest-news-card">
                <div className="card-body">
                  <div className="card-header">
                    <h3 className="card-title latest-news-card-title">{event.title}</h3>
                  </div>

                  <p className="card-meta latest-news-meta">
                    <strong>{event.type}</strong> · {event.mode}
                  </p>

                  <p className="latest-news-datetime">
                    {event.date}
                    {event.time && ` · ${event.time}`}
                  </p>

                  {event.location && (
                    <p className="latest-news-location">📍 {event.location}</p>
                  )}

                  <p className="card-description latest-news-description">{event.description}</p>

                  {event.members && (
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
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", padding: "40px 20px", color: "#666", width: "100%" }}>
              <p style={{ margin: 0, fontSize: "15px" }}>No news articles available at this time.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}