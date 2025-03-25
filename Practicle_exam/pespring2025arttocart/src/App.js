import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import { HomePage } from './components/ListReviewProduct/HomePage';
import { OrderHistory } from './components/ListCartProduct/OrderHistory';
import { ReviewHistory } from './components/ListReviewProduct/ReviewHistory';

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/reviews' element={<ReviewHistory   />}/>
    </Routes>
  );
}

export default App;