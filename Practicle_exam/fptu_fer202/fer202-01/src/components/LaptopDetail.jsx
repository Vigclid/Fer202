import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Card, Button, Spinner } from "react-bootstrap";
import axios from "axios";

export const LaptopDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/Laptops/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return (
      <Container className="text-center mt-4">
          <h1>404 not found</h1>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Card className="w-50">
        {product.image && (
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{ height: "300px", objectFit: "cover",  width : "600px"}}
          />
        )}
        <Card.Body className="d-flex flex-column">
                <Card.Title>{product.brand} {product.model}</Card.Title>
                <Card.Text style={{ flexGrow: 1 }}>
                  <b>Year: </b> {product.year} <br />
                  <b>Price: </b> {product.price}
                </Card.Text>
                <div>
                    <Link to= {`/home`}>
                        <Button variant="primary" >Back to laptop list</Button>
                    </Link>
                </div>
              </Card.Body>
      </Card>
    </Container>
  );
};
