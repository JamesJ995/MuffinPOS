import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
function MainNav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/orderHistory">Order History</Nav.Link>
                <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/signup">Signup</Nav.Link>
              <Nav.Link href="/login">
              Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    }
  }

  return (
    <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">TOAST POS</Navbar.Brand>
            {showNavigation()}
            </Container>
    </Navbar>
    
  );
}

export default MainNav;
