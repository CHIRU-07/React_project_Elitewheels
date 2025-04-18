import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Usernavbar.css";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { auth } from "../../Firebaseconfig";
import { signOut } from "firebase/auth";

export default function Usernavbar() {

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully.");
      navigate("/"); // Redirect to landing page
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container className="container">
        <Navbar.Brand href="/Home" className="navbar-brand">
          Elite Wheels
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle">
          <FaBars size={20} color="#D4AF37" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="navlinkcontainer">
            <Nav.Link href="/Home" className="nav-link">Home</Nav.Link>

            <Nav.Link href="/blog" className="nav-link">Blog</Nav.Link>
            <NavDropdown title="Location" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="/hyderabad"> Hyderabad</NavDropdown.Item>
              <NavDropdown.Item href="vizag"> Vizag</NavDropdown.Item>
              <NavDropdown.Item href="bengaluru">Bengaluru </NavDropdown.Item>
              <NavDropdown.Item href="chennai"> Chennai</NavDropdown.Item>
              <NavDropdown.Item href="mumbai"> Mumbai </NavDropdown.Item>
              <NavDropdown.Item href="kolkata"> Kolkata</NavDropdown.Item>

              <NavDropdown.Item href="delhi">Delhi</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/rent" className="nav-link">Rent a Car</Nav.Link>

            {/* 
            <NavDropdown title="Profile" id="basic-nav-dropdown" className="nav-dropdown">
          
            <NavDropdown.Item href="/profilepage"> My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/mybooking">My Bookings</NavDropdown.Item>
              <NavDropdown.Item href="" onClick={handleLogout}>Log Out</NavDropdown.Item>
           </NavDropdown> */}
            <NavDropdown
              title={
                <>
                <FaUserCircle size={28} className="me-2"/>Profile
                </>
              }
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item href="/profilepage">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="/mybooking">My Bookings</NavDropdown.Item>
              <NavDropdown.Item href="" onClick={handleLogout}>Log Out</NavDropdown.Item>
            </NavDropdown>

            {/* <Nav.Link href="" className="nav-link" onClick={handleLogout}>Log Out</Nav.Link> */}









          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

