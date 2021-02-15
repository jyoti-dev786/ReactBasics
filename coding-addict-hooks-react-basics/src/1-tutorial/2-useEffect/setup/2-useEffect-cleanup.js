import React, { useEffect, useState } from 'react';

const UseEffectCleanUp = () => {
  console.log('%cinitial render', 'color:green;font-size:large');
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    console.log('%cuseEffect method', 'color:red;font-size:large');

    return () => {
      console.log('%ccleaning up', 'color:blue;font-size:large');
      window.removeEventListener('resize', checkSize);
    };
  });
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanUp;
