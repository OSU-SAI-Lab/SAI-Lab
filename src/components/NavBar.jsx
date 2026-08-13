import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../assets/css/navbar.css";

const navigationItems = [
  { label: "Research", to: "/research" },
  { label: "Publications", to: "/publications" },
  { label: "News & Events", to: "/news-and-updates" },
  { label: "People", to: "/people" },
  { label: "Working With Us", to: "/workingwithus" },
];

function NavBar() {
  const location = useLocation();
  const [menuState, setMenuState] = useState({ open: false, path: location.pathname });
  const menuOpen = menuState.open && menuState.path === location.pathname;
  const closeMenu = () => setMenuState({ open: false, path: location.pathname });

  const handleToggle = (nextOpen) => {
    setMenuState({ open: nextOpen, path: location.pathname });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Escape" && menuOpen) {
      closeMenu();
      document.querySelector(".lab-navbar .navbar-toggler")?.focus();
    }
  };

  return (
    <Navbar
      as="header"
      expand="lg"
      fixed="top"
      expanded={menuOpen}
      onToggle={handleToggle}
      onKeyDown={handleKeyDown}
      className={`lab-navbar ${menuOpen ? "drawer-open" : ""}`}
    >
      <Container className="navbar-container">
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand" onClick={closeMenu}>
          SAI Lab
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="navbar-toggler"
        />

        <Navbar.Collapse id="primary-navigation" className="navbar-collapse">
          <Nav as="nav" aria-label="Primary navigation" className="navbar-nav-center">
            {navigationItems.map(({ label, to }) => (
              <Nav.Link key={to} as={NavLink} to={to} onClick={closeMenu}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
