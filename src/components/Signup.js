import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
const [username,setUsername]=useState()
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    localStorage.setItem('username', usernameRef.current.value);
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }
  return (
    <>
      <Card className="border-danger Login-container">
        <Card.Body>
          <h5 className="text-danger mb-4">Sign Up</h5>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="email">Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                className="email-box"
              />
            </Form.Group>
            <Form.Group id="username">
              <Form.Label className="email">Username</Form.Label>
              <Form.Control
                type="text"
                ref={usernameRef}
                required
                className="email-box"
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label className="password">Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
                className="password-box"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label className="password">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
                className="password-box"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100 submit" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 Remember">
        Already have an account?{" "}
        <Link to="/login" className="text-danger">
          Log In
        </Link>
      </div>
    </>
  );
}
