import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap"
import { Link } from "react-router-dom";


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
    name: string;
}



export const Cart = ({ cart, removeFromCart , setCart }: Product | any) => {


    const [show, setShow] = useState(false);
    const [shippingAddress, setShippingAddress] = useState("");

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const modifiedCart = 
            {
                id: Math.floor(1000 + Math.random() * 9000).toString(),
                orderDate : new Date().toISOString(),
                products: cart.map((product: Product) => {
                    console.log(product);
                    return {
                        id: product.id,
                        name: product.title,
                        price: product.price,
                        quantity: product.quantity,
                    }
                }),
                shipAddress: shippingAddress
            };
        
        axios.post('http://localhost:9999/orders', modifiedCart)
            .then(res => {
                console.log(res.data);
                
            }
            )
            .catch(err => console.log(err)); 
        setCart([]);
        setShippingAddress("");
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 3000);
        }

    return (
        <Container fluid className="w-100" >
            <div className="d-flex justify-content-end mb-3">
                <Link to={`/orders`}>
                    <Button variant="success">Order History</Button>
                </Link>
            </div>


            <Container style={{ border: '1px solid black', height: 'auto', minHeight: '500px' }}>
                <h4 className="d-flex justify-content-center">Cart</h4>
                {cart.length === 0 ? (
                    <>
                    <b style={{ marginLeft: '12px' }}>Cart is empty</b>
                    <br></br>
                    {show && <b style={{ marginLeft: '12px', color: 'green' }}>Thank you for your order</b>}
                    <br></br>
                    {show && <b style={{ marginLeft: '12px' ,color: 'green' }}>Your order has been placed successfully</b>}
                    </>
                    
                ) : (
                    <Container className="m-2">
                        <Table className="mb-3">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((product: Product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.title}</td>
                                        <td>{product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => removeFromCart(product)}>Delete</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <Form onSubmit={handleOnSubmit}>
                            <Form.Group className="mb-3" controlId="shippingaddress">
                                <Form.Label>Shipping Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter shipping address"
                                    as="textarea"
                                    rows={3}
                                    value={shippingAddress}
                                    onChange={(e) => setShippingAddress(e.target.value)} // Lưu giá trị nhập vào state
                                />
                            </Form.Group>

                            <Button variant="warning" type="submit" className="d-flex justify-content-end ms-auto">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                )}
            </Container>
        </Container>
    )
}