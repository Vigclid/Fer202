import React, { useReducer } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

// Reducer function to handle counter actions
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2>Counter: {state.count}</h2>
          <Button
            variant="warning"
            className="m-2"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            +
          </Button>
          <Button
            variant="secondary"
            className="m-2"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            -
          </Button>
          <Button
            variant="danger"
            className="m-2"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;