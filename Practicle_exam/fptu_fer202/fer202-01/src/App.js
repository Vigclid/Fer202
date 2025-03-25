
import './App.css';
import { Route, Router, Routes , useLocation} from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { LaptopList } from './components/LaptopList';
import { LaptopDetail } from './components/LaptopDetail';


function App() {
  const _location = useLocation();
  console.log(_location)
  return (
    <>
    <Routes>
      <Route path='/' element={<LoginForm />}/>
      <Route path='/home' element={<LaptopList/>}/>
      <Route path='/product/:id' element={<LaptopDetail />}/>
    </Routes>
    </>
  );
}

export default App;
