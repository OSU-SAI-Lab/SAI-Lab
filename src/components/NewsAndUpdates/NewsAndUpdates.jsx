import { useState, useEffect, useRef } from "react";

const newsData = [
  {
    id: 1,
    date: "2026-01-27",
    title: "ICICLE Mentors High School Students for the Presidential AI Challenge",
    description:
      "ICICLE team members mentored high school students participating in the Presidential AI Challenge, a national initiative encouraging K-12 youth to develop AI-powered solutions addressing community challenges.",
    tag: "Outreach",
    link: "https://icicle.osu.edu/news/2026/01/icicle-mentors-high-school-students-presidential-ai-challenge",
  },
  {
    id: 2,
    date: "2023-11-18",
    title:
      'NSF ICICLE Workshop "Unlocking the Potential of AI" at Central Ohio\'s One Day Hackathon',
    description:
      "ICICLE presented a workshop on AI at the High School I/O hackathon held at Columbus School for Girls, introducing high schoolers to the potential of artificial intelligence and ICICLE's research.",
    tag: "Outreach",
    link: "https://icicle.osu.edu/news/2023/12/november-2023-nsf-icicle-workshop-columbus-school-girls-part-central-ohios-one-day-hackathon-high-schoolers",
  },
  {
    id: 3,
    date: "2025-02-27",
    title:
      "NSF ICICLE Webinar: AI-enabled Digital Agriculture — An Overview of ICICLE Software Components",
    description:
      "A webinar covering ICICLE's software components including HARVEST, Open Pass & ArrayMorph, demonstrating how AI-enabled tools are advancing digital agriculture research and practice.",
    tag: "Outreach",
    link: null,
    recording: true,
  },
  {
    id: 4,
    date: "2025-04-28",
    title:
      "NSF ICICLE Faculty Members Receive Two Lumley Interdisciplinary Research Awards",
    description:
      "ICICLE faculty were recognized with two Lumley Interdisciplinary Research Awards from Ohio State's College of Engineering, honoring outstanding collaborative research across departmental boundaries.",
    tag: "Award",
    link: "https://icicle.osu.edu/news/2025/04/nsf-icicle-faculty-members-receive-two-lumley-interdisciplinary-research-awards",
  },
  {
    id: 5,
    date: "2024-09-01",
    title:
      "Hari Subramoni Receives the Prestigious Intel Rising Star Faculty Award",
    description:
      "Assistant Professor Hari Subramoni was named one of just 8 recipients nationally of the 2024 Intel Rising Star Faculty Award, recognizing his work on HPC systems for AI and democratizing AI for agriculture.",
    tag: "Award",
    link: "https://icicle.osu.edu/news/2024/09/nsf-icicle-faculty-member-hari-subramoni-receives-prestigious-intel-rising-star-award",
  },
  {
    id: 6,
    date: "2024-05-01",
    title: "NSF ICICLE Team Wins Third Place at ISC24",
    description:
      "The ICICLE team earned third place at ISC High Performance 2024 in Hamburg, Germany for their research poster in the High Performance Computing category.",
    tag: "Award",
    link: "https://icicle.osu.edu/news/2024/05/nsf-icicle-team-wins-third-place-isc24",
  },
  {
    id: 7,
    date: "2025-03-06",
    title:
      "Ohio Supercomputer Center Press Release: NSF ICICLE Project Helping Empower Farmers Through AI and HPC",
    description:
      "OSC highlighted ICICLE's work using drone imagery and AI-powered analysis to help farmers detect crop stress, optimize irrigation, and make data-driven decisions — demonstrating how AI can be democratized for non-tech industries.",
    tag: "News",
    link: "https://icicle.osu.edu/news/2025/03/ohio-supercomputer-center-osc-press-release-nsf-icicle-project-helping-empower-farmers-through-ai-and-hpc",
  },
  {
    id: 8,
    date: "2024-03-01",
    title:
      "NSF ICICLE & AIIRA Sign MOU to Strengthen Collaboration",
    description:
      "ICICLE and the AI Institute for Resilient Agriculture (AIIRA) signed a Memorandum of Understanding to combine AIIRA's agricultural data collection with ICICLE's HPC-accelerated training solutions for AI models.",
    tag: "News",
    link: "https://icicle.osu.edu/news/2024/03/u.s.-national-science-foundation-nsf-icicle-aiira-sign-mou-strengthen-collaboration",
  },
  {
    id: 9,
    date: "2023-10-01",
    title:
      "OSC Hosts NSF ICICLE Meeting: Planning Year Three of the AI Project",
    description:
      "The Ohio Supercomputer Center hosted a planning meeting for NSF ICICLE's third year, bringing together researchers and partners to chart the next phase of the AI institute's work.",
    tag: "News",
    link: "https://icicle.osu.edu/news/2023/10/osc-hosts-nsf-icicle-meeting-planning-year-three-artificial-intelligence-project",
  },
  {
    id: 10,
    date: "2023-08-01",
    title:
      "NSF AI Institutes AI4OPT and ICICLE Sign MOU to Strengthen Collaboration",
    description:
      "ICICLE partnered with the AI Institute for Advances in Optimization (AI4OPT) through a formal MOU, combining expertise in intelligent cyberinfrastructure and computational learning with optimization research.",
    tag: "News",
    link: "https://icicle.osu.edu/news/2023/08/u.s.-national-science-foundation-ai-institutes-advances-optimization-ai4opt-and-intelligent-cyberinfrastructure-computational-learning-environment-icicle-sign-mou-strengthen-collaboration",
  },
];

