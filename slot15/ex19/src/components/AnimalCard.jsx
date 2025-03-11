import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../App.css'; // Nhớ import file CSS

export default function AnimalCard({
  image,
  name,
  scientificName,
  size,
  diet,
  additional,
  showAdditional,
}) {
  return (
    <Card className="card">
      <Card.Img variant="top" src={image} alt={name} className="card-img-top" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Subtitle className="card-subtitle">{scientificName}</Card.Subtitle>
        <Card.Text className="card-text">
          <strong>Size:</strong> {size} cm
          <br />
          <strong>Diet:</strong>
          <ul>
            {diet.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card.Text>
        <Button variant="warning" onClick={() => showAdditional(additional)}>
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}
