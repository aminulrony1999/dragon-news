import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";

const NavigationBar = () => {
  const {user,setUser, logOut} = useContext(AuthContext);
  const handleLogOut = ()=>{
    logOut().then(()=>{
      setUser(null);
    })
  }
  return (
    <Container>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="nav-link" to="/category/0">Home</Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && <FaCircleUser style={{ fontSize: "2rem" }} />}
              {user ? (
                <Button className="ml-3" onClick={handleLogOut}  variant="secondary">Log Out</Button>
              ) : (
                <>
                <Link to="/login">
                  <Button variant="secondary">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button className="ml-3" variant="secondary">Register</Button>
                </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
