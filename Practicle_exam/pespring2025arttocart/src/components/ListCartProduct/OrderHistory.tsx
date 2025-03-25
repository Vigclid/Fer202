import React, { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap";
import axios from "axios"

interface Order {
    id: number;
    orderDate: string;
    products: Product[];
    shipAddress: string;
}
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



export const OrderHistory = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {



        const _fetchData = async () => {
            const response = await axios.get('http://localhost:9999/orders').then(res => res.data);
            setOrders(response);
        }

        _fetchData();

    }, [])

    return (
        <Container>
            <h1>Order History</h1>
            <Table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Ship Address</th>
                        <th>Product List</th>
                        <th></th>
                        <th></th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>

                    {orders.map((order, index) => {

                        return (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.orderDate}</td>
                                <td>{order.shipAddress}</td>
                                <td>
                                    <ol style={{ paddingLeft: '0px' }}>
                                        {order.products.map((product, index) => {
                                            return (
                                                <li key={index}>{product.name}</li>
                                            )
                                        })}
                                    </ol>
                                </td>

                                <td>
                                    <ol style={{ paddingLeft: '0px' , listStyle: 'none'}}>
                                        {order.products.map((product, index) => {
                                            return (
                                                <li key={index}>{product.price}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    <ol style={{ paddingLeft: '0px' , listStyle: 'none'}}>
                                        {order.products.map((product, index) => {
                                            return (
                                                <li key={index}>{product.quantity}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>
                                    <ol style={{ paddingLeft: '0px' , listStyle: 'none'}}>
                                        {order.products.map((product, index) => {
                                            return (
                                                <li key={index}>{Number(product.price) * Number(product.quantity)}</li>
                                            )
                                        })}
                                    </ol>
                                </td>
                            </tr>
                        )
                    })}

                </tbody>
            </Table>
        </Container>
    )
}