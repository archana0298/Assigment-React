import React, {useRef, useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout ,addUsername} = useAuth()
  console.log(currentUser)

  const usernameRef = useRef();
  const history = useHistory()
  localStorage.getItem('username');
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
      localStorage.removeItem('username');

    } catch {
      setError("Failed to log out")
    }
  }
  const promises = []
  
  return (
    <>
      <Card className="border-danger Login-container">
        <Card.Body>
          <h5 className="mb-4 text-danger">Profile</h5>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <br />
          <strong>Username:</strong> {localStorage.getItem('username')}
          <Link to="/update-profile" className="btn w-100 mt-3 submit text-white">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout} className="text-danger">
          Log Out
        </Button>
      </div>
    </>
  )
}
