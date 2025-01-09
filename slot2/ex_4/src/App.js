import logo from './logo.svg';
import './App.css';
import EachCompany from './components/EachCompany';
import FilterCompany from './components/FilterCompany';
import { useState } from 'react';
import FilterRetail from './components/FilterRetail';
import SortCompanyEnd from './components/SortCompanyEnd';

function App() {

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
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const {name, category, start, end} = companies[0];

  const new_com = {
    name : name,
    category: category,
    start : start,
    end : end
  }

  const printName = (c) =>{
    return (
      <div>New Company by restructuring: {c.name}</div>
    )
  }


  ages.sort(function(a, b){return a-b});
  
  const total = ages.reduce((acc,cur) => acc +cur,0);

  const [toggleAll,setToggleAll] = useState(false)
  const [toggleFilter,setToggleFilter] = useState(false)
  const [toggleFilterRetail,setToggleFilterRetail] = useState(false)
  const [toggleSort,setToggleSort] = useState(false)


  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

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

        
      </header>
    </div>
  );
}

export default App;
