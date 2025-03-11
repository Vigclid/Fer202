import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function EventHandlingDemo() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleButtonClick}>Increment</Button>
    </div>
  );
}

export default EventHandlingDemo;