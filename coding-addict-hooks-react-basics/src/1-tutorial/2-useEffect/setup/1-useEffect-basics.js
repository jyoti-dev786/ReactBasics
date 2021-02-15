import React, { useEffect, useState } from 'react';

const UseEffectBasics = () => {
  console.log('%c1st initial render', 'color:green;font-size:large;');
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (counter >= 1) {
      console.log('%c2nd useEffect render', 'color:red;font-size:large;');
      document.title = `You clicked ${counter}`;
    }

    return () => {
      console.log('unmount');
    };
  }, [counter]);

  return (
    <>
      <h2>Counter 1</h2>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => setCounter(counter + 1)}>
        counter 1
      </button>

      <br />
      <hr />
      <h2>Counter 2</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        counter 2
      </button>
    </>
  );
};

export default UseEffectBasics;
