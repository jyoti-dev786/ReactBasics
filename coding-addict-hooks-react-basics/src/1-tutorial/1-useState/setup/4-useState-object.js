import React, { useState } from 'react';

const UseStateObject = () => {
  /*first method */
  //   const [person, setPerson] = useState({
  //     name: 'Jyoti',
  //     age: 34,
  //     message: 'random Title',
  //   });

  //   const changeTitleHandler = () => {
  //     setPerson({ ...person, message: 'hello World' });
  //   };

  /*second method */
  const [name, setName] = useState('Jyoti');
  const [age, setAge] = useState(34);
  const [message, setMessage] = useState('random title');

  const changeTitleHandler = () => {
    setMessage('hello World');
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeTitleHandler}>
        change title
      </button>
    </>
  );
};

export default UseStateObject;
