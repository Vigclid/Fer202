import { useState,memo } from 'react';

const TextboxAgeName = () => {
  const [name, setName] = useState('Adam');
  const [age, setAge] = useState(35);
    return (
        <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => {setName(e.target.value);
            console.log(e.target.value)
          }} 
        />
        <p>My name is {name}</p>
  
  
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setAge(parseInt(e.target.value, 10))} 
        />
        <p>My age is {age}</p>
      </div>
  
    )
}

export default memo(TextboxAgeName)