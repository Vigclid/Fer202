import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventHandlingDemo from './components/EventHandlingDemo';
import MyAlert from './components/Alert';
import MyDropdown from './components/MyDropdown';
import MyModal from './components/MyModal';
import MyRadioButton from './components/MyRadioButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Handling Examples</h1>
        <EventHandlingDemo />
        <MyAlert />
        <MyDropdown className="w-10" />
        <MyModal />
        <MyRadioButton />
      </header>
    </div>
  );
}

export default App;
