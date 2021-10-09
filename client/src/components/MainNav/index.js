import React from "react";
import Auth from "../../utils/auth";
//import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import metadata from './../../metadata.json';

const style = {
  sticky: {
    top:0,
    padding: "10px 0px 10px 20px",
    position:"fixed",
    width: "100%",
    zIndex: 33
  },
  logo: {
    zIndex: 33
  }
}

function MainNav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Nav className="me-auto align-items-end">
          <Nav.Link href="/orderHistory">Order History</Nav.Link>
          <Nav.Link href="/" onClick={() => Auth.logout()}>Logout</Nav.Link>
        </Nav>
      );
    } else {
      return (
        <Navbar bg="light" expand="lg" flex="d-flex">
       
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
       
        </Navbar>
      );
    }
  }

  return (
    <Navbar bg="light" expand="lg" style={style.sticky}>
       
            <Navbar.Brand href="/">TOAST POS | <small className="muted font-weight-light"><em>{`Version ${metadata.buildMajor}.${metadata.buildMinor}.${metadata.buildRevision}`}</em></small></Navbar.Brand>
            {showNavigation()}
        
    </Navbar>
  );
}

export default MainNav;
