// Utility function to fetch OSU events
// This can be replaced with actual API calls or web scraping

/**
 * Fetches events from OSU calendar
 * Currently uses mock data, but can be extended to:
 * - Fetch from OSU Events API
 * - Scrape from events.oregonstate.edu
 * - Use Google Calendar API
 */
export const fetchOSUEvents = async () => {
  // TODO: Replace with actual OSU events API call
  // Example: const response = await fetch('https://events.oregonstate.edu/api/events');
  
  // Mock data based on the image description showing SAIL events
  const mockEvents = [
    {
      id: 1,
      title: "SAIL Social",
      date: new Date(2026, 1, 4), // Feb 4, 2026
      time: "3:00 PM",
      endTime: "4:00 PM",
      location: "Dreese Labs",
      description: "Weekly SAIL social gathering",
      type: "Social"
    },
    {
      id: 2,
      title: "SAIL Social",
      date: new Date(2026, 1, 5), // Feb 5, 2026
      time: "3:00 PM",
      endTime: "4:00 PM",
      location: "Dreese Labs",
      description: "Weekly SAIL social gathering",
      type: "Social"
    },
    {
      id: 3,
      title: "SAIL Social",
      date: new Date(2026, 1, 11), // Feb 11, 2026
      time: "3:00 PM",
      endTime: "4:00 PM",
      location: "Dreese Labs",
      description: "Weekly SAIL social gathering",
      type: "Social"
    },
    {
      id: 4,
      title: "SAIL Social",
      date: new Date(2026, 1, 12), // Feb 12, 2026
      time: "3:00 PM",
      endTime: "4:00 PM",
      location: "Dreese Labs",
      description: "Weekly SAIL social gathering",
      type: "Social"
    },
    {
      id: 5,
      title: "SAIL Social",
      date: new Date(2026, 1, 18), // Feb 18, 2026
      time: "3:00 PM",
      endTime: "4:00 PM",
      location: "Dreese Labs",
      description: "Weekly SAIL social gathering",
      type: "Social"
    },
    {
      id: 6,
      title: "SAIL Social",
      date: new Date(2026, 1, 19), // Feb 19, 2026
      time: "3:00 PM",
      endTime: "4:00 PM",
      location: "Dreese Labs",
      description: "Weekly SAIL social gathering",
      type: "Social"
    },
    {
      id: 7,
      title: "SAIL Social",
      date: new Date(2026, 1, 25), // Feb 25, 2026
      time: "3:00 PM",
      endTime: "4:00 PM",
      location: "Dreese Labs",
      description: "Weekly SAIL social gathering",
      type: "Social"
    },
    {
      id: 8,
      title: "SAIL Social",
      date: new Date(2026, 1, 26), // Feb 26, 2026
      time: "3:00 PM",
      endTime: "4:00 PM",
      location: "Dreese Labs",
      description: "Weekly SAIL social gathering",
      type: "Social"
    },
    {
      id: 9,
      date: new Date(2026, 1, 24), // Feb 24, 2026
      time: "2:00 PM",
      endTime: "3:30 PM",
      title: "Efficient Large Language Models for Edge Devices",
      speaker: "Dr. Sarah Jenkins",
      location: "Dreese Labs 260",
      description: "A deep dive into quantization and pruning techniques for mobile AI deployment.",
      type: "Seminar"
    },
    {
      id: 10,
      date: new Date(2026, 2, 3), // March 3, 2026
      time: "11:00 AM",
      endTime: "12:00 PM",
      title: "Systems & AI Lab: Spring Mixer",
      speaker: "All Faculty/Students",
      location: "Knowlton Hall Rooftop",
      description: "Networking and research lightning talks for new lab members.",
      type: "Social"
    }
  ];

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return mockEvents;
};

/**
 * Groups events by date for calendar display
 */
export const groupEventsByDate = (events) => {
  const grouped = {};
  events.forEach(event => {
    const dateKey = `${event.date.getFullYear()}-${event.date.getMonth()}-${event.date.getDate()}`;
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    grouped[dateKey].push(event);
  });
  return grouped;
};

/**
 * Gets events for a specific date
 */
export const getEventsForDate = (events, year, month, day) => {
  return events.filter(event => {
    const eventDate = event.date;
    return eventDate.getFullYear() === year &&
           eventDate.getMonth() === month &&
           eventDate.getDate() === day;
  });
};
