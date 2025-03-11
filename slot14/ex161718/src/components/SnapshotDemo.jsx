import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';

const SnapshotDemo = () => {
  const [count, setCount] = useState(0);
  const [snapshot, setSnapshot] = useState(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleSnapshot = () => {
    setSnapshot(count);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 4000);
  };

  const handleRestore = () => {
    if (snapshot !== null) {
      setCount(snapshot);
    }
  };

  return (
    <div className="component-container">
      <h1>State as a Snapshot Demo</h1>
      <p className={count !== snapshot ? "count-updated" : ""}>Count: {count}</p>
      {snapshot !== null && <p>Snapshot Value: {snapshot}</p>}
      <Button variant="primary" onClick={handleIncrement} className="me-2">
        Increment
      </Button>
      <Button variant="success" onClick={handleSnapshot} className="me-2">
        Take Snapshot
      </Button>
      <Button
        variant="warning"
        onClick={handleRestore}
        disabled={snapshot === null}
      >
        Restore Snapshot
      </Button>

      {showAlert && (
        <Alert variant="info" onClose={() => setShowAlert(false)} dismissible>
          Snapshot taken!
        </Alert>
      )}
    </div>
  );
};

export default SnapshotDemo;