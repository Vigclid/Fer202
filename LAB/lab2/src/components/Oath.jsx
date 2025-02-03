import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import oath1 from '../assests/image/oath1.png'
import oath2 from '../assests/image/oath2.png'
import oath3 from '../assests/image/oath3.png'
import oath4 from '../assests/image/oath4.png'
import {memo} from 'react'
import { Container } from 'react-bootstrap';
function Oath() {

    const menuItems = [
        {
          image: oath1,
          title: "Contractor",
          description: `"Be controlled"`
        },
        {
          image: oath2,
          title: "Visionshaper",
          description: `"I see you"`
        },
        {
          image: oath3,
          title: "Jetstriker",
          description: `"Wind runner"`
        },
        {
            image: oath4,
            title: "Dawnwalker",
            description: `"Briliant light"`
        }
      ];

  return (
    <Container className="my-5">
      <h2 className="text-white text-left">Oath</h2>
      <Row>
        {menuItems.map((item, index) => (
          <Col md={3} key={index}>
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.title} />
              <Card.Body className="text-center">
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="dark" style={{ width: '100%' }}>
                  I Vow
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default memo(Oath);