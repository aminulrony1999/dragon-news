import React, { useContext } from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaSquareTwitter,
} from "react-icons/fa6";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";
import { AuthContext } from "../../../Provider/AuthProvider";
const RightNav = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      {!user && (
        <>
          <h4>Login With</h4>
          <Button className="mb-2" variant="outline-primary">
            <FaGoogle /> Login with Google
          </Button>
          <Button variant="outline-secondary">
            <FaFacebook /> Login with Facebook
          </Button>
        </>
      )}
      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup.Item>
          <FaFacebookF /> Facebook
        </ListGroup.Item>
        <ListGroup.Item>
          <FaSquareTwitter /> Twitter
        </ListGroup.Item>
        <ListGroup.Item>
          <FaInstagram /> Instagram
        </ListGroup.Item>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
