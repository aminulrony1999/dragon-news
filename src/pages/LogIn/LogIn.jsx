import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {
  const {setUser, logIn} = useContext(AuthContext);
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    logIn(email,password)
    .then(user => {
      setUser(user);
      console.log(user);
      form.reset();
    })
    .catch(error =>{
      console.error(error.message);
    })
  }
  return (
    <Container className="w-25 mx-auto">
      <h3>Please Log In</h3>
      <Form onSubmit={handleLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Form.Text className="text-secondary">Don't have an account? <Link to="/register">Register</Link></Form.Text>
        <Form.Text className="text-success"> HoiHoiHoi</Form.Text>
        <Form.Text className="text-danger"> HueHueHue</Form.Text>
      </Form>
    </Container>
  );
};

export default LogIn;
