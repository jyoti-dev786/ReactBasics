import React from 'react';

function ThirdComponent({ children }) {
  console.log(children);
  return (
    <div>
      <h3>I am the third component</h3>
      {children}
    </div>
  );
}

export default ThirdComponent;
