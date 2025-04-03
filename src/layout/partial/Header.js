import React from "react";
import { Nav, Navbar, NavbarToggle } from "react-bootstrap";
import logo from "../../assets/img/images.jpeg";
export const Header = () => {
  return (
    <Navbar collapseOnSelect bg="primary" variant="dark" expand="md">
      <Navbar.Brand>
        <img src={logo} alt="logo" width="50px"></img>
      </Navbar.Brand>
      <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-50px">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/dashboard">Tickets</Nav.Link>
          <Nav.Link href="/dashboard">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
