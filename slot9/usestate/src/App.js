
import './App.css';
import NameList from './components/NameList.jsx';
import StudentCard from './components/StudentCard.jsx';
import UserProfile from './components/UserProfile.jsx';
import Welcome from './components/Welcome.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import image1 from './images/student1.jpg'
import image2 from './images/student2.jpg'
import image3 from './images/student3.jpg'

function App() {
  const userData = { name: "traltb@fe.edu.vn", age: 39 };
  const namesList = ["traltb@fe.edu.vn", "test@fe.edu.vn"];
  //DANH SACH STUDENT
  const students = [
    { name: "traltb1@fe.edu.vn", age: 39, avatar: image1 },
    { name: "traltb2@fe.edu.vn", age: 40, avatar: image2 },
    { name: "traltb3@fe.edu.vn", age: 41, avatar: image3 },
  ];

  return (
    <div className="App">
      <header className="App-header">
        
        
        <Welcome name="traltb@fe.edu.vn" />
        <Welcome name="sondxde180468@fpt.edu.vn" />
        <UserProfile user={userData} />
        <NameList names={namesList} />
        <Container>
        <h1 className="my-4 text-center">Student information</h1>
        <Row>
          {/*Duyệt qua mảng students và truyền từng đối tượng student vào Student Card*/}
          {students.map((student, index) => (
            <Col key={index} sm={12} md={4}>
              <StudentCard  student={student} />
            </Col>
          ))}
        </Row>
      </Container>

      </header>
    </div>
  );
}

export default App;
