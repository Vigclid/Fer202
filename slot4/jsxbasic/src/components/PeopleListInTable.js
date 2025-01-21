import {memo} from "react"


const PeopleListInTable = ({people}) => {
    return (
        <table border = "2" style={{borderCollapse: "collapse"}}>
            <thead>
            <tr>
                <th style={{width:"400px"}}>Name</th>
                <th>Age</th>
                <th>Occupation</th>
            </tr>
            </thead>
            <tbody>
            {
                 people.map((person,index) => 
                    <tr key={index}>
                        <th >{person.name}</th>
                        <th>{person.age}</th>
                        <th>{person.occupation}</th>
                    </tr>
                  )
            }
            </tbody>
        </table>
    )
}

export default memo(PeopleListInTable)