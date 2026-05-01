// src/components/EventsPage/LatestNews.jsx

import { Link } from "react-router-dom";
import { events } from "./eventsData";
import "./LatestNews.css";

// Sort events by date, most recent first
const sortedEvents = [...events].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

export default function LatestNews() {
  return (
    <div className="latest-news-page">
      <h2 className="latest-news-title">Latest News</h2>

      <div className="latest-news-container">
        {sortedEvents.map((event) => (
          <div key={event.id} className="latest-news-card">
            <h3 className="latest-news-card-title">{event.title}</h3>

            <p className="latest-news-meta">
              <strong>{event.type}</strong> · {event.mode}
            </p>

            <p className="latest-news-datetime">
              {event.date}
              {event.time && ` · ${event.time}`}
            </p>

            <p className="latest-news-location">{event.location}</p>

            <p className="latest-news-description">{event.description}</p>

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

            {/* External link if available, otherwise internal article page */}
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
        ))}
      </div>
    </div>
  );
}