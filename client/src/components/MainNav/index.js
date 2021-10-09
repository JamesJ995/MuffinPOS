import React from "react";
import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

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
