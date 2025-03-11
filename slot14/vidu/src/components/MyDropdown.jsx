import React, { useState } from "react";
import { Dropdown, DropdownButton, Container, Card } from "react-bootstrap";

function MyDropdown() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelect = (eventKey) => { // Only need eventKey
    setSelectedItem(eventKey); // Use eventKey directly
  };

  return (
    <Container className="w-50 my-5">
      <Card className="mt-3 " >
        <Card.Body>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedItem || "Select an item"}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="Item 1">Item 1</Dropdown.Item>
            <Dropdown.Item eventKey="Item 2">Item 2</Dropdown.Item>
            <Dropdown.Item eventKey="Item 3">Item 3</Dropdown.Item>
          </DropdownButton>

          {selectedItem && (
            <div className="mt-2">
              <p>You selected: {selectedItem}</p>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyDropdown;