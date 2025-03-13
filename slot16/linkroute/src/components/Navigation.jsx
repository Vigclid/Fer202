import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/navigation.css';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
        <Nav className="me-auto custom-nav">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
