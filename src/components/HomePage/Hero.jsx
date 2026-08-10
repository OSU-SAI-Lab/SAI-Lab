import Container from "react-bootstrap/Container";
import "../../assets/css/hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <Container className="hero-content">
        <h1 className="hero-title">Systems & AI Lab</h1>
        <p className="hero-subtitle">
          <strong>The Ohio State University</strong>
        </p>
        <p className="hero-tagline">
          Advancing machine learning, distributed systems, and intelligent
          computation for real-world impact.
        </p>
      </Container>
    </header>
  );
}

export default Hero;
