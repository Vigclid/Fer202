import logo from './logo.svg';
import './App.css';

function App() {
  const course = [
    "React",
    "ReactNative",
    "NodeJs"
  ]
  return (
    <div className="">
      <header className="">
        <h1>Course Names</h1>
        <ul>
        {course.map((course)=>{
          return(
            <>  
            <li>{course}</li>
            </>
          )
        })}
        </ul>
      </header>
    </div>
  );
}

export default App;
