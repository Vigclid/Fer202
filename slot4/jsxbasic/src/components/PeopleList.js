import {memo} from "react"


const PeopleList = ({people}) => {
    return (
        <ul>
            {
                 people.map((person,index) => 
                    <li key={index}> <span style={{color:"orange"}}>Name : {person.name}</span> ,
                     <span style={{color:"cyan"}}> Age : {person.age} </span>, 
                     Occupation : {person.occupation}</li>
                  )
            }
        </ul>
    )
}

export default memo(PeopleList)