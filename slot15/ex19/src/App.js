
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AnimalCard from './components/AnimalCard';
import animals from './data/animal';
import 'bootstrap/dist/css/bootstrap.min.css';

function showAdditional(additional) {
  const entries = Object.entries(additional);
  const strings = entries.map(([key, value]) => `${key}: ${value}`);
  const message = strings.join('\n');
  alert(message);
}

function App() {
  return (
    <Container className='my-5'>
      <Row>
        {animals.map((animal, index) => (
          <Col key={index} sm={4}>
            <AnimalCard
              image = {animal.image}
              name={animal.name}
              scientificName={animal.scientificName}
              size={animal.size}
              diet={animal.diet}
              additional={animal.additional}
              showAdditional={showAdditional}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;