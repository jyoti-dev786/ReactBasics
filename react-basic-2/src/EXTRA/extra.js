import React, { useEffect, useState } from 'react';

function ExtraFunction(){
    const[count, setCount] =useState(0);

    console.log("%cthis is function render", "color: blue;");


    const buttonRender = () =>{
        console.log("%cThis is Button render", "color: red;");
    }

    useEffect(() =>{
        document.title =`You clicked ${count} Times`
        console.log("%cthis is useEffect hook", "color:green");
    })

    return(
        <>
        <h1>This is Function Component</h1>
        <h2>You clicked {count} times</h2>
        <button onClick={buttonRender}>click me</button>
        <button onClick={() => setCount(count +1)}>Effect Click</button>
        </>
    );
}

export default ExtraFunction;