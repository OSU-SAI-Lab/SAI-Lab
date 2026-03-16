import { useState } from "react";
import "./NewsPage.css";

// Ordered newest-first for easy additions — just add new entries at the top
const newsData = [
  {
    id: 11,
    date: "2026-03-16",
    title:
      "Hari Subramoni Receives NVIDIA Academic Grant Program Award for Edge AI Crop Disease Detection",
    description:
      "Assistant Professor Hari Subramoni was awarded an NVIDIA Academic Grant for the project \"Deploying Edge AI for Crop Disease Detection at OSU Extension Offices,\" receiving 32K A100 GPU-hours and two Jetson AGX Orin Dev Kits to design farm-deployable edge computing systems across four Ohio counties.",
    tag: "Award",
    link: "https://www.nvidia.com/en-us/industries/higher-education-research/academic-grant-program/",
  },
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
    id: 3,
    date: "2025-02-27",
    title:
      "NSF ICICLE Webinar: AI-enabled Digital Agriculture — An Overview of ICICLE Software Components",
    description:
      "A webinar covering ICICLE's software components including HARVEST, Open Pass & ArrayMorph, demonstrating how AI-enabled tools are advancing digital agriculture research and practice.",
    tag: "Outreach",
    link: "https://www.youtube.com/watch?v=9-zxiB30jfk",
    recording: true,
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
    id: 8,
    date: "2024-03-01",
    title: "NSF ICICLE & AIIRA Sign MOU to Strengthen Collaboration",
    description:
      "ICICLE and the AI Institute for Resilient Agriculture (AIIRA) signed a Memorandum of Understanding to combine AIIRA's agricultural data collection with ICICLE's HPC-accelerated training solutions for AI models.",
    tag: "News",
    link: "https://icicle.osu.edu/news/2024/03/u.s.-national-science-foundation-nsf-icicle-aiira-sign-mou-strengthen-collaboration",
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
    id: 9,
    date: "2023-10-01",
    title: "OSC Hosts NSF ICICLE Meeting: Planning Year Three of the AI Project",
    description:
      "The Ohio Supercomputer Center hosted a planning meeting for NSF ICICLE's third year, bringing together researchers and partners to chart the next phase of the AI institute's work.",
    tag: "News",
    link: "https://icicle.osu.edu/news/2023/10/osc-hosts-nsf-icicle-meeting-planning-year-three-artificial-intelligence-project",
  },
  {
    id: 10,
    date: "2023-08-01",
    title: "NSF AI Institutes AI4OPT and ICICLE Sign MOU to Strengthen Collaboration",
    description:
      "ICICLE partnered with the AI Institute for Advances in Optimization (AI4OPT) through a formal MOU, combining expertise in intelligent cyberinfrastructure and computational learning with optimization research.",
    tag: "News",
    link: "https://icicle.osu.edu/news/2023/08/u.s.-national-science-foundation-ai-institutes-advances-optimization-ai4opt-and-intelligent-cyberinfrastructure-computational-learning-environment-icicle-sign-mou-strengthen-collaboration",
  },
];

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
  return (
    <span className={`tag-badge ${tag.toLowerCase()}`}>
      <span className="tag-badge-dot" />
      {tag}
    </span>
  );
}

function NewsCard({ item, index }) {
  const handleCardClick = () => {
    if (item.link && !item.recording) {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div
      className={`news-card${item.link ? " clickable" : ""}`}
      style={{ animationDelay: `${index * 0.06}s` }}
      onClick={handleCardClick}
    >
      <div className="news-card-header">
        <TagBadge tag={item.tag} />
        <span className="news-card-date">{formatDate(item.date)}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="news-card-footer">
        {item.link && !item.recording && (
          <span className="news-read-more">Read more →</span>
        )}
        {item.recording && item.link && (
          <a
            className="news-recording"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            ▶ Recording available
          </a>
        )}
      </div>
    </div>
  );
}

export default function NewsPage() {
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
    <div className="news-app">
      {/* Hero Header */}
      <div className="news-hero">
        <h1>News &amp; Updates</h1>
        <p>
          Latest research milestones, awards, and community outreach from our
          lab at The Ohio State University.
        </p>
      </div>

      {/* Content */}
      <div className="news-content">
        {/* Controls Row */}
        <div className="news-controls">
          {/* Filter pills */}
          <div className="filter-pills">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-pill${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
                <span className="filter-pill-count">{counts[f]}</span>
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="news-search-wrapper">
            <input
              type="text"
              className="news-search-input"
              placeholder="Search updates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="news-search-icon">⌕</span>
          </div>
        </div>

        {/* Results count */}
        <div className="news-results-count">
          Showing {filtered.length} of {newsData.length} entries
        </div>

        {/* Cards */}
        <div className="news-card-list">
          {filtered.map((item, i) => (
            <NewsCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="news-no-results">
            No results found. Try adjusting your filters or search query.
          </div>
        )}
      </div>
    </div>
  );
}