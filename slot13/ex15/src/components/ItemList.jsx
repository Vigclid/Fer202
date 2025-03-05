import React, { useReducer, useState } from "react";
import { Container, Form, Button, ListGroup, Row, Col, InputGroup } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";

function listReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.item] };
    case "REMOVE_ITEM":
      return { ...state, items: state.items.filter((item) => item.id !== action.id) };
    case "EDIT_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, name: action.name } : item
        ),
      };
    default:
      return state;
  }
}

const initialState = { items: [] };

function ItemList() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  const [newItemName, setNewItemName] = useState("");
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("created");
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");

  const handleAddItem = () => {
    if (newItemName) {
      const newItem = { id: Date.now(), name: newItemName, created: Date.now() };
      dispatch({ type: "ADD_ITEM", item: newItem });
      setNewItemName("");
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", id });
  };

  const startEditing = (item) => {
    setEditingId(item.id);
    setEditName(item.name);
  };

  const handleEditItem = (id) => {
    dispatch({ type: "EDIT_ITEM", id, name: editName });
    setEditingId(null);
    setEditName("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditName("");
  };

  const sortedItems = [...state.items]
    .filter((item) => item.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "alphabetical") return a.name.localeCompare(b.name);
      return b.created - a.created;
    });

  return (
    <Container className="mt-4 w-75">
      <Row>
        <Col md={8} className="offset-md-2">
          <Form>
            <Form.Group controlId="formItem">
              <Form.Label>Enter Item:</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Enter item name"
                />
                <Button variant="warning" onClick={handleAddItem}>
                  Add Item
                </Button>
              </InputGroup>
            </Form.Group>
          </Form>

          <Form.Group controlId="filter" className="mt-3">
            <Form.Label>Filter Items:</Form.Label>
            <Form.Control
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Search items"
            />
          </Form.Group>

          <Form.Group controlId="sort" className="mt-3">
            <Form.Label>Sort By:</Form.Label>
            <Form.Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="created">Created Time</option>
              <option value="alphabetical">Alphabetical</option>
            </Form.Select>
          </Form.Group>

          <h3 className="mt-4">Item List:</h3>
          <ListGroup>
            <AnimatePresence>
              {sortedItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, filter: "blur(5px)", scale: 0.9 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                  transition={{ duration: 0.5 }}
                >
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    {editingId === item.id ? (
                      <>
                        <Form.Control
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          style={{ width: "25%" }}
                        />
                        <div>
                          <Button variant="success" onClick={() => handleEditItem(item.id)} className="me-2">
                            Save
                          </Button>
                          <Button variant="secondary" onClick={handleCancelEdit}>
                            Cancel
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        {item.name}
                        <div>
                          <Button variant="warning" onClick={() => startEditing(item)} className="me-2">
                            Edit
                          </Button>
                          <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
                            Remove
                          </Button>
                        </div>
                      </>
                    )}
                  </ListGroup.Item>
                </motion.div>
              ))}
            </AnimatePresence>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemList;
