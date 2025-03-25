import { Card, Row, Col } from 'react-bootstrap';

export const News = ({ newLists }) => {
  return (
    <Row>
      {newLists.map((item) => (
        <Col key={item.id} xs={12} sm={6} md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src={item.images} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Link href='/'>{`youtube.com`}</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};
