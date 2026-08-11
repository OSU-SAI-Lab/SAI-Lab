import React, { useEffect, useMemo, useState } from "react";
import { ExternalLink, FileText, Github, Search, X } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import Footer from "../Footer";
import "../../assets/css/publicationspage.css";

const LAB_AUTHOR_PATTERNS = [
  /\bsubramoni\b/i,
  /\bpotlapally\b/i,
  /\bradhakrishnan\b/i,
  /\broy chowdhury\b/i,
  /\barunachalam\b/i,
  /\bpratham sharma\b/i,
  /\bbrijesh nanda\b/i,
  /\bbrunda yogananda\b/i,
  /\bmundada\b/i,
];

const TOPIC_RULES = [
  ["Large language models", /large language|\bllm|transformer|language model/i],
  ["Distributed AI", /distributed|deep learning|dnn training|model parallel|tensorflow|pytorch/i],
  ["Computer vision", /vision|image|object detection|segmentation|camera trap|woundnet/i],
  ["High-performance computing", /\bhpc\b|high.performance|gpu|accelerat|scalab/i],
  ["MPI & communication", /\bmpi\b|rdma|collective|allreduce|alltoall|infiniband|communication|interconnect/i],
  ["SmartNICs", /smartnic|bluefield|\bdpu\b/i],
  ["AI for science", /agricultur|ecolog|wildlife|phenolog|scientific|geospatial|remote sensing/i],
];

const categoryLabel = (type = "") => {
  if (/conference|workshop/i.test(type)) return "Conference";
  if (/journal/i.test(type)) return "Journal";
  if (/thes|dissertation|project/i.test(type)) return "Thesis & project";
  if (/report/i.test(type)) return "Technical report";
  if (/book/i.test(type)) return "Book";
  return type || "Publication";
};

const getTopics = (publication) => {
  const source = `${publication.title} ${publication.venue}`;
  const matches = TOPIC_RULES.filter(([, pattern]) => pattern.test(source)).map(([name]) => name);
  return matches.slice(0, 2).length ? matches.slice(0, 2) : ["Systems research"];
};

const isLabAuthor = (name) => LAB_AUTHOR_PATTERNS.some((pattern) => pattern.test(name));

function AuthorList({ authors }) {
  return (
    <p className="publication-authors">
      {authors.map((author, index) => (
        <React.Fragment key={`${author}-${index}`}>
          {isLabAuthor(author) ? <strong className="lab-author">{author}</strong> : author}
          {index < authors.length - 1 ? ", " : ""}
        </React.Fragment>
      ))}
    </p>
  );
}

function PublicationLink({ href, children, icon = ExternalLink }) {
  if (!href) return null;
  return (
    <a className="publication-link" href={href} target="_blank" rel="noreferrer">
      {React.createElement(icon, { size: 14, "aria-hidden": true })} {children}
    </a>
  );
}

function PublicationCard({ publication, onTopic }) {
  const topics = getTopics(publication);
  const doiUrl = publication.doi
    ? publication.doi.startsWith("http") ? publication.doi : `https://doi.org/${publication.doi}`
    : publication.link?.includes("doi.org/") ? publication.link : null;

  return (
    <article className="publication-card">
      <div className="publication-tags" aria-label="Publication tags">
        <span className="publication-tag venue-tag">{categoryLabel(publication.type)}</span>
        {topics.map((topic) => (
          <button className="publication-tag topic-tag" key={topic} onClick={() => onTopic(topic)}>{topic}</button>
        ))}
        {publication.projectName && <span className="publication-tag project-tag">{publication.projectName}</span>}
      </div>
      <h3>{publication.title}</h3>
      <AuthorList authors={publication.authorsArr} />
      <p className="publication-venue"><span>{publication.venue}</span><span aria-hidden="true">·</span><span>{publication.year}</span></p>
      <div className="publication-links" aria-label={`Links for ${publication.title}`}>
        <PublicationLink href={publication.paper || publication.link} icon={FileText}>Paper PDF</PublicationLink>
        <PublicationLink href={publication.code} icon={Github}>Code</PublicationLink>
        <PublicationLink href={publication.project}>Project</PublicationLink>
        <PublicationLink href={doiUrl}>DOI</PublicationLink>
        <PublicationLink href={publication.slides} icon={FileText}>Slides</PublicationLink>
      </div>
    </article>
  );
}

