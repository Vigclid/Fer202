import axios from "axios";
import React, { useReducer, useState, useEffect } from "react";
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



export const Review = ({ preview }: Product | any) => {

    const formReducer = (state: typeof initialState, action: any) => {
        switch (action.type) {
            case "SET_FIELD":
                return { ...state, [action.field]: action.value };
            case "SUBMIT":
                return { ...state, isSubmitted: true };
            default:
                return state;
        }
    };

    const initialState = { name: "", comment: "", rating: 3, isSubmitted: false };
    const [state, dispatch] = useReducer(formReducer, initialState);

    const [errors, setErrors] = useState<any>({});

    const handleValidation = () => {
        const newErrors: any = {};
        if (!state.name) newErrors.name = "Reviewer name is required";
        if (!state.comment) newErrors.comment = "Comment is required";


        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        dispatch({ type: "SET_FIELD", field: name, value });
    };

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        handleValidation();

        if (handleValidation()) {
            const newReview = {
                rating: state.rating,
                comment: state.comment,
                date: new Date().toISOString(),
                reviewerName: state.name
            };

            const updatedProduct = {
                ...preview,
                reviews: [...preview.reviews, newReview]
            };

            axios.put(`http://localhost:9999/products/${preview.id}`, updatedProduct)
                .then(res => {
                    console.log(res.data);
                    dispatch({ type: "SUBMIT" });
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <Container fluid className="w-100" >
            <div className="d-flex justify-content-end mb-3">
                <Link to={`/reviews`}>
                    <Button variant="success">Show Review List</Button>
                </Link>
            </div>


            <Container style={{ border: '1px solid black', height: 'auto', minHeight: '500px' }}>
                <h4 className="d-flex justify-content-center">Reviews</h4>

                {preview !== undefined ? (
                    <>
                        <Container className="lh-1 border-bottom">
                            <h5><b>Reviews details:</b></h5>
                            <p>Product Id: {preview.id}</p>
                            <p>Title: {preview.title}</p>
                            <p>Category: {preview.category}</p>
                            <p>Price: {preview.price}</p>
                        </Container>
                        <Container>
                            <h5><b>Add a new review:</b></h5>
                            <Form onSubmit={handleOnSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Reviewer name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Enter reviewer name"
                                        value={state.name}
                                        onChange={handleChange}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="comment"
                                        placeholder="Enter comment"
                                        value={state.comment}
                                        onChange={handleChange}
                                        isInvalid={!!errors.comment}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.comment}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3 inline">
                                    <div className="d-flex gap-2">
                                        <Form.Label>Rating: </Form.Label>

                                        {[1, 2, 3, 4, 5].map((value) => (
                                            <Form.Check
                                                key={value}
                                                type="radio"
                                                name="rating"
                                                label={value}
                                                value={value}
                                                onChange={handleChange}
                                                inline
                                            />
                                        ))}
                                    </div>
                                    
                                </Form.Group>
                                <Button variant="primary" type="submit" className="my-2">Submit</Button>
                            </Form>
                        </Container>

                    </>
                ) : "No product selected"}

            </Container>
        </Container>
    )
}