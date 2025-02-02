import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {memo } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const  NavBarComponents = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='custom-navbar'>
        <Container>
          <Navbar.Brand href="#home">Pizza House</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
        </Container>
      </Navbar>
     
    </>
  );
}

export default memo(NavBarComponents);