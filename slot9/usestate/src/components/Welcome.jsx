import { memo } from "react";


function Welcome({ name }) {
    return (
      <div>
        <h1>Hello, {name}</h1>
      </div>
    );
  }
  export default memo(Welcome);
  
  