import React, { useContext } from "react";
import { TodoContext } from "./TodoProvider";
import { ListGroup, Button } from "react-bootstrap";

const  TodoList = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  return (
    <ListGroup >
      {state.todos.map((todo) => (
        <ListGroup.Item
          key={todo.id}
          className="d-flex justify-content-between align-items-center"
        >
          {todo.text}
          <Button variant="danger" onClick={() => handleRemoveTodo(todo.id)}>
            Remove
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default TodoList;