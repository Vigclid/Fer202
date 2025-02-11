import logo from './logo.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons';
import HelloWorld from './components/HelloWorld';
import NumberCounter from './components/NumberCounter';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPreview from './components/CardPreview';
import QuestionFive from './components/QuestionFive';


function App() {
  return (
    
    <div className="App">
      <h2>Ex-9 : FER202  <FontAwesomeIcon icon={faCode} /> </h2>
      <header className="App-header">
        <AboutUs />
        <HelloWorld />
        <NumberCounter />
        <CardPreview />
        <QuestionFive />
      </header>
    </div>
  );
}

export default App;
