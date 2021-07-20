import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./../../images/logo.svg";

import "./styles.scss";

const Header = () => {
  const githubPagesUrl = "/kleck-client/#";

  return (
    <Navbar expand="md">
      <Container fluid>
        <Navbar.Brand href={githubPagesUrl + "/"}>
          <img className="header-logo" src={logo} alt="Kleck" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4">
            <Nav.Link href="#mission">Mission</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
