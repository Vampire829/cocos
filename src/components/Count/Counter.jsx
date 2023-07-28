import React, { useState } from "react";

const Counter = () =>{
    const [count,setCount]=useState(0)
    const emin=()=>{
        if(count>0){
            setCount(count-1)
        }
    }
    const daud =()=>{
        setCount(count+1)
    }
  return (
    <div>
      <button onClick={emin}>-</button>
          <h1>{count}</h1>
      <button onClick={daud}>+</button>
    </div>
  );
};

export default Counter;
