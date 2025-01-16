import {memo} from "react"


const PeopleListInTable = ({people}) => {
    return (
        <table border = "2" style={{borderCollapse: "collapse"}}>
            <tr>
                <th style={{width:"400px"}}>Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
            {
                 people.map((person,index) => 
                    <tr key={index}>
                        <th >{person.name}</th>
                        <th>{person.age}</th>
                        <th>{person.occupation}</th>
                    </tr>
                  )
            }
        </table>
    )
}

export default memo(PeopleListInTable)