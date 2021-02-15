import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const moreComplexHandler = () => {
    setTimeout(() => {
      setCounter((prevsCounter) => {
        return prevsCounter + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h2>regular counter</h2>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        increase
      </button>
      <button className="btn" onClick={() => setCounter(0)}>
        reset
      </button>
      <button className="btn" onClick={() => setCounter(counter - 1)}>
        decrese
      </button>
      <br />
      <br />
      <hr />
      <h2>More Complex counter</h2>
      <h1>{counter}</h1>
      <button className="btn" onClick={moreComplexHandler}>
        increase later
      </button>
    </>
  );
};

export default UseStateCounter;
