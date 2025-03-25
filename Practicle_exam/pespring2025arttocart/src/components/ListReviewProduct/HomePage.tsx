
import { Col, Container, Row } from 'react-bootstrap';
import { Review } from './Review';
import { ProductCards } from './ProductCards';
import { useState } from 'react';


interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
}

interface Product {
    id: string;
    title: string;
    category: string;
    price: number;
    reviews: Review[];
    quantity: number;
    name : string;
}
export const HomePage = () => {
    
    const [preview, setPreview] = useState<Product>();
    const addNewReview = (product : Product) => {
        setPreview(product);
    }
    
    return (
        <>
              <h1 className='d-flex justify-content-center'>Shopping System</h1>
              <Container fluid>
                <Row>
                  <Col xs={12} md={8} lg={8}>  
                    <ProductCards addNewReview={addNewReview}/>
                  </Col>
                  <Col xs={12} md={4} lg={4}>  
                    <Review preview={preview}/>
                  </Col>
                </Row>
              </Container>
        
        </>
    )
}