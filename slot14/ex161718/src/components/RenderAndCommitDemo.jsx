import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const RenderAndCommitDemo = () => {
  const [count, setCount] = useState(0);

  console.log("Rendering: Count =", count);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  useEffect(() => {
    console.log("Initial Commit: Component mounted");
  }, []);

  useEffect(() => {
    if (count > 0) {
      console.log("Commit: Count updated to", count);
    }
  }, [count]);

  return (
    <div className="component-container">
      <h1>Render and Commit Demo</h1>
      <p className={count > 0 ? "count-updated" : ""}>Count: {count}</p>
      <Button variant="success" onClick={handleClick}>Increment</Button>
    </div>
  );
};

export default RenderAndCommitDemo;