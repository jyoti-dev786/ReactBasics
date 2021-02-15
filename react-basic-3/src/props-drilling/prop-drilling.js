import React from 'react';
import FirstComponent from './first-component';
import { books } from '../DATA/bookData';

const PropDrilling = () => {
  return (
    <>
      <FirstComponent books={books} />
    </>
  );
};

export default PropDrilling;
