import React, { useState } from 'react';

const UseStateBasics = () => {
  //   let value = useState(1)[0];
  //   let handler = useState(1)[1];
  //   console.log('This is variable is used to hold the default value', value);
  //   console.log('This is s function which controls the above value', handler);

  const [text, setText] = useState('Random Title');
  const changeHandler = () => {
    if (text === 'Hello World') {
      setText('Random Title');
    } else {
      setText('Hello World');
    }
  };

  return (
    <>
      <h1>{text}</h1>

      <button className="btn" onClick={changeHandler}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
