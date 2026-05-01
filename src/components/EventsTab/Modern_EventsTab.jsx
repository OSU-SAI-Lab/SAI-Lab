import React from "react";
import "./Modern_EventsPage.css";

const OSUEventPage = () => {
    const calendarSrc = encodeURIComponent("b12c3144325ee668d013dcf7ee42ff7e2e804d104c5a2cf3669d39645db63c7e@group.calendar.google.com");
  const tz = encodeURIComponent("America/New_York");

  return (
    <div className="flex flex-col h-screen w-full bg-white">
      {/* Header */}
      <div className="px-6 py-6 border-b border-slate-200 shrink-0">
        <section className="calendar-hero">
          <h1>Lab Events Calendar</h1>
          <p>
            View all upcoming seminars, meetings, and social events for The Ohio
            State University Systems & AI Lab.
          </p>
        </section>
      </div>

      {/* Calendar Area */}
      <div className="flex-1 min-h-0 w-full bg-slate-50 p-4 sm:p-6 lg:p-8">
        <iframe
          src={`https://calendar.google.com/calendar/embed?src=${calendarSrc}&ctz=${tz}&mode=MONTH&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0`}
          className="calendar-frame border-0"
          frameBorder="0"
          scrolling="no"
          title="Google Calendar"
        />
      </div>
    </div>
  );
};

export default OSUEventPage;
