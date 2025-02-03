import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {memo } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const  NavBarComponents = () => {
  return (
    <>
    <Navbar className="custom-navbar" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Deepwoken</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Guild</Nav.Link>
          <Nav.Link href="#features">About Us</Nav.Link>
          <Nav.Link href="#pricing">Call the Depths</Nav.Link>
        </Nav>
        <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 bg-white text-dark" 
          aria-label="Search"
          
        />
          <Button variant="danger"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </Form>
      </Container>
    </Navbar>
  </>
  );
}

export default memo(NavBarComponents);