import React from 'react';
import './EventsTab.css';
import icicleFlyer from '../../assets/pdf/icicle-webinar-series-feb-27.pdf';

const EventsTab = () => {
  const upcomingEvents = [
    {
      slNo: 1,
      date: "May 5, 2026",
      title: "Tutorial Using ICICLE Digital Agriculture Pipeline",
      tags: ["Tutorial"],
      location: "San Diego Supercomputer Center (SDSC) Auditorium, San Diego, CA",
      link: "https://na.eventscloud.com/website/91919/agenda/",
      description: "A hands-on tutorial on the ICICLE Digital Agriculture Pipeline, presented at the NRP Annual Meeting Tutorial Day.",
    },
    {
      slNo: 2,
      date: "May 6, 2026",
      title: "AI Institute",
      tags: ["Talk"],
      location: "Qualcomm Institute (QI) Auditorium, San Diego, CA",
      link: "https://na.eventscloud.com/website/91919/agenda/",
      description: "A talk on the AI Institute, presented as part of the AI for Agriculture session at the NRP Annual Meeting.",
    },
    {
      slNo: 3,
      date: "May 6, 2026",
      title: "Panel Discussion - AI for Agriculture",
      tags: ["Panel"],
      location: "Qualcomm Institute (QI) Auditorium, San Diego, CA",
      link: "https://na.eventscloud.com/website/91919/agenda/",
      description: "A panel discussion on AI for Agriculture featuring Ryan Dinubilo (F3 Innovate), Hari Subramoni (Ohio State University), and Konstantin Karydis (UC Riverside).",
    },
  ];

  const pastEvents = [
    {
      slNo: 1,
      date: "March 6, 2026",
      title: "HARVEST-Vision: Second International Workshop on Applications of CV and HPC in Agriculture",
      tags: ["Workshop"],
      location: "Tucson, Arizona",
      link: "https://icicle-ai.github.io/harvest/",
      description: "A workshop focused on the intersection of computer vision, high-performance computing, and agricultural technology.",
    },
    {
      slNo: 2,
      date: "February 27, 2026",
      title: "ICICLE Webinar: AI In Agriculture, AI-as-a-Service",
      tags: ["Presentation"],
      location: "Online",
      link: "https://www.youtube.com/watch?v=PN-J_Rbg15w",
      flyer: icicleFlyer,
      description: "Exploring the delivery of AI capabilities through service-oriented architectures in rural settings.",
    },
    {
      slNo: 3,
      date: "September 9–10, 2025",
      title: "HARVEST: First International Workshop",
      tags: ["Workshop"],
      location: "San Diego, CA",
      link: "https://icicle-ai.github.io/harvest/#/past-events/2025",
      description: "The inaugural workshop bringing together researchers in HPC and AI for agricultural innovation.",
    },
  ];

  const EventCard = ({ event }) => (
    <div className="event-card">
      <div className="event-card-header">
        <span className="event-sl">#{event.slNo}</span>
        <span className="event-date">{event.date}</span>
        <span className="event-location">📍 {event.location}</span>
      </div>
      <div className="event-card-body">
        <div className="event-tags">
          {event.tags?.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
        <h3><a href={event.link} target="_blank" rel="noopener noreferrer">{event.title}</a></h3>
        <p>{event.description}</p>
      </div>
      <div className="event-card-footer">
        <a href={event.link} className="btn-link" target="_blank" rel="noopener noreferrer">View Event</a>
        {event.flyer && (
          <a href={event.flyer} className="btn-link secondary" target="_blank" rel="noopener noreferrer">📄 Flyer</a>
        )}
      </div>
    </div>
  );

  return (
    <div className="events-container">
      <section className="events-section upcoming-theme">
        <h2 className="section-title">Upcoming Events</h2>
        {upcomingEvents.length > 0 ? (
          <div className="events-grid">
            {upcomingEvents.map((e, i) => <EventCard key={i} event={e} />)}
          </div>
        ) : (
          <div className="no-events-card">
            <p>No upcoming events currently scheduled. Please check our Google Calendar for weekly social hours.</p>
          </div>
        )}
      </section>

      <section className="events-section past-theme">
        <h2 className="section-title">Past Events</h2>
        <div className="events-grid">
          {pastEvents.map((e, i) => <EventCard key={i} event={e} />)}
        </div>
      </section>
    </div>
  );
};

export default EventsTab;