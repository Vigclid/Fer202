
import {memo} from "react"


function GroupOccupation({people}) {
    const newObj = people.reduce((acc,cur) => {
        let {name, occupation} = cur;
        if (!acc[occupation]) {
            acc[occupation] = [];
          }
      
          acc[occupation].push(name);
      
          return acc;
    }
    ,{})

    
    return (
        <pre>{JSON.stringify(newObj,null,2)}</pre>     
    )
  }
  export default memo(GroupOccupation);
  