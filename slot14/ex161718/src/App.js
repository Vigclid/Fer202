import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventHandlingDemo from './components/EventHandlingDemo';
import RenderAndCommitDemo from './components/RenderAndCommitDemo';
import SnapshotDemo from './components/SnapshotDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EventHandlingDemo />
        <RenderAndCommitDemo />
        <SnapshotDemo />
      </header>
    </div>
  );
}

export default App;