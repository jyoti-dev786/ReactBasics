import React, { useState } from 'react';

const UseEffectFunction = ()=>{
    const [count, setCount] = useState(0);

        //console.log("Render Function Component");

        const Effect = ()=>{
            
        }
       

    return(
        <>
        <h1>This is Use Effect Hook in extra 2</h1>
        <br/>
        <br/>
        <button onClick={()=> setCount(count + 1)}>Click Me</button>
        
        <h2>{count}</h2>
        </>
    );
}
export default UseEffectFunction;