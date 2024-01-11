import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const {newUser, setUser} = useContext(AuthContext);
  const handleNewUser = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    newUser(email,password)
    .then(user =>{
      setUser(user);
      form.reset();
    })
    .catch(error =>{
      console.error(error);
    })
  }
  return (
    <Container className="w-25 mx-auto">
      <h3>Please Register</h3>
      <Form onSubmit={handleNewUser}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Photo URL:</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmpassword"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
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
