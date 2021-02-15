import React from 'react';

const SecondComponent = ({ children }) => {
  return (
    <div>
      <h3>I am second component</h3>
      {children}
    </div>
  );
};

export default SecondComponent;
