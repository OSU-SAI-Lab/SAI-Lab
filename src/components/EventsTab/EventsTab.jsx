import React from 'react';
import './EventsTab.css';
import icicleFlyer from '../../assets/pdf/icicle-webinar-series-feb-27.pdf';

const EventsTab = () => {
  const upcomingEvents = [
    {
      conference: "HARVEST-Vision: Second International Workshop on Applications of CV and HPC in Agriculture",
      city: "Tucson, Arizona",
      dates: "March 6, 2026",
      link: "https://icicle-ai.github.io/harvest/",
      sessions: [
        {
          dateLabel: "Wednesday, November 19",
          time: "12:30PM - 1:00PM",
          location: "Booth #414",
          title: "Thor Ultra 800G AI Ethernet NIC",
          type: "[Talk]",
          speakers: "Hemal Shah, Broadcom"
        }
      ]
    }
  ];

  const pastEvents = [
    {
      conference: "ICICLE Webinar: AI In Agriculture, AI-as-a-Service",
      city: "Online",
      dates: "February 27, 2026",
      link: "https://www.youtube.com/watch?v=PN-J_Rbg15w",
      flyer: icicleFlyer,
      sessions: [
        {
          dateLabel: "Saturday, January 31",
          time: "TBD",
          location: "Main Hall",
          title: "Parallel Programming Paradigms",
          type: "[Keynote]",
          speakers: "Lab Member Name"
        }
      ]
    },
    {
      conference: "HARVEST: First International Workshop on Applications of HPC and AI in Agriculture",
      city: "San Diego, CA",
      dates: "September 9-10, 2025",
      link: "https://icicle-ai.github.io/harvest/#/past-events/2025",
      sessions: [
        {
          dateLabel: "Saturday, January 31",
          time: "TBD",
          location: "Main Hall",
          title: "Parallel Programming Paradigms",
          type: "[Keynote]",
          speakers: "Lab Member Name"
        }
      ]
    }
  ];

  const EventSection = ({ sectionTitle, events, themeClass }) => (
    <div className={`section-container ${themeClass}`}>
      <div className="section-header">
        <h2>{sectionTitle}</h2>
      </div>
      <div className="section-content">
        {events.map((event, idx) => (
          <div key={idx} className="conference-block">
            <h3 className="conference-title">
              <span className="blue-text"><a href={event.link}>{event.conference}</a></span> — {event.city} ({event.dates})
              {event.flyer && (
                <span className="flyer-link"> | <a href={event.flyer} target="_blank" rel="noopener noreferrer">📄 Flyer</a></span>
              )}
            </h3>
            
            {/* <table className="events-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Event</th>
                  <th>Speaker(s)</th>
                </tr>
              </thead>
              <tbody>
                {event.sessions.map((session, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="date-row">
                      <td colSpan="4">{session.dateLabel}</td>
                    </tr>
                    <tr className="detail-row">
                      <td>{session.time}</td>
                      <td>{session.location}</td>
                      <td>
                        <div className="event-title">{session.title}</div>
                        <div className="event-type">{session.type}</div>
                      </td>
                      <td>{session.speakers}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table> */}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="events-page">
      <EventSection 
        sectionTitle="Upcoming Events" 
        events={upcomingEvents} 
        themeClass="upcoming-theme" 
      />
      <EventSection 
        sectionTitle="Past Events" 
        events={pastEvents} 
        themeClass="past-theme" 
      />
    </div>
  );
};

export default EventsTab;