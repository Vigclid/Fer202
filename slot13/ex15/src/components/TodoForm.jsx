import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoProvider";
import { Form, Button } from "react-bootstrap";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    if (text) {
      const newTodo = { id: Date.now(), text };
      dispatch({ type: "ADD_TODO", todo: newTodo });
      setText("");
    }
  };

  return (
    <Form>
      <Form.Group controlId="formTodo">
        <Form.Label>Enter Todo</Form.Label>
        <Form.Control
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo"
        />
      </Form.Group>
      <Button variant="warning" onClick={handleAddTodo} className="mt-1">
        Add Todo
      </Button>
    </Form>
  );
}

export default TodoForm;