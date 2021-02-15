import React, { useRef, useState, useEffect } from 'react';

const UseRefBasics = () => {
  const [name, setName] = useState('');

  const changeHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  console.log(name);
  const refContainer = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setName(name);
    console.log(refContainer.current.value);
    console.log(refContainer.current);
    //refContainer.current.focus();
  };

  return (
    <>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <input
            ref={refContainer}
            type="text"
            value={name}
            onChange={changeHandler}
          />
          <button type="submit">submit</button>
        </div>
        <p>{name}</p>
      </form>
    </>
  );
};

export default UseRefBasics;
