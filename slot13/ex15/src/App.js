import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import ChangeNameAge from './components/ChangeNameAge';
import ItemList from './components/ItemList';
import QuestionBank from './components/QuestionBank';
import { Container, Row, Col } from "react-bootstrap";
import { TodoProvider } from './components/TodoProvider';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className='div-total'>
      <div className='div-total-info'>
      <h1 className='text-center'>-----EX-1------</h1>
      <Counter />
      <h1 className='text-center'>-----EX-2------</h1>
      <ChangeNameAge />
      <h1 className='text-center'>-----EX-3------</h1>
      <ItemList />
      <h1 className='text-center'>-----EX-4------</h1>
      <QuestionBank />
      <h1 className='text-center'>-----EX-5------</h1>
      <TodoProvider>
        <Container className='mt-4'>
          <Row className="justify-content-md-center">
            <Col md="6">
                <TodoForm />
                <TodoList />
            </Col>
          </Row>
        </Container>
      </TodoProvider>
      </div>
    </div>
  );
}

export default App;
