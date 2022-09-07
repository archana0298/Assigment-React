import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Card className="border-danger Login-container">
        <Card.Body>
          <h5 className="text-danger mb-4">Password Reset</h5>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="email">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required className="email-box" />
            </Form.Group>
            <Button disabled={loading} className="w-100 submit" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/login" className="text-danger">Login</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2 Remember">
        Need an account? <Link to="/signup" className="text-danger">Sign Up</Link>
      </div>
    </>
  )
}
