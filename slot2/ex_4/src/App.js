import logo from './logo.svg';
import './App.css';
import EachCompany from './components/EachCompany';
import FilterCompany from './components/FilterCompany';
import { useState } from 'react';
import FilterRetail from './components/FilterRetail';
import SortCompanyEnd from './components/SortCompanyEnd';
import IncreaseNumber from './components/IncreaseNumber';
import HandleRec from './components/HandleRec';
import HandleTri from './components/HandleTri';

function App() {


  const [toggleAll,setToggleAll] = useState(false)
  const [toggleFilter,setToggleFilter] = useState(false)
  const [toggleFilterRetail,setToggleFilterRetail] = useState(false)
  const [toggleSort,setToggleSort] = useState(false)
  const [number,setNumber] = useState(0);
  const [unknowArray,setUnknowArray] = useState([]);
  const [ur,setUr] = useState({});

  const [triToggle,setTriToggle] = useState(false);
  const [recToggle,setRecToggle] = useState(false);


  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 }, 
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }  
  ];



  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };
  
  const {address : {street}} = person;


  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const {name, category, start, end} = companies[0];

  const new_com = {
    name : name,
    category: category,
    start : start,
    end : end
  }


  var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]


  const handleGenerate = (inputValue) => {
    setUnknowArray(prev => [...prev,inputValue]); 
  };

  var array = [1, 2, 3, 4]

  
  const printName = (c) =>{
    return (
      <div>New Company by restructuring: {c.name}</div>
    )
  }


  ages.sort(function(a, b){return a-b});
  
  const total = ages.reduce((acc,cur) => acc +cur,0);




  
  const handleURL = (url) => {
    const newOb = {};
    try {const object = url.split('?')[1].split('&'); 
      object.map((ob) => {
          var part = ob.split('=');
          newOb[part[0]] = part[1]; 
      });
      setUr(newOb);}
      catch {}
    
};
  

  return (
    <div className="">


      <nav style={{background : "grey", padding :"16px" , position: "fixed" ,width : "100%"}}>
        <a href="/html/" style={{backgroundColor : "green"}}>HOME</a> |
        <a href="/css/">SEARCH</a> |
        <a href="/js/">CONTRACT</a> |
        <a href="/python/" style={{backgroundColor : "black"}}>LOGIN</a>
    </nav>



      <header className="App-header">
        <h1>Hello <span style={{color: "blue"}}>React</span></h1>


        <img src={logo} className="App-logo" alt="logo" />
        <i style={{color : "cyan"}}>This is the best React Logo</i>
        <i style={{fontSize: "16px", color:"grey"}} >(I don't know why is this here either)</i>

        <p style={{color : "blue"}}>This is JSX</p>


        <h2>Course Names</h2>
        <ul>
          <li>React</li>
          <li>ReactNative</li>
          <li>Nodejs</li>
        </ul>
        <h4>-----------------------------------</h4>
        <h3> First people is teenager : {people.find(pp => (pp.age >= 10 ) && (pp.age <= 20)).name}</h3>
        <h3> People is teenager : {
          people.filter((pp) => (pp.age >= 10 ) && (pp.age <= 20))
          .map((pp)=> <> | {pp.name}</>)
          } </h3>

        <h3>Every people is Teenager? {people.find(pp => (pp.age < 10 ) || (pp.age > 20)) === "undefined" ? "True" : "False"}</h3>

       
        <h3>Who is Teenager?</h3>
        <ul>
          {people.map((pp,key) => ((pp.age >= 10  && pp.age <= 20) ? (<li key = {key}>{pp.name} | true</li>) :
           <li key = {key}>{pp.name} | false</li>))}
        </ul>
        <h4>-----------------------------------</h4>
        <h3> Convert array on to a single one: {
            array.reduce((accu,current) => accu = accu + current,0)
          }</h3>
        <h3> Product of all elements: {
            array.reduce((accu,current) => accu = accu * current,1)
          }
          </h3>


        <h4>-----------------------------------</h4>
        {/* Handle button */}
        <div>
          <button style={toggleAll === true ? {backgroundColor: "#333", color : "#fff"} : {}} onClick={() => setToggleAll(!toggleAll)}>Show All Company</button>
          <button style={toggleFilter === true ? {backgroundColor: "#333", color : "#fff"} : {}}onClick={() => setToggleFilter(!toggleFilter)}>Show Company After 1987</button>
          <button style={toggleFilterRetail === true ? {backgroundColor: "#333", color : "#fff"} : {}} onClick={() => setToggleFilterRetail(!toggleFilterRetail)}>Companies has Retail</button>
          <button style={toggleSort === true ? {backgroundColor: "#333", color : "#fff"} : {}} onClick={() => setToggleSort(!toggleSort)}>Sort by end</button>

        </div>



        {/* SHOW */}
        {toggleAll && <EachCompany company={companies}/>}
      
        {toggleFilter && <FilterCompany company={companies}/>}

        {toggleFilterRetail && <FilterRetail company={companies} />}

        {toggleSort && <SortCompanyEnd company={companies} />}

        {printName(new_com)}
        <b>Array's Ages after sort: {ages.map((c) => <> {c}</>)}</b>
        <b key = "1">Sum of AGES : {total}</b>

        <div>
          
          <input
          onChange={e => setNumber(e.target.value)}
          placeholder='Enter numbers' 
          />
          <button onClick={() => handleGenerate(number)}>Generate</button>
          </div> 

        <div>
          <h3>Generated Numbers: {unknowArray.map((num, index) => <> {num}</>)}</h3>     
        </div>
        <h3> Street of person by Destructuring: {street} </h3>
        <IncreaseNumber />
        <h3> Split URL</h3>
        <div>
          
          <input
          onChange={e => handleURL(e.target.value)}
          placeholder='Enter URL' 
          />
          </div> 

          <pre>{JSON.stringify(ur,null,2)}</pre>     


          <h4>-----------------------------------</h4>
          <div>
            <button style={recToggle === true ? {backgroundColor: "#333", color : "#fff"} : {}} onClick={() => setRecToggle(!recToggle)}>Rectange</button>
            <button style={triToggle === true ? {backgroundColor: "#333", color : "#fff"} : {}} onClick={() => setTriToggle(!triToggle)}>Triangle</button>
          </div>
        {recToggle && <HandleRec />}
      
        {triToggle && <HandleTri />}
      </header>
    </div>
  );
}

export default App;
