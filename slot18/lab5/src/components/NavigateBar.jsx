
import { Link } from "react-router-dom"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavigateBar = () => {
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">Home</Link> 
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link">About</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/news" className="nav-link">News</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/quiz" className="nav-link">Quiz</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contacts" className="nav-link">Contacts</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}