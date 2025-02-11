import {memo, useState} from 'react'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong,faDownLong } from '@fortawesome/free-solid-svg-icons';


const NumberCounter = () => {
    const [number,setNumber] = useState(0);

    const handleNumber = (value) => {
        if (value) {
            setNumber(prev => prev-1)
        } else {
            setNumber(prev => prev+1)
        }
    }
    return (
        <div style={{margin:"24px"}}>
            <h4>Question 3:</h4>
            <h3>{number}</h3>
            <Button variant="success" onClick={() => handleNumber(0)}><FontAwesomeIcon icon={faUpLong} /></Button>
            <Button variant="danger" onClick={() => handleNumber(1)}><FontAwesomeIcon icon={faDownLong} /></Button>

        </div>
    )
}

export default memo(NumberCounter)