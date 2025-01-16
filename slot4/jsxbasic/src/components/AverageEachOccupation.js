import {memo} from "react"


const AverageEachOccupation = ({people}) => {

    const newObj = people.reduce((acc,cur) => {
        let {age, occupation} = cur;
        if (!acc[occupation]) {
            acc[occupation] = [];
          }
      
          acc[occupation].push(age);
      
          return acc;
    }
    ,{})

    const averageAges = Object.entries(newObj).reduce((acc, [occupation, ages]) => {

        const total = ages.reduce((sum, age) => sum + Number(age), 0);

        const average = total / ages.length;
      
        acc[occupation] = average;
        return acc;
      }, {});
      
    return (
        <pre>{JSON.stringify(averageAges,null,2)}</pre>     
    )
}

export default memo(AverageEachOccupation)