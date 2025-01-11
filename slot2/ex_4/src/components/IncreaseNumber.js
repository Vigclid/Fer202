import { useState ,memo} from "react"




const IncreaseNumber = () => {
    const [number,setNumber]  = useState(0);
    return (
        
        <div>
            <div>{number}</div>
            <button onClick={() => setNumber(number+1)}>Increase</button>
            <button onClick={() => setNumber(number-1)}>Increase</button>
        </div>
    )
}

export default memo(IncreaseNumber);