import { memo } from "react";
import { Container, Row, Col, Navbar, Nav, Form, FormControl } from "react-bootstrap";
const Header = () => {
    return (
        <>
 <Navbar style={{ backgroundColor: "#EACDAD" }} expand="lg" className="p-3">
      <Container>
        <Row className="w-100 align-items-center" >
          <Col md={9} className="d-flex align-items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/68/Logo_FPT_Education.png"
              alt="FPT Logo"
              className="me-4"
              style={{ height: "50px" }}
            />
            <Nav className="d-flex">
              <Nav.Link href="" className=""  style={{ color: "orange" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
                  alt="Trang Chủ"
                  className="me-2"
                  style={{ height: "24px" }}
                />
                Trang Chủ
              </Nav.Link>
              <Nav.Link href="" className=""  style={{ color: "orange" }} > 
                <img
                  src="https://cdn-icons-png.flaticon.com/512/12589/12589242.png"
                  alt="Ngành Học"
                  className="me-2"
                  style={{ height: "24px" }}
                />
                Ngành Học
              </Nav.Link>
              <Nav.Link href="" className=""  style={{ color: "orange" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3596/3596091.png"
                  alt="Tuyển Sinh"
                  className="me-2"
                  style={{ height: "24px" }}
                />
                Tuyển Sinh
              </Nav.Link>
              <Nav.Link href="" className=""  style={{ color: "orange" }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png"
                  alt="Sinh Viên"
                  className="me-2"
                  style={{ height: "24px" }}
                />
                Sinh Viên
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="">
            <Form className="d-flex w-100">
              <Form.Label className="me-2 mt-1">Search:</Form.Label>
              <FormControl type="text" placeholder="Tìm kiếm..." />
            </Form>
          </Col>
        </Row>
      </Container>
    </Navbar>
        </>
    )
}


export default memo(Header);