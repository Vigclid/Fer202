import { memo } from "react";

const NameList = ({ names }) => {
    return (
      <div>
        <ul>
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default memo(NameList);
  