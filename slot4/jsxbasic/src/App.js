import logo from './logo.svg';
import './App.css';
import NamePerson from './components/NamePerson';
import PeopleList from './components/PeopleList';
import PeopleListInTable from './components/PeopleListInTable';
import FirstTeenager from './components/FirstTeenager';
import AreAllTeenagers from './components/AreAllTeenagers';
import SortOccupationAndAge from './components/SortOccupationAndAge';
import GroupOccupation from './components/GroupOccupation';
import OldesAndYougestPerson from './components/OldesAndYougestPerson';
import AverageEachOccupation from './components/AverageEachOccupation';

function App() {
  const h1Style = {
    color: "blue",
    textAlign: "center",
  };


  const people = [
    {
      name : "Ronaldo",
      age : "31",
      occupation : "Football player"
    },
    {
      name : "Ngo Pham Khanh Ngoc",
      age : "19",
      occupation : "Student"
    },
    {
      name : "Stephen Willam Hawking",
      age : "76",
      occupation : "Theoretical physicist"
    },
    {
      name : "Doan Xuan Son",
      age : "21",
      occupation : "Student"
    },
    {
      name : "Elon Musk",
      age : "42",
      occupation : "SpaceX's CEO"
    },
    {
      name : "Santa",
      age : "666",
      occupation : "Hell's captain"
    } 
  ]


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={h1Style}>Hello world!</h1>

        <p>---------------------EX1----------------------</p>
        <NamePerson />
        <p>---------------------EX2 (inside App.js)----------------------</p>
        <ul>
          {
            people.map((person,index) => 
              <li key={index}> <span style={{color:"orange"}}>Name : {person.name}</span> ,
               <span style={{color:"cyan"}}> Age : {person.age} </span>, 
               Occupation : {person.occupation}</li>
            )
          }
        </ul>
        
        <p>---------------------EX3 (components)----------------------</p>
        <PeopleList />
        <p>---------------------EX4----------------------</p>
        <PeopleListInTable people = {people}/>
        <p>---------------------EX5----------------------</p>
        <FirstTeenager people = {people}/>
        <p>---------------------EX6----------------------</p>
        <AreAllTeenagers people = {people}/>
        <p>---------------------EX7----------------------</p>
        <SortOccupationAndAge people = {people}/>
        <p>---------------------EX8----------------------</p>
        <GroupOccupation people = {people} />
        <p>---------------------EX9----------------------</p>
        <OldesAndYougestPerson people = {people} />
        <p>---------------------EX10----------------------</p>
        <AverageEachOccupation people = {people} />
      </header>
    </div>
  );
}

export default App;
