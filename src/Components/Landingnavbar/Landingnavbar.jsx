import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Landingnavbar.css";
import { FaBars } from "react-icons/fa"; 
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Landingnavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="container">
        <Navbar.Brand href="/" className="navbar-brand">
          Elite Wheels
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle">
          <FaBars size={20} color="#D4AF37" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="navlinkcontainer">
            <NavDropdown title="Location" id="basic-nav-dropdown" className="nav-dropdown">
            <NavDropdown.Item href="/hyderabad"> Hyderabad</NavDropdown.Item>
              <NavDropdown.Item href="/vizag"> Vizag</NavDropdown.Item>
              <NavDropdown.Item href="/bengaluru">Bengaluru </NavDropdown.Item>
              <NavDropdown.Item href="/chennai"> Chennai</NavDropdown.Item>
              <NavDropdown.Item href="/mumbai"> Mumbai </NavDropdown.Item>
              <NavDropdown.Item href="/kolkata"> Kolkata</NavDropdown.Item>

              <NavDropdown.Item href="/delhi">Delhi</NavDropdown.Item>
        
              </NavDropdown>
            <Nav.Link href="/Signup" className="nav-link">Sign Up</Nav.Link>
            <Nav.Link href="/Login" className="nav-link">Log In</Nav.Link>






            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

