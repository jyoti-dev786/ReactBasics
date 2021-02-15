import React from 'react';
import FourthComponent from './fourth-component';

const ThirdComponent = ({ book3 }) => {
  return (
    <>
      <FourthComponent book4={book3} />
    </>
  );
};

export default ThirdComponent;
