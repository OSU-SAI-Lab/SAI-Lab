import Container from "react-bootstrap/Container";
import "../../assets/css/hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>

      <Container className="hero-content">
        <h1 className="hero-title">Systems & AI Lab</h1>
        <p className="hero-subtitle"><strong>The Ohio State University</strong></p>
        {/* <p className="hero-tagline">
          Advancing machine learning, distributed systems, and intelligent computation.
        </p> */}

        {/* <div className="hero-buttons">
          <button className="hero-btn">Learn More</button>
          <button className="hero-btn-outline">Our Research</button>
        </div> */}
      </Container>
    </header>
  );
}

export default Hero;
