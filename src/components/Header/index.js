import React from "react";

import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "./../../images/logo.svg";
import "./styles.scss";

const Header = () => {
  const githubPagesUrl = "/kleck-client/#";

  return (
    <Navbar expand="md" className="navbar navbar-expand-lg mb-5 navbar-dark" >
      <Container fluid className="d-flex justify-content-center">
        <Nav.Link href={githubPagesUrl + "/"}>
          <img className="header-logo" src={logo} alt="Kleck" />
        </Nav.Link>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4 " navbar-dark>
            <Nav.Link href="#mission">Mission</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Header;
