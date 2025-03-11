import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";

function MyRadioButton() {
  const [selectedValue, setSelectedValue] = useState("option1");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    setAlertMessage(`You selected: ${value}`); // Set the alert message
    setShowAlert(true); // Show the alert
  };

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <div className="my-5">
      <Form.Check
        type="radio"
        label="Option 1"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleChange}
      />
      <Form.Check
        type="radio"
        label="Option 2"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
      />

      {showAlert && (
        <Alert variant="info" onClose={handleCloseAlert} dismissible>
          {alertMessage}
        </Alert>
      )}
    </div>
  );
}

export default MyRadioButton;