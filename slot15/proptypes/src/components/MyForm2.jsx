import React, { useReducer , useState} from "react";
import { Button, Form, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import './css/MyForm2.css';

const initialState = { name: "", age: "", email: "", phone: "", terms: false, isSubmitted: false };

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SUBMIT":
      return { ...state, isSubmitted: true };
    default:
      return state;
  }
};

const MyForm2 = ({ title, onSubmit }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const handleValidation = () => {
    const newErrors = {};
    if (!state.name) newErrors.name = "Tên không được để trống!";
    else if (state.name.length < 3 || state.name.length > 50) newErrors.name = "Tên phải chứa từ 3 đến 50 ký tự!";
    if (!state.age) newErrors.age = "Tuổi không được để trống!";
    else if (isNaN(state.age) || state.age < 18 || state.age > 100) newErrors.age = "Tuổi phải là số từ 18 đến 100!";
    if (!state.email) newErrors.email = "Email không được để trống!";
    else if (!/\S+@\S+\.\S+/.test(state.email)) newErrors.email = "Email không đúng định dạng!";
    if (state.phone && !/^\d{10,15}$/.test(state.phone)) newErrors.phone = "Số điện thoại phải từ 10 đến 15 chữ số!";
    if (!state.terms) newErrors.terms = "Bạn phải đồng ý với điều khoản!";
    setErrors(newErrors);
    setShowAlert(Object.keys(newErrors).length > 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      dispatch({ type: "SUBMIT" });
      onSubmit(state);
    }
  };

  return (
    <Container className="my-form2">
      <h3>{title}</h3>
      {showAlert && (
        <Alert variant="danger">
          <strong>Lỗi:</strong> Vui lòng điền đầy đủ thông tin.
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Tên</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formAge">
          <Form.Label>Tuổi</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={state.age}
            onChange={handleChange}
            isInvalid={!!errors.age}
          />
          <Form.Control.Feedback type="invalid">{errors.age}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Số điện thoại</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={state.phone}
            onChange={handleChange}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formTerms">
          <Form.Check
            type="checkbox"
            label="Đồng ý với điều khoản"
            name="terms"
            checked={state.terms}
            onChange={(e) => dispatch({ type: "SET_FIELD", field: "terms", value: e.target.checked })}
            isInvalid={!!errors.terms}
          />
          <Form.Control.Feedback type="invalid">{errors.terms}</Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

MyForm2.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MyForm2;