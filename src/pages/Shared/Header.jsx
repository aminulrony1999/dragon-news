import React from "react";
import logo from "../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
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
        <Button className="mb-1 py-1 px-1" variant="danger">Latest News</Button>{" "}
        <Marquee className="text-danger" speed={100} pauseOnHover={true}>
          Breakthrough Discovery in Renewable Energy Promises Sustainable Future
          Global Leaders Gather for Climate Summit to Address Urgent
          Environmental Concerns Tech Giants Unveil Revolutionary AI Technology
          Set to Transform Industries Landmark Study Reveals Surprising Health
          Benefits of Popular Superfood Space Exploration Milestone
        </Marquee>
      </div>
    </Container>
  );
};
export default Header;
