import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap"

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
export const ReviewHistory = () => {

    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {

        const _fetchData = async () => {
            const response = await axios.get('http://localhost:9999/products').then(res => res.data);
            setReviews(response);
        }

        _fetchData();



    }, [])

    return (
        <Container>
            <h1>Review History</h1>

            <Table bordered hover striped>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Comment</th>
                        <th>Date</th>
                        <th>Reviewer Name</th>
                    </tr>
                    <tbody>

                    </tbody>
                </thead>

            </Table>
        </Container>
    )
}