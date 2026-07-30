import React from "react";
import "./EventsTab.css";

import eventsJson from "../../assets/json/events.json";
import icicleFlyer from "../../assets/json/images/events/icicle-webinar-series-feb-27.pdf";

/**
 * Local flyer registry.
 *
 * To attach a local flyer to an event, add:
 *
 * "flyerKey": "icicleWebinarFeb27"
 *
 * to the event object in events.json.
 */
const flyerRegistry = {
  icicleWebinarFeb27: icicleFlyer,
};

/**
 * Resolve each event's flyerKey to a local PDF URL.
 */
function withFlyer(events) {
  return events.map((event) => ({
    ...event,
    flyer: event.flyerKey
      ? flyerRegistry[event.flyerKey]
      : undefined,
  }));
}

/**
 * Sort events from newest to oldest.
 */
const byDateDesc = (a, b) =>
  new Date(`${b.sortDate}T00:00:00`) -
  new Date(`${a.sortDate}T00:00:00`);

/**
 * Sort events from oldest to newest.
 */
const byDateAsc = (a, b) =>
  new Date(`${a.sortDate}T00:00:00`) -
  new Date(`${b.sortDate}T00:00:00`);

/**
 * Add sequence numbers after sorting.
 */
function withSlNo(events) {
  return events.map((event, index) => ({
    ...event,
    slNo: index + 1,
  }));
}

/**
 * Render one event card.
 */
function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card-header">
        <span className="event-sl">
          #{event.slNo}
        </span>

        <span className="event-date">
          {event.date}
        </span>

        {event.location && (
          <span className="event-location">
            📍 {event.location}
          </span>
        )}
      </div>

      <div className="event-card-body">
        {event.tags?.length > 0 && (
          <div className="event-tags">
            {event.tags.map((tag) => (
              <span
                key={`${event.title}-${tag}`}
                className="tag"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h3>
          {event.link ? (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {event.title}
            </a>
          ) : (
            event.title
          )}
        </h3>

        {event.description && (
          <p>{event.description}</p>
        )}
      </div>

      <div className="event-card-footer">
        {event.link && (
          <a
            href={event.link}
            className="btn-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Event
          </a>
        )}

        {event.flyer && (
          <a
            href={event.flyer}
            className="btn-link secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Flyer
          </a>
        )}
      </div>
    </div>
  );
}

/**
 * Render the Events page.
 * Data: src/assets/json/events.json — shape { "events": [...] }
 */
const EventsTab = () => {
  if (!eventsJson || !Array.isArray(eventsJson.events)) {
    return (
      <div className="events-container">
        <p>
          Error loading events. Expected an
          &quot;events&quot; array in events.json.
        </p>
      </div>
    );
  }

  /**
   * Use the user's current local date as the boundary
   * between upcoming and past events.
   */
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  /**
   * Resolve local flyer references.
   */
  const allEvents = withFlyer(eventsJson.events);

  /**
   * Upcoming events:
   * - must have a valid sortDate
   * - date must be today or later
   * - sorted from earliest to latest
   */
  const upcomingEvents = withSlNo(
    allEvents
      .filter((event) => {
        if (!event.sortDate) {
          return false;
        }

        const eventDate = new Date(
          `${event.sortDate}T00:00:00`
        );

        return (
          !Number.isNaN(eventDate.getTime()) &&
          eventDate >= today
        );
      })
      .sort(byDateAsc)
  );

  /**
   * Past events:
   * - must have a valid sortDate
   * - date must be before today
   * - sorted from latest to earliest
   */
  const pastEvents = withSlNo(
    allEvents
      .filter((event) => {
        if (!event.sortDate) {
          return false;
        }

        const eventDate = new Date(
          `${event.sortDate}T00:00:00`
        );

        return (
          !Number.isNaN(eventDate.getTime()) &&
          eventDate < today
        );
      })
      .sort(byDateDesc)
  );

  return (
    <div className="events-container">
      <section className="events-section upcoming-theme">
        <h2 className="section-title">
          Upcoming Events
        </h2>

        {upcomingEvents.length > 0 ? (
          <div className="events-grid">
            {upcomingEvents.map((event) => (
              <EventCard
                key={
                  event.id ??
                  `${event.sortDate}-${event.title}`
                }
                event={event}
              />
            ))}
          </div>
        ) : (
          <div className="no-events-card">
            <p>
              No upcoming events currently scheduled.
              Please check our Google Calendar for
              weekly social hours.
            </p>
          </div>
        )}
      </section>

      <section className="events-section past-theme">
        <h2 className="section-title">
          Past Events
        </h2>

        {pastEvents.length > 0 ? (
          <div className="events-grid">
            {pastEvents.map((event) => (
              <EventCard
                key={
                  event.id ??
                  `${event.sortDate}-${event.title}`
                }
                event={event}
              />
            ))}
          </div>
        ) : (
          <div className="no-events-card">
            <p>
              No past events are currently available.
            </p>
          </div>
        )}
      </section>
    </div>
  );
};

export default EventsTab;