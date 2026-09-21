import Papa from "papaparse";
import { Link } from "react-router-dom";
import csvText from "../../assets/csv_data/publication.csv?raw";
import { labMembers } from "../PeoplesPage/data";
import { projects } from "../ResearchPage/data";
import "./HomePreviews.css";

const { data: publicationRows } = Papa.parse(csvText, {
  header: true,
  skipEmptyLines: true,
  transformHeader: (header) => header.replace(/^\uFEFF/, "").trim(),
  transform: (value) => (typeof value === "string" ? value.trim() : value),
});

const featuredProjects = projects.filter((project) => project.status === "active").slice(0, 3);
const recentPublications = publicationRows
  .filter((publication) => publication.id && publication.title)
  .sort((first, second) => Number(second.year) - Number(first.year))
  .slice(0, 5);
const featuredPeople = [
  ...labMembers.filter((member) => member.role === "faculty"),
  ...labMembers.filter((member) => member.role === "phd"),
].slice(0, 4);

function SectionHeading({ id, title, link, label }) {
  return (
    <div className="home-preview-heading">
      <h2 id={id}>{title}</h2>
      <Link to={link}>{label}</Link>
    </div>
  );
}

export default function HomePreviews() {
  return (
    <main className="home-previews">
      <section className="home-preview-section" aria-labelledby="featured-research">
        <SectionHeading id="featured-research" title="Featured Research" link="/research" label="Explore all research" />
        <div className="research-preview-grid">
          {featuredProjects.map((project) => (
            <Link className="research-preview-card" to={`/research/${project.id}`} key={project.id}>
              <p className="preview-kicker">{project.researchAreas[0]}</p>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
              <span>View project <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-preview-section" aria-labelledby="recent-publications">
        <SectionHeading id="recent-publications" title="Recent Publications" link="/publications" label="View all publications" />
        <div className="publication-preview-list">
          {recentPublications.map((publication) => (
            <article className="publication-preview" key={publication.id}>
              <div>
                <p className="preview-kicker">{publication.year} · {publication.type || "Publication"}</p>
                <h3>{publication.title}</h3>
                <p>{publication.authors.replaceAll(";", ", ")}</p>
                <p className="publication-preview-venue">{publication.venue}</p>
              </div>
              {publication.link && <a href={publication.link} target="_blank" rel="noreferrer">Read paper <span aria-hidden="true">↗</span></a>}
            </article>
          ))}
        </div>
      </section>

      <section className="home-preview-section" aria-labelledby="people">
        <SectionHeading id="people" title="People" link="/people" label="Meet the full lab" />
        <div className="people-preview-grid">
          {featuredPeople.map((member) => {
            const content = <><img src={member.photo} alt="" /><div><h3>{member.name}</h3><p>{member.title}</p></div></>;
            return member.website ? (
              <a className="person-preview-card" href={member.website} target="_blank" rel="noreferrer" key={member.id} aria-label={`View ${member.name}'s profile`}>
                {content}
              </a>
            ) : (
              <Link className="person-preview-card" to="/people" key={member.id}>{content}</Link>
            );
          })}
        </div>
      </section>

      <section className="home-preview-section openings-preview" aria-labelledby="openings">
        <div>
          <p className="preview-kicker">Join the lab</p>
          <h2>Openings</h2>
          <p>Explore research opportunities for undergraduate, master’s, and K–12 students, along with expectations for working with the lab.</p>
        </div>
        <Link className="openings-link" to="/workingwithus">Explore opportunities <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}
