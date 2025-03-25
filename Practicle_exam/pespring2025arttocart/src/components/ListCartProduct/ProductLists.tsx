import React, { useEffect, useState } from "react"
import axios from "axios"
import { Button, Container, Dropdown, DropdownButton, Form, Table } from "react-bootstrap"


interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
}

interface Product {
    id: string;
    title: string;
    name: string;
    category: string;
    price: number;
    reviews: Review[];
    quantity: number;
}


export const ProductLists = ({ addToCart }: Product[] | any) => {

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
            <Table striped bordered>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rate</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>


                    {selectedProduct.map((product, index) => {

                        return (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                {/* Fix bug here */}
                                <td>{product.reviews.length > 0
                                    ? (product.reviews.reduce((stars, current) => stars + current.rating, 0) / product.reviews.length).toFixed(1)
                                    : "No rating"}
                                </td>

                                <td><Button onClick={() => addToCart(product)}>Add to cart</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}