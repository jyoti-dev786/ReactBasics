import React, { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  console.log('function render');
  useEffect(() => {
    console.log('effect render');
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>count</button>
    </>
  );
}

export default Counter;
