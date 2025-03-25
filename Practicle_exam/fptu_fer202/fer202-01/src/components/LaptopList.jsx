import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Form, Link } from "react-router-dom";

export const LaptopList = () => {

    const [products, setProducts] = useState([])
    const [searched, setSearched] = useState([])
    const [search, setSearch] = useState()

    const handleChange = (e) => {
        
    };


    useEffect(() => {
        const _FetchData = async () => {
            const _data = await axios.get(`http://localhost:5000/Laptops`).then(res => res.data);
            setProducts(_data);
            setSearched(_data);
        }

        _FetchData();
    }, [])


    useEffect(()=> {
        const filteredItems = products.filter((product) => product.model.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase()));
        setSearched(filteredItems);


    },[search])

    
    return (
        <Container className="my-5">
            <h1 className="d-flex justify-content-center">Laptop List</h1>
            <Row>

                <input className="border mb-3" style={{borderRadius: '5px'}}
                    placeholder="Search by brand or model"
                    onChange={(e) => setSearch(e.target.value)}
                >
                </input>
            </Row>
            <Row>
                {searched && searched.map((product, index) => (
                    <Col
                        key={index}
                        xs={12} sm={6} md={4} lg={3}
                        className="mb-4 d-flex align-items-stretch"
                    >
                        <Card
                            className="w-100"
                            style={{ width: '300px', height: '350px' }}
                        >
                            <Card.Img
                                variant="top"
                                src={product.image}
                                style={{ height: '150px', objectFit: 'cover' }}
                            />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{product.brand} {product.model}</Card.Title>
                                <Card.Text style={{ flexGrow: 1 }}>
                                    <b>Year: </b> {product.year} <br />
                                    <b>Price: </b> {product.price}
                                </Card.Text>
                                <div className="d-flex">
                                    <Link to={`/product/${product.id}`}>
                                        <Button variant="primary" >View detail</Button>
                                    </Link>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    )
}