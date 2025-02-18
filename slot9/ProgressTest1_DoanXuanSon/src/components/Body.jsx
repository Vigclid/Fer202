import { memo } from "react";
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Body = ({students}) => {

return (
    <Container fluid className="container-s">
      {/* Navigation breadcrumb */}
      <div className="py-1" style={{ backgroundColor: "grey", textAlign:"left", paddingLeft:"1vh", width:"8rem" }}>
        <span style={{ color: "orange" }}>
          Home  <span className="text-black"> / Student</span>
        </span>
      </div>

      {/* Heading */}
      <div className="mt-5 pt-5 fs-1 d-flex justify-content-center align-items-center fw-bold">
        Student Detail
      </div>

      {/* Danh sách sinh viên */}
      <div className="mb-5">
        <Row className="d-flex ps-5 ms-5 me-5 pe-5">
          {students.map((student, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="border border-dark">
                <Card.Img
                  variant="top"
                  src={student.image}
                  className="w-60 stu-img"
                  alt={student.name}
                />
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    {student.id}
                  </div>
                  <div className="name d-flex justify-content-between align-items-center ">
                    <div>{student.name}</div>
                    <div>{student.location}</div>
                  </div>
                  <div className="check-attendant d-flex justify-content-center align-items-center">
                    <div className="present pe-5 me-5">
                      <Form.Check
                        inline
                        type="radio"
                        id={`present-${index}`}
                        name={`attendance-${index}`}
                        label="Present"
                      />
                    </div>
                    <div className="absent ps-5 ms-5">
                      <Form.Check
                        inline
                        type="radio"
                        id={`absent-${index}`}
                        name={`attendance-${index}`}
                        label="Absent"
                      />
                    </div>
                  </div>
                  <div
                    className="submit d-flex justify-content-center align-items-center"
                    style={{ marginBottom: '20px' }}
                  >
                    <Button className="" type="submit" variant="warning">
                      Submit
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
)
}


export default memo(Body)