import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL:</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="photo url"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmpassword"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" name="accept" label="Accept's terms and conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <Form.Text className="text-secondary">
          Already have an account? <Link to="/register">Sign In</Link>
        </Form.Text>
        <Form.Text className="text-success"> HoiHoiHoi</Form.Text>
        <Form.Text className="text-danger"> HueHueHue</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
