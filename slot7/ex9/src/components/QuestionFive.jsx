import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const QuestionFive = () => {
  return (
    <Container fluid className="bg-orange p-4">
      <Row className="justify-content-center">
        <Col xs={6} className="bg-light mt-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
            alt="FPT Education Logo"
            className="w-100"
          />
        </Col>
      </Row>

      {/* Navigation Links */}
      <Row className="py-3">
        <Col className="d-flex justify-content-center">
          <a href="#" className="text-decoration-none text-white mx-3">
            Home
          </a>
          <a href="#" className="text-decoration-none text-white mx-3 active">
            About
          </a>
          <a href="#" className="text-decoration-none text-white mx-3 disabled">
            Contact
          </a>
        </Col>
      </Row>
      <Container className="text-center mt-5 mb-5 bg-light text-black" fluid>
        <Row className="mt-4 mb-4">
          <h1 className="fw-bold">About</h1>
        </Row>
        <Row className="mt-4 mb-4">
          <p>This is the about of the website</p>
        </Row>
        <Row className="mt-4 mb-4">
          <h1 className="fw-bold">Contact</h1>
        </Row>
        <Row className="mt-4 mb-4">
          <p>For any inquiries, please contact us at example@example.com</p>
        </Row>
      </Container>

      {/* Footer Section */}
      <Container fluid className="bg-f2ca81 text-center text-white mt-3 mb-3 py-4">
        <Row>
          <div>&copy; 2023 Website. All rights reserved.</div>
        </Row>
      </Container>
    </Container>
  );
};

export default QuestionFive;
