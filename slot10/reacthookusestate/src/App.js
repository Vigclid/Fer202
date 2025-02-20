import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TextboxAgeName from './components/TextboxAgeName';
import ProductList from './components/ProductList';
import SearchFilter from './components/SearchFilter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Example 1: </h3>
        <Counter />
        <h3>Example 2: </h3>
        <TextboxAgeName />
        <h3>Example 3: </h3>
        <ProductList />
        <h3>Example 4: </h3>
        <SearchFilter />
      </header>
    </div>
  );
}

export default App;
