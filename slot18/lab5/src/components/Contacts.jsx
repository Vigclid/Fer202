import React, { useReducer, useState } from 'react';
import { Form, Button, Row, Col, InputGroup, FormControl, Alert } from 'react-bootstrap';

const initialState = {
  firstName: '',
  lastName: '',
  username: '',
  city: '',
  state: '',
  zip: '',
  isChecked: false,
  errors: {}
};

// Reducer function to manage form state and validation
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value
      };
    case 'TOGGLE_CHECKBOX':
      return {
        ...state,
        isChecked: action.value
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors
      };
    default:
      return state;
  }
};

const validateForm = (state) => {
  const errors = {};
  if (!state.firstName) errors.firstName = 'First Name is required';
  if (!state.lastName) errors.lastName = 'Last Name is required';
  if (!state.username) errors.username = 'Username is required';
  if (!state.city) errors.city = 'City is required';
  if (!state.state) errors.state = 'State is required';
  if (!state.zip) errors.zip = 'Zip code is required';
  if (!state.isChecked) errors.isChecked = 'You must agree to the terms';

  return errors;
};

export const Contacts = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleCheckboxChange = (e) => {
    dispatch({
      type: 'TOGGLE_CHECKBOX',
      value: e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(state);

    if (Object.keys(errors).length === 0) {
      setSubmitSuccess(true);
    } else {
      dispatch({
        type: 'SET_ERRORS',
        errors: errors
      });
      setSubmitSuccess(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="my-5 w-75 mx-auto d-flex flex-column justify-content-center align-items-center">
        {submitSuccess && <Alert variant="success">Form submitted successfully!</Alert>}

        <Row className="mb-3 w-100">
            <Col>
            <Form.Control
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
                placeholder="First Name"
                isInvalid={!!state.errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
                {state.errors.firstName}
            </Form.Control.Feedback>
            </Col>
            <Col>
            <Form.Control
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                isInvalid={!!state.errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
                {state.errors.lastName}
            </Form.Control.Feedback>
            </Col>
            <Col>
            <InputGroup>
                <InputGroup.Text>@</InputGroup.Text>
                <FormControl
                type="text"
                name="username"
                value={state.username}
                onChange={handleChange}
                placeholder="Username"
                isInvalid={!!state.errors.username}
                
                />
                <Form.Control.Feedback type="invalid">
                {state.errors.username}
                </Form.Control.Feedback>
            </InputGroup>
            </Col>
        </Row>

        <Row className="mb-3 w-100">
            <Col>
            <Form.Control
                type="text"
                name="city"
                value={state.city}
                onChange={handleChange}
                placeholder="City"
                isInvalid={!!state.errors.city}
            />
            <Form.Control.Feedback type="invalid">
                {state.errors.city}
            </Form.Control.Feedback>
            </Col>
            <Col>
            <Form.Control
                type="text"
                name="state"
                value={state.state}
                onChange={handleChange}
                placeholder="State"
                isInvalid={!!state.errors.state}
            />
            <Form.Control.Feedback type="invalid">
                {state.errors.state}
            </Form.Control.Feedback>
            </Col>
            <Col>
            <Form.Control
                type="text"
                name="zip"
                value={state.zip}
                onChange={handleChange}
                placeholder="Zip"
                isInvalid={!!state.errors.zip}
            />
            <Form.Control.Feedback type="invalid">
                {state.errors.zip}
            </Form.Control.Feedback>
            </Col>
        </Row>

        <Row className="mb-3 w-100">
            <Col xs="auto" className="d-flex align-items-center">
            <Form.Check
                type="checkbox"
                label="Agree to terms"
                checked={state.isChecked}
                onChange={handleCheckboxChange}
                isInvalid={!!state.errors.isChecked}
            />
            <Form.Control.Feedback type="invalid">
                {state.errors.isChecked}
            </Form.Control.Feedback>
            </Col>
        </Row>

        <Button type="submit" variant="primary" className="mt-3">Submit</Button>
        </Form>

  );
};


