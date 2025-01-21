import {memo} from "react"


const PeopleList = () => {
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