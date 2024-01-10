import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="loading..." />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest News</Button>{" "}
        <Marquee className="text-danger" speed={100} pauseOnHover={true}>
          Breakthrough Discovery in Renewable Energy Promises Sustainable Future
          Global Leaders Gather for Climate Summit to Address Urgent
          Environmental Concerns Tech Giants Unveil Revolutionary AI Technology
          Set to Transform Industries Landmark Study Reveals Surprising Health
          Benefits of Popular Superfood Space Exploration Milestone
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link href="#deets">
                  <FaCircleUser style={{ fontSize: "2rem" }} />
                </Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Button variant="secondary">Log Out</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Log In</Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};
export default Header;
