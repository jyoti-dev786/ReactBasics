import React, { useState } from 'react';
import { useEffect } from 'react';

function Greeting({ name }) {
  console.log('%cthis is initial render', 'color:blue;font-size:large');
  let [simpleString, setSimpleString] = useState('Hello World');

  const onchangeHandler = () => {
    setSimpleString((simpleString = 'This is React Course'));
  };

  useEffect(() => {
    console.log('use effect render');
    document.title = 'Greetings......';
  }, []);

  return (
    <>
      <p>{simpleString}</p>
      <button onClick={onchangeHandler}>click</button>
    </>
  );
}

export default Greeting;
