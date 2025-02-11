import {memo, useState} from 'react'
import { Button , Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpLong,faDownLong } from '@fortawesome/free-solid-svg-icons';
import myImage from '../assets/Da_faug.png';

const CardPreview = () => {

    return (
        <div style={{margin:"24px"}}>
            <h4>Question 4:</h4>
            <Card className="d-flex flex-row align-items-center bg-secondary text-white">
                <Card.Img 
                    src={myImage} 
                    className="small-img" 
                    style={{ width: "120px", height: "auto" }} 
                />
                <Card.Body>
                    <Card.Title>Looking back, and see what happend on the back!</Card.Title>
                    <Card.Text>
                    ...
                    </Card.Text>
                </Card.Body>
                </Card>

        </div>
    )
}

export default memo(CardPreview)