import React from "react";
import Header from "../pages/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftNav from "../pages/Shared/Leftnav/LeftNav";
import RightNav from "../pages/Shared/RightNav/RightNav";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}><LeftNav></LeftNav></Col>
          <Col lg={6}><h2 className="text-center">Main content coming soon</h2></Col>
          <Col lg={3}><RightNav></RightNav></Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
