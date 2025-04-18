import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Adminnavbar.css";
import { useNavigate } from "react-router-dom";
import { FaBars, FaHome, FaCar, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { signOut } from "firebase/auth";
import { auth } from "../../Firebaseconfig";




export default function Adminnavbar() {
  const navigate = useNavigate();


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
        <Navbar.Brand href="/" className="navbar-brand">
          Elite Wheels
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="nav-toggle">
          <FaBars size={20} color="#D4AF37" />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" id="navlinkcontainer">
            
            <Nav.Link href="/Adminhome" className="nav-link d-flex align-items-center">
              <FaHome className="me-1" size={20}/> Home
            </Nav.Link>

            {/* Bookings */}
            <Nav.Link href="/login" className="nav-link d-flex align-items-center">
              <MdLibraryBooks className="me-1" size={20}/> Bookings
            </Nav.Link>

            {/* Add Cars */}
            <Nav.Link href="/Addcars" className="nav-link d-flex align-items-center">
              <FaCar className="me-1" size={20}/> Add Cars
            </Nav.Link>

            {/* Profile Dropdown */}
            <NavDropdown
              title={ <FaUserCircle size={24} />}
              id="basic-nav-dropdown"
              className="nav-dropdown"
              align="end"
            >
              {/* My Profile */}
              <NavDropdown.Item href="" className="d-flex align-items-center">
                <FaUserCircle className="me-1" size={20}/> My Profile
              </NavDropdown.Item>

              {/* Log Out */}
              <NavDropdown.Item href="" className="d-flex align-items-center" onClick={handleLogout}>
                <FaSignOutAlt className="me-1" size={20} /> Log Out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
