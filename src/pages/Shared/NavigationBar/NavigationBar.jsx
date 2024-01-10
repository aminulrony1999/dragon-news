import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

const NavigationBar = () => {
  const user = useContext(AuthContext);
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link to="/">Home</Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && <FaCircleUser style={{ fontSize: "2rem" }} />}
              {user ? (
                <Button variant="secondary">Log Out</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Log In</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
