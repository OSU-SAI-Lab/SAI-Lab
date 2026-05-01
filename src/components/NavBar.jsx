import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/navbar.css";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    // Close menu when route changes
    setMenuOpen(false);

    // On non-homepage routes, always show solid navbar
    if (!isHomePage) {
      setScrolled(true);
      return;
    }

    // On homepage, check scroll position
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, location.pathname]);

  const handleToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleCollapseToggle = (isOpen) => {
    setMenuOpen(isOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`lab-navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "drawer-open" : ""}`}
    >
      <Container className="navbar-container">
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          SAI Lab
        </Navbar.Brand>

        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          aria-expanded={menuOpen}
          className="navbar-toggler"
          onClick={handleToggle}
        />

        <Navbar.Collapse 
          id="basic-navbar-nav" 
          className="navbar-collapse"
          in={menuOpen}
          onToggle={handleCollapseToggle}
        >
          <Nav className="navbar-nav-center">
            <Nav.Link as={NavLink} to="/research" onClick={handleNavLinkClick}>
              Research
            </Nav.Link>
            <Nav.Link as={NavLink} to="/publications" onClick={handleNavLinkClick}>
              Publications
            </Nav.Link>

            <Nav.Link as={NavLink} to="/news-and-updates" onClick={handleNavLinkClick}>
              News & Updates
            </Nav.Link>


          <Nav.Link as={NavLink} to="/events" onClick={handleNavLinkClick}>
            Events
          </Nav.Link>

          <Nav.Link as={NavLink} to="/people">
              People
            </Nav.Link>


           <Nav.Link as={NavLink} to="/workingwithus" onClick={handleNavLinkClick}>
            Working With Us
          </Nav.Link>

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