const tagColors = {
  Outreach: { bg: "#E8F5E9", text: "#2E7D32", border: "#A5D6A7", dot: "#43A047" },
  Award: { bg: "#FFF8E1", text: "#F57F17", border: "#FFE082", dot: "#FFA000" },
  News: { bg: "#E3F2FD", text: "#1565C0", border: "#90CAF9", dot: "#1E88E5" },
};

const FILTERS = ["All", "News", "Award", "Outreach"];

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function TagBadge({ tag }) {
  const c = tagColors[tag];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "4px 12px",
        borderRadius: 100,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        color: c.text,
        background: c.bg,
        border: `1px solid ${c.border}`,
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: c.dot,
        }}
      />
      {tag}
    </span>
  );
}

function NewsCard({ item, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#FAFAFA" : "#fff",
        borderRadius: 16,
        border: "1px solid #E8E8E8",
        padding: "28px 32px",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 8px 30px rgba(0,0,0,0.08)"
          : "0 1px 3px rgba(0,0,0,0.04)",
        animation: `fadeSlideIn 0.5s ease ${index * 0.06}s both`,
        cursor: item.link ? "pointer" : "default",
      }}
      onClick={() => item.link && window.open(item.link, "_blank")}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
          marginBottom: 12,
          flexWrap: "wrap",
        }}
      >
        <TagBadge tag={item.tag} />
        <span
          style={{
            fontSize: 13,
            color: "#999",
            fontFamily: "'DM Mono', monospace",
            whiteSpace: "nowrap",
          }}
        >
          {formatDate(item.date)}
        </span>
      </div>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#1A1A1A",
          lineHeight: 1.4,
          margin: "0 0 10px 0",
          fontFamily: "'Crimson Pro', Georgia, serif",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontSize: 14.5,
          lineHeight: 1.65,
          color: "#555",
          margin: 0,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {item.description}
      </p>
      <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
        {item.link && (
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#BB1B1B",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Read more →
          </span>
        )}
        {item.recording && (
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#5E35B1",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ▶ Recording available
          </span>
        )}
      </div>
    </div>
  );
}

export default function NewsAndUpdates() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = newsData
    .filter((item) => activeFilter === "All" || item.tag === activeFilter)
    .filter(
      (item) =>
        searchQuery === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const counts = {
    All: newsData.length,
    News: newsData.filter((n) => n.tag === "News").length,
    Award: newsData.filter((n) => n.tag === "Award").length,
    Outreach: newsData.filter((n) => n.tag === "Outreach").length,
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F5F3F0",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes headerSlide {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        * { box-sizing: border-box; }

        input::placeholder {
          color: #aaa;
        }
      `}</style>

      {/* Header */}
      <div
        style={{
          background: "#8b0000",
          color: "white",
          padding: "4rem 2rem 3rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          animation: "headerSlide 0.6s ease both",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <h1
            style={{
              fontFamily: "'Crimson Pro', serif",
              fontSize: "3rem",
              fontWeight: 700,
              color: "white",
              margin: "0 0 1rem 0",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            News & Updates
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "white",
              opacity: 0.95,
              fontWeight: 400,
              margin: 0,
            }}
          >
            Latest research milestones, awards, and community outreach from our
            lab at The Ohio State University.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px 80px" }}>
        {/* Controls Row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
            marginBottom: 28,
          }}
        >
          {/* Filter pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {FILTERS.map((f) => {
              const isActive = activeFilter === f;
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 100,
                    border: isActive ? "2px solid #BB1B1B" : "2px solid #D9D5D0",
                    background: isActive ? "#BB1B1B" : "transparent",
                    color: isActive ? "#fff" : "#666",
                    fontSize: 13.5,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontFamily: "'DM Sans', sans-serif",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  {f}
                  <span
                    style={{
                      background: isActive ? "rgba(255,255,255,0.25)" : "#E8E5E0",
                      borderRadius: 100,
                      padding: "1px 7px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: isActive ? "#fff" : "#888",
                    }}
                  >
                    {counts[f]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: "9px 16px 9px 38px",
                borderRadius: 100,
                border: "2px solid #D9D5D0",
                background: "#fff",
                fontSize: 13.5,
                fontFamily: "'DM Sans', sans-serif",
                width: 220,
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#BB1B1B")}
              onBlur={(e) => (e.target.style.borderColor = "#D9D5D0")}
            />
            <span
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: 14,
                color: "#aaa",
                pointerEvents: "none",
              }}
            >
              ⌕
            </span>
          </div>
        </div>

        {/* Results count */}
        <div
          style={{
            fontSize: 13,
            color: "#999",
            marginBottom: 20,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          Showing {filtered.length} of {newsData.length} entries
        </div>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {filtered.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "64px 24px",
              color: "#999",
              fontSize: 15,
            }}
          >
            No results found. Try adjusting your filters or search query.
          </div>
        )}
      </div>
    </div>
  );
}