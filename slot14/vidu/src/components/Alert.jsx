import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function MyAlert() {
  const [show, setShow] = useState(false); // Initially hide the alert

  const handleButtonClick = () => {
    setShow(true); // Show the alert when the button is clicked
  };

  const handleAlertClose = () => setShow(false); // Close the alert

  return (
    <div className="my-5">
      <Button onClick={handleButtonClick}>Show Alert</Button>
      {show && (
        <Alert variant="success" onClose={handleAlertClose} dismissible>
          <Alert.Heading>Success!</Alert.Heading>
          <p>This is a success alert—check it out!</p>
        </Alert>
      )}
    </div>
  );
}

export default MyAlert;