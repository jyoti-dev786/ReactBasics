import React from 'react';
import { books } from '../DATA/bookData';

import ThirdComponent from './third-component';
const SecondComponent = ({ book2 }) => {
  return (
    <>
      <ThirdComponent book3={book2} />
    </>
  );
};

export default SecondComponent;
