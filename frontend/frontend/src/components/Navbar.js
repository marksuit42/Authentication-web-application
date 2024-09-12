// components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const NavigationBar = () => {
  const navigate = useNavigate();

  // Check if the user is signed in (i.e., a token exists)
  const isSignedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/'); // Redirect to the login page
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            {isSignedIn ? (
              <Button variant="outline-light" onClick={handleLogout}>Logout</Button>
            ) : (
              <Nav.Link as={Link} to="/">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
