import React, { useState } from 'react';

const ShortCircuit = () => {
  const [toggleBtn, setToggleBtn] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setToggleBtn(!toggleBtn)}>
        {toggleBtn ? 'hide' : 'show'}
      </button>
      {toggleBtn && <h1>Hello World</h1>}
    </>
  );
};

export default ShortCircuit;
