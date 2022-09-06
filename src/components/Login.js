import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Row } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "../css/index.css";
import "../../src/css/index.css";
export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Card className="border-danger Login-container">
        <Card.Body>
          <h5 className="mb-4 text-danger">ADMIN LOGIN</h5>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="email">Email Address</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="Enter email ID"
                required
                className="email-box"
              />
            </Form.Group>
           
            <Form.Group id="password">
              <Form.Label className="password">Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="********"
                required
                className="password-box"
              />
            </Form.Group>
            <div className="row justify-content-center">
              <div className="col-6 text-center mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input mt-2"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label Remember" for="exampleCheck1">
                    Remember me
                  </label>   
              </div>

              <div className="col-6 mb-3 text-end">
                <Link to="/forgot-password" className="Remember text-danger">
                  Forgot Your Password?
                </Link>
              </div>
            </div>
            <Button
              disabled={loading}
              className="w-100 submit"
              type="submit"
            >
              LOGIN
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center text-danger mt-2 Remember">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
