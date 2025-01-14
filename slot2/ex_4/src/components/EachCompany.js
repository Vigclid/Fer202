

import { useState ,memo} from "react"

const EachCompany = ({company}) => {

    return (

    
        <ul>
            {company.map((c,index)=>{
                return (
                <>
                <li key = {index}>{c.name}</li>
                </>
                )
            })}
        </ul>
    )
}

export default memo(EachCompany);