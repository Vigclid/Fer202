import logo from './logo.svg';
import './App.css';
import FormRegister from './components/FormRegister';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const notify = () => toast("Purchase successful!");

  return (
    <Container className='w-50'>
      <FormRegister />
    </Container>
  );
}

export default App;
