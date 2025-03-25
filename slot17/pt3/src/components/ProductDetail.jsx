import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/Products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return (
      <Container className="text-center mt-4">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card>
        {product.image && (
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{ height: "300px", objectFit: "cover",  width : "600px"}}
          />
        )}
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          {product.price && (
            <Card.Text>
              <strong>Price: </strong>
              {product.price}
            </Card.Text>
          )}
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};
