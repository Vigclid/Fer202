import axios from "axios";
import React, { useReducer , useState , useEffect} from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export const ProductList = () => {


    const [products, setProducts] = useState([])

    useEffect (()=> {
        const _FetchData = async() => {
            const _data = await axios.get(`http://localhost:5000/Products`).then(res => res.data);
            setProducts(_data);
        }

        _FetchData();
    },[])

    return (
        <Container className="my-5">
      <Row>
        {products.map((product, index) => (
          <Col 
            key={index} 
            xs={12} sm={6} md={4} lg={3} 
            className="mb-4 d-flex align-items-stretch"
          >
            <Card 
              className="w-100" 
              style={{ width: '300px', height: '300px' }} 
            >
              <Card.Img 
                variant="top" 
                src={product.image} 
                style={{ height: '150px', objectFit: 'cover' }} 
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{ flexGrow: 1 }}>
                  {product.description}
                </Card.Text>
                <Link to= {`/product/${product.id}`}>
                    <Button variant="primary">Buy Now - {product.price}</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        </Container>
        
    )
}