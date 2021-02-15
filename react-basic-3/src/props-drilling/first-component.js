import React from 'react';
import SecondComponent from './second-component';

const FirstComponent = ({ books }) => {
  // console.log(books);

  return (
    <>
      <SecondComponent book2={books} />
    </>
  );
};

export default FirstComponent;
