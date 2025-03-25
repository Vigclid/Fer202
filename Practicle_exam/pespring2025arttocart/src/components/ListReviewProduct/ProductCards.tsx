import React, { useEffect, useState } from "react"
import axios from "axios"
import { Button, Card, Container, Dropdown, DropdownButton, Form, Table } from "react-bootstrap"


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
}


export const ProductCards = ({ addNewReview }: Product | any) => {

    const [products, setProducts] = useState<Product[]>([])
    const [selectedProduct, setSelectedProduct] = useState<Product[]>([]);

    useEffect(() => {
        const _fetchData = async () => {
            const response = await axios.get('http://localhost:9999/products').then(res => res.data);
            setProducts(response);
            setSelectedProduct(response);
        }

        _fetchData();

    }, [])


    const [selectedValue, setSelectedValue] = useState<string>("-- Select All Category --");

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (event.target.value) {
            setSelectedValue(event.target.value);
            switch (event.target.value) {
                case "-- Select All Category --":
                    setSelectedProduct(products);
                    break;
                case "beauty":
                    setSelectedProduct(products.filter((product) => product.category === "beauty"));
                    break;
                case "fragrances":
                    setSelectedProduct(products.filter((product) => product.category === "fragrances"));
                    break;
                default:
                    setSelectedProduct(products);
                    break;
            }
        }
    };
    return (
        <Container className="w-100">
            <Form.Group controlId="categorySelect" className="w-25 mb-3">
                <Form.Select value={selectedValue} onChange={handleSelect}>
                    <option value="-- Select All Category --">-- Select All Category --</option>
                    <option value="beauty">Beauty</option>
                    <option value="fragrances">Fragrances</option>
                </Form.Select>
            </Form.Group>
            <Container className="d-flex flex-wrap gap-3">
                {
                    selectedProduct.map((product) => {
                        return (
                            <Card key={product.id} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>Price: {product.price}</Card.Text>
                                    <Card.Text>Category: {product.category}</Card.Text>
                                    <Card.Text><b>Average Rate: {(product.reviews.reduce((total, review) => total + review.rating, 0)/product.reviews.length).toFixed(2)}</b></Card.Text>
                                    <Button variant="primary" className="" onClick={() => addNewReview(product)}>Add new preview</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </Container>
        </Container>
    )
}