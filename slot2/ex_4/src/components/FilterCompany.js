

import { useState ,memo} from "react"

const FilterCompany = ({company}) => {
    return (
    <ul>
          {company.filter((c) => {
            return c.start >= 1987;
          }).map((c,index)=> {
            return (
              <>
                <li key = {index}>{c.name}</li>
              </>
            )
          })}
        </ul>
    )
}

export default memo(FilterCompany);