import Footer from "../Footer";
import "./DemosPage.css";

const demos = [
  {
    id: "bDBAo56cXro",
    title: "ICICLE No-Code Image Lab",
    url: "https://youtu.be/bDBAo56cXro?si=YmUny0DUsYAoZKiZ",
  },
  {
    id: "OXvWtaV7z8o",
    title: "ICICLE Intelligent Semantic Segmentation & Annotation",
    url: "https://youtu.be/OXvWtaV7z8o?si=LAf34tPMMsoKlnx5",
  },
  {
    id: "0HXfUMwbFJ0",
    title: "ICICLE Smart Labeling Service for Object Detection",
    url: "https://youtu.be/0HXfUMwbFJ0?si=h2i944FV7oQX8Y03",
  },
  {
    id: "uZuWKY4FVIE",
    title: "ICICLE Intelligent Edge Management Service Control Plane",
    url: "https://youtu.be/uZuWKY4FVIE?si=bsd8dHP3T5EhCaWj",
  },
  {
    id: "BnGy8Z9r-zE",
    title: "ICICLE Digital Agriculture Pipeline Live Demo at 2025 Farm Science Review (Y4)",
    url: "https://youtu.be/BnGy8Z9r-zE?si=C2rNZui5RW239-K1",
  },
];

export default function DemosPage() {
  return (
    <div className="demos-page">
      <section className="demos-hero">
        <p className="demos-eyebrow">Systems in action</p>
        <h1>Demos</h1>
        <p>
          Explore working demonstrations of our AI, edge computing, and digital
          agriculture research.
        </p>
      </section>

      <main className="demos-content">
        <div className="demos-intro">
          <div>
            <h2>Research you can see</h2>
            <p>
              These videos showcase tools and services developed through the
              ICICLE AI Institute and the Systems &amp; AI Lab.
            </p>
          </div>
          <span className="demos-count">{demos.length} videos</span>
        </div>

        <div className="demos-grid">
          {demos.map((demo, index) => (
            <article className="demo-card" key={demo.id}>
              <div className="demo-video">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${demo.id}`}
                  title={demo.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="demo-card-content">
                <span className="demo-number">
                  Demo {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{demo.title}</h2>
                <a href={demo.url} target="_blank" rel="noopener noreferrer">
                  Watch on YouTube <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
