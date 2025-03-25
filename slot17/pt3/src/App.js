import logo from './logo.svg';
import './App.css';
import { Routes , Route, Outlet } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/homepage" element={<ProductList /> } />
        <Route path="/product/:id" element={<ProductDetail />}/>
      </Routes>
    </div>
  );
}

export default App;
