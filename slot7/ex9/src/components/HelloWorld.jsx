import {memo} from 'react'

const HelloWorld = () => {

    return (
        <div style={{margin:"24px"}}>
            <h4>Question 2: </h4>
            <h3>Hello World! 💞</h3>
        </div>
    )
}

export default memo(HelloWorld)