export default function PublicationsPage() {
  const { rows, loading } = useOutletContext();
  const [category, setCategory] = useState("All");
  const [topic, setTopic] = useState("All");
  const [query, setQuery] = useState("");

  const categories = useMemo(() => ["All", ...new Set(rows.map((row) => categoryLabel(row.type)))], [rows]);
  const topics = useMemo(() => ["All", ...new Set(rows.flatMap(getTopics))], [rows]);
  const filtered = useMemo(() => rows.filter((publication) => {
    const haystack = `${publication.title} ${publication.authors} ${publication.venue}`.toLowerCase();
    return (category === "All" || categoryLabel(publication.type) === category)
      && (topic === "All" || getTopics(publication).includes(topic))
      && (!query.trim() || haystack.includes(query.trim().toLowerCase()));
  }), [rows, category, topic, query]);
  const grouped = useMemo(() => Object.entries(Object.groupBy(filtered, ({ year }) => year || "Undated"))
    .sort(([a], [b]) => Number(b) - Number(a)), [filtered]);

  useEffect(() => {
    if (!rows.length) return undefined;
    const schema = { "@context": "https://schema.org", "@graph": rows.map((pub) => ({
      "@type": "ScholarlyArticle", name: pub.title,
      author: pub.authorsArr.map((name) => ({ "@type": "Person", name })),
      datePublished: String(pub.year || ""), isPartOf: pub.venue || undefined,
      url: pub.paper || pub.link || undefined,
    })) };
    const script = document.createElement("script");
    script.id = "publications-structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.getElementById(script.id)?.remove();
    document.head.appendChild(script);
    return () => script.remove();
  }, [rows]);

  if (loading) return <main className="publications-page"><p>Loading publications…</p></main>;
  const clearFilters = () => { setCategory("All"); setTopic("All"); setQuery(""); };
  const hasFilters = category !== "All" || topic !== "All" || query;

  return (
    <>
      <main className="publications-page">
        <header className="publications-hero">
          <p className="publications-eyebrow">Research output</p>
          <h1>Publications</h1>
          <p>Peer-reviewed publications by the Systems and AI Lab</p>
        </header>

        <section className="publication-controls" aria-label="Publication filters">
          <label className="publication-search"><Search size={18} aria-hidden="true" /><span className="sr-only">Search publications</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search titles, authors, or venues" /></label>
          <label><span>Type</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span>Topic</span><select value={topic} onChange={(event) => setTopic(event.target.value)}>{topics.map((item) => <option key={item}>{item}</option>)}</select></label>
          {hasFilters && <button className="clear-filters" onClick={clearFilters}><X size={15} /> Clear</button>}
        </section>

        <div className="publication-summary"><strong>{filtered.length}</strong> {filtered.length === 1 ? "publication" : "publications"}<span><strong className="lab-author-key">Lab author</strong> highlighted</span></div>
        {grouped.map(([year, publications]) => (
          <section className="publication-year" key={year} aria-labelledby={`year-${year}`}>
            <div className="year-heading"><h2 id={`year-${year}`}>{year}</h2><span>{publications.length}</span></div>
            <div className="publication-list">{publications.map((publication) => <PublicationCard key={publication.id} publication={publication} onTopic={setTopic} />)}</div>
          </section>
        ))}
        {!grouped.length && <div className="publications-empty"><h2>No publications found</h2><p>Try a broader search or clear the current filters.</p><button onClick={clearFilters}>Clear filters</button></div>}
      </main>
      <Footer />
    </>
  );
}
