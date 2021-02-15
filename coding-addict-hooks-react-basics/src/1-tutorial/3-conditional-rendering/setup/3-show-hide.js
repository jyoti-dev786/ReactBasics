import React, { useEffect, useState } from 'react';

const ShowHide = () => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setToggleBtn(!toggleBtn)}>
        show/hide
      </button>
      {toggleBtn && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const resizeHandler = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h1>window</h1>
      <h2>Size:{size} px</h2>
    </div>
  );
};

export default ShowHide;
