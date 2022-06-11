import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

function Navbarr() {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <Navbar bg="light" expand="lg" className="navbar-main">
      <Container>
        <Navbar.Brand
          className="navbar-brand"
          to="/"
          style={{
            cursor: "pointer",
            marginRight: "9vmax",
          }}
        >
          An WEB PORTAL
          <br />
          for Mobile Phones
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{ color: "#2f2a2a" }}
              className="nav-item"
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              eventKey="1"
              style={{ color: "#2f2a2a" }}
              as={Link}
              to="/phones"
            >
              Phones
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              eventKey="2"
              style={{ color: "#2f2a2a" }}
              as={Link}
              to="/search"
            >
              Search
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              eventKey="3"
              style={{ color: "#2f2a2a" }}
              as={Link}
              to="/compare"
            >
              Comparison
            </Nav.Link>
            <Nav.Link
              className="nav-item"
              eventKey="4"
              style={{ color: "#2f2a2a" }}
              as={Link}
              to="/about"
            >
              About Us
            </Nav.Link>

            {!isAuthenticated && (
              <Nav.Link
                className="nav-item"
                eventKey="5"
                style={{ color: "#2f2a2a" }}
                as={Link}
                to="/login"
              >
                Log in
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
