import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const EventHandlingDemo = () => {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="component-container">
      <h1>Event Handling Demo</h1>
      <p className={count > 0 ? 'count-updated' : ''}>Count: {count}</p> {/* Add animation class */}
      <Button variant="primary" onClick={handleButtonClick}>Increase Count</Button>
    </div>
  );
};

export default EventHandlingDemo;