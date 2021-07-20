import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import logo from "./../../images/logo.svg";
import { FaUserCircle } from "react-icons/fa";


import "./styles.scss";

import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";
import { history } from "../../helpers/history";

const Header = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [showAdminPage, setShowAdminPage] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      setShowAdminPage(currentUser.roles.includes("ROLE_ADMIN"));
    }
  }, [currentUser]);

  const logOut = () => {
    dispatch(logout());
  };

  const githubPagesUrl = "/kleck-client/#"; 

  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        {isLoggedIn ? (
          <Navbar.Brand href={githubPagesUrl + "/user"}>Maurya</Navbar.Brand>
        ) : (
          <Navbar.Brand href={githubPagesUrl + "/"}>Maurya</Navbar.Brand>
        )}

        <img className="header-logo" src={logo} alt="Maurya" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4">
            {showAdminPage && <Nav.Link href={githubPagesUrl + "/admin"}>Admin View</Nav.Link>}
            <FaUserCircle size="30" color="#888" />
            {currentUser ? (
              <>
                <NavDropdown
                  title={currentUser.username}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href={githubPagesUrl + "/profile"}>
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logOut} href={githubPagesUrl + "/"}>
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Nav.Link href={githubPagesUrl + "/login"}>Log In</Nav.Link>
                <Nav.Link href={githubPagesUrl + "/register"}>Register</Nav.Link>
              </>
            )}
          </Nav>

        </Navbar.Collapse>
      </Container>

    </Navbar>
  );
};

export default Header;
