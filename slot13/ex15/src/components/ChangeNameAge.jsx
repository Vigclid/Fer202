import React, { useReducer } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

// Reducer function to handle form state
function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", value: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: "SET_AGE", value: e.target.value });
  };

  return (
    <Container
      className="mt-4 w-50"
      style={{
        border: "2px solid rgb(142, 52, 0)",
        boxShadow: "0 6px 12px rgba(255, 147, 147, 0.9)",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "rgb(24, 24, 24)",
      }}
    >
      <Row className="justify-content-md-center">
        <Col md="6">
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={state.name} onChange={handleNameChange} placeholder="Input name" />
            </Form.Group>
            <Form.Group controlId="formAge" className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" value={state.age} onChange={handleAgeChange} placeholder="Input age" />
            </Form.Group>
          </Form>
          <div>
            <AnimatePresence mode="wait">
              {state.name && (
                <motion.h3
                  key="name"
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(5px)" }}
                  transition={{ duration: 0.5 }}
                >
                  Name: {state.name}
                </motion.h3>
              )}
            </AnimatePresence>
            <AnimatePresence mode="wait">
              {state.age && (
                <motion.h3
                  key="age"
                  initial={{ opacity: 0, filter: "blur(5px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(5px)" }}
                  transition={{ duration: 0.5 }}
                >
                  Age: {state.age}
                </motion.h3>
              )}
            </AnimatePresence>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ChangeNameAge;
