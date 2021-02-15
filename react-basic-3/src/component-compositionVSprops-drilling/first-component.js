import React from 'react';
function FirstComponent({ children }) {
  return (
    <div>
      <h3>I am the first component</h3>
      {children}
    </div>
  );
}

export default FirstComponent;